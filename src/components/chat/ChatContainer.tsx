import { Template, Message } from "@/types/chat";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ChatContainerProps {
  template: Template;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (content: string) => void;
  onReset: () => void;
}

export const ChatContainer = ({
  template,
  messages,
  isLoading,
  onSendMessage,
  onReset,
}: ChatContainerProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="transition-all hover:scale-105"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold">{template.name}</h2>
          <p className="text-sm text-muted-foreground">{template.description}</p>
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

      <ChatInput onSend={onSendMessage} disabled={isLoading} />
    </div>
  );
};