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
    <Card className={`template-card group transition-all duration-300 ${
      isExpanded ? 'col-span-2 row-span-2' : ''
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-50 group-hover:opacity-70 transition-opacity rounded-xl" />
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/5 flex items-center justify-center">
            <img
              src={imageUrl}
              alt={`${template.name} logo`}
              className="w-8 h-8 object-contain"
              onError={handleImageError}
            />
          </div>
          <div>
            <CardTitle className="text-lg font-medium">{template.name}</CardTitle>
            {industry && (
              <p className="text-sm text-muted-foreground">{industry}</p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{template.description}</p>
        
        {template.features && (
          <div className="flex flex-wrap gap-2">
            {template.features.map((feature, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {template.company_info && (
          <div className="space-y-2 pt-2 border-t">
            <TooltipProvider>
              {template.company_info.languages && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
          <div className="mt-4 space-y-2">
            <h4 className="font-medium">Common Questions</h4>
            <div className="space-y-2">
              {template.company_info.commonQuestions.map((q, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium">{q.question}</p>
                  <p className="text-muted-foreground">{q.answer}</p>
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
          className="flex-1 transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Use Template
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="transition-all hover:bg-primary/10"
        >
          <MessageSquare className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};