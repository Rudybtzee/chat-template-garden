import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  return (
    <div className={cn(
      "chat-message",
      isUser ? "user-message" : "bot-message"
    )}>
      <p className="text-sm">{message.content}</p>
    </div>
  );
};