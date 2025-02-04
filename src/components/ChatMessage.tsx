import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  return (
    <div className={cn(
      "chat-message flex items-start gap-3",
      isUser ? "user-message" : "bot-message"
    )}>
      <div className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>
      <div className="flex-1">
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};