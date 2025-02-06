import { Template } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export const TemplateCard = ({ template, onSelect }: TemplateCardProps) => {
  const [imageUrl, setImageUrl] = useState<string>(template.logoUrl || "/placeholder.svg");

  const handleImageError = () => {
    setImageUrl("/placeholder.svg");
  };

  return (
    <Card className="template-card group hover:shadow-lg transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-cool opacity-5 group-hover:opacity-10 transition-opacity rounded-xl" />
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-softGray flex items-center justify-center">
            <img
              src={imageUrl}
              alt={`${template.name} logo`}
              className="w-8 h-8 object-contain"
              onError={handleImageError}
            />
          </div>
          <CardTitle className="text-lg font-medium">{template.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{template.description}</p>
        {template.features && (
          <div className="mt-4 flex flex-wrap gap-2">
            {template.features.map((feature, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-primary-purple/10 text-primary-purple"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onSelect(template)} 
          variant="outline" 
          className="w-full transition-all hover:bg-primary hover:text-primary-foreground group-hover:scale-105"
        >
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
};