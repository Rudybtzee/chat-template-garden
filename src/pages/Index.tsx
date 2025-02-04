import { useState } from "react";
import { Template, Message } from "@/types/chat";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { processMessage } from "@/services/ai";
import { useToast } from "@/components/ui/use-toast";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setMessages([]);
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedTemplate) return;

    const userMessage: Message = { role: "user", content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await processMessage(
        content,
        selectedTemplate.systemPrompt,
        messages,
        process.env.GEMINI_API_KEY || ''
      );

      const botMessage: Message = {
        role: "assistant",
        content: response
      };
      
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

  return (
    <>
      <Navigation />
      <div className="chat-container pt-20 pb-16">
        {!selectedTemplate ? (
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Choose a Template</h1>
            <p className="text-muted-foreground">Select a chat template to get started</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onSelect={handleTemplateSelect}
                />
              ))}
            </div>
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
      <Footer />
    </>
  );
};

export default Index;
