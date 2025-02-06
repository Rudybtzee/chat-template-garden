import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  return (
    <div className={cn(
      "chat-message p-4 rounded-lg mb-4 max-w-[80%] animate-slideIn",
      isUser ? 
        "ml-auto bg-primary text-primary-foreground" : 
        "mr-auto bg-muted/50 backdrop-blur-sm"
    )}>
      <div className="flex items-start gap-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center text-xs",
          isUser ? "bg-primary-foreground/10" : "bg-primary/10"
        )}>
          {isUser ? "You" : "AI"}
        </div>
        <div className="flex-1">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  );
};