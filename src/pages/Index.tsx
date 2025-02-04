import { useState } from "react";
import { Template, Message } from "@/types/chat";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setMessages([
      {
        role: "assistant",
        content: `Welcome to ${template.name}! How can I assist you today?`
      }
    ]);
  };

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = { role: "user", content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        role: "assistant",
        content: "This is a simulated response. In a real implementation, this would be connected to an AI API."
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setMessages([]);
  };

  if (!selectedTemplate) {
    return (
      <div className="chat-container">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Property Management Assistant</h1>
          <p className="text-muted-foreground">Select a chat template to get started with your inquiry</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={handleTemplateSelect}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container flex flex-col">
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
  );
};

export default Index;