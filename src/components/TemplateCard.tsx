import { Template } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export const TemplateCard = ({ template, onSelect }: TemplateCardProps) => {
  return (
    <Card className="template-card group">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          {template.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{template.description}</p>
        {template.exampleMessages.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Example conversation:</p>
            {template.exampleMessages.map((message, index) => (
              <div
                key={index}
                className={`text-xs p-2 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary/10 ml-auto max-w-[80%]"
                    : "bg-muted/50 mr-auto max-w-[80%]"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onSelect(template)} 
          variant="outline" 
          className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Start Chat
        </Button>
      </CardFooter>
    </Card>
  );
};