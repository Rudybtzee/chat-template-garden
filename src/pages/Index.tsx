import { useState } from "react";
import { Template, Message } from "@/types/chat";
import { templateCategories, TemplateCategory } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react";
import { processMessage } from "@/services/ai";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | "all">("all");
  const { toast } = useToast();

  const { data: templates = [], isLoading: isLoadingTemplates } = useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('chat_templates')
        .select('*');
      
      if (error) {
        console.error('Error fetching templates:', error);
        toast({
          title: "Error",
          description: "Failed to load templates. Please try again.",
          variant: "destructive"
        });
        return [];
      }

      return data.map(template => ({
        ...template,
        example_messages: Array.isArray(template.example_messages) 
          ? (template.example_messages as Array<{ role: string; content: string }>).map(msg => ({
              role: msg.role as "user" | "assistant",
              content: msg.content
            }))
          : [],
        company_info: template.company_info || {},
        features: template.features || []
      })) as Template[];
    }
  });

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.features?.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || template.category?.toLowerCase() === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
        setMessages(template.example_messages);
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

  if (isLoadingTemplates) {
    return (
      <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
        <div className="loading-dots">
          <span style={{ "--dot-index": 0 } as any} />
          <span style={{ "--dot-index": 1 } as any} />
          <span style={{ "--dot-index": 2 } as any} />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="chat-container">
        {!selectedTemplate ? (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Choose a Template</h1>
              <p className="text-muted-foreground">Select a chat template to get started</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={(value: TemplateCategory | "all") => setSelectedCategory(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {Object.keys(templateCategories).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onSelect={handleTemplateSelect}
                />
              ))}
            </div>

            {filteredTemplates.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No templates found matching your criteria.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleReset}
                className="transition-all hover:scale-105"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h2 className="text-xl font-semibold">{selectedTemplate.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedTemplate.description}</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 rounded-lg glass-panel">
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isLoading && (
                <div className="loading-dots bot-message">
                  <span style={{ "--dot-index": 0 } as any} />
                  <span style={{ "--dot-index": 1 } as any} />
                  <span style={{ "--dot-index": 2 } as any} />
                </div>
              )}
            </div>

            <ChatInput onSend={handleSendMessage} disabled={isLoading} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Index;
