import { Template } from "@/types/chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { 
  Clock, 
  Globe, 
  MessageSquare, 
  Building, 
  Target, 
  Users, 
  Briefcase,
  Languages,
  MapPin
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export const TemplateCard = ({ template, onSelect }: TemplateCardProps) => {
  const [imageUrl, setImageUrl] = useState<string>(template.logoUrl || "/placeholder.svg");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageError = () => {
    setImageUrl("/placeholder.svg");
  };

  const industry = template.company_info?.industry || template.industry;

  return (
    <Card className={`
      relative overflow-hidden
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:-translate-y-1
      bg-gradient-to-br from-background/60 to-background/30
      backdrop-blur-lg border-muted/20
      ${isExpanded ? 'expanded scale-[1.02]' : ''}
    `}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 pointer-events-none" />
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="logo-container p-2 bg-background/50 rounded-lg backdrop-blur-sm">
            <img
              src={imageUrl}
              alt={`${template.name} logo`}
              className="w-8 h-8 object-contain transition-transform hover:scale-110"
              onError={handleImageError}
            />
          </div>
          <div>
            <CardTitle className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              {template.name}
            </CardTitle>
            {industry && (
              <p className="text-sm text-muted-foreground">{industry}</p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {template.description}
        </p>
        
        {template.features && (
          <div className="flex flex-wrap gap-2">
            {template.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                bg-primary/10 text-primary border border-primary/20
                transition-colors hover:bg-primary/20"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {template.company_info && (
          <div className="space-y-2 mt-4">
            <TooltipProvider>
              {template.company_info.languages && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Languages className="w-4 h-4" />
                      <span>{template.company_info.languages.join(", ")}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Supported Languages</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {template.company_info.businessHours && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Clock className="w-4 h-4" />
                      <span>{template.company_info.businessHours}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Business Hours</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {template.company_info.location && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <MapPin className="w-4 h-4" />
                      <span>{template.company_info.location.country}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Location & Timezone: {template.company_info.location.timezone}</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {template.company_info.targetAudience && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Target className="w-4 h-4" />
                      <span>{template.company_info.targetAudience}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Target Audience</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </TooltipProvider>
          </div>
        )}

        {isExpanded && template.company_info?.commonQuestions && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <h4 className="font-medium text-sm">Common Questions</h4>
            <div className="space-y-3">
              {template.company_info.commonQuestions.map((q, index) => (
                <div key={index} className="space-y-1 p-3 rounded-lg bg-muted/50 backdrop-blur-sm">
                  <p className="font-medium text-sm">{q.question}</p>
                  <p className="text-sm text-muted-foreground">{q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button 
          onClick={() => onSelect(template)} 
          variant="default" 
          className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
        >
          Use Template
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="transition-transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};