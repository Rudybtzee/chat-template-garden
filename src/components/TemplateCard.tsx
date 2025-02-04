import { Template } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export const TemplateCard = ({ template, onSelect }: TemplateCardProps) => {
  return (
    <Card className="template-card">
      <CardHeader>
        <CardTitle className="text-lg font-medium">{template.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{template.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onSelect(template)} 
          variant="outline" 
          className="w-full transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
};