import { useState } from "react";
import { Template, Message } from "@/types/chat";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { processMessage } from "@/services/ai";

export const useTemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTemplateSelect = async (template: Template) => {
    try {
      setSelectedTemplate(template);
      setMessages([]);

      const user = (await supabase.auth.getUser()).data.user;
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to start a conversation.",
          variant: "destructive"
        });
        return;
      }

      const { error } = await supabase
        .from('chat_conversations')
        .insert({
          user_id: user.id,
          template_id: template.id,
          title: `Chat with ${template.name}`
        });

      if (error) {
        console.error('Error creating conversation:', error);
        toast({
          title: "Error",
          description: "Failed to start conversation. Please try again.",
          variant: "destructive"
        });
        return;
      }

      if (template.example_messages && template.example_messages.length > 0) {
        const typedMessages = template.example_messages.map(msg => ({
          role: msg.role as "user" | "assistant",
          content: msg.content
        }));
        setMessages(typedMessages);
      }

      toast({
        title: "Template Selected",
        description: `Started conversation with ${template.name}`,
      });
    } catch (error) {
      console.error('Error selecting template:', error);
      toast({
        title: "Error",
        description: "Failed to select template. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedTemplate) return;

    const userMessage: Message = { role: "user", content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const user = (await supabase.auth.getUser()).data.user;
      if (user) {
        const { data: conversation } = await supabase
          .from('chat_conversations')
          .select('id')
          .eq('user_id', user.id)
          .eq('template_id', selectedTemplate.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (conversation) {
          await supabase
            .from('chat_messages')
            .insert({
              conversation_id: conversation.id,
              role: 'user',
              content
            });
        }
      }

      const response = await processMessage(
        content,
        selectedTemplate.system_prompt,
        messages,
        process.env.GEMINI_API_KEY || ''
      );

      const botMessage: Message = {
        role: "assistant",
        content: response
      };
      
      if (user) {
        const { data: conversation } = await supabase
          .from('chat_conversations')
          .select('id')
          .eq('user_id', user.id)
          .eq('template_id', selectedTemplate.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (conversation) {
          await supabase
            .from('chat_messages')
            .insert({
              conversation_id: conversation.id,
              role: 'assistant',
              content: response
            });
        }
      }
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
      toast({
        title: "Error",
        description: "Failed to process message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setMessages([]);
  };

  return {
    selectedTemplate,
    messages,
    isLoading,
    handleTemplateSelect,
    handleSendMessage,
    handleReset
  };
};