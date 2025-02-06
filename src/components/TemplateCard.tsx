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
    <Card className={`template-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="gradient-overlay" />
      
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="logo-container">
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
        <p className="template-description">{template.description}</p>
        
        {template.features && (
          <div className="template-features">
            {template.features.map((feature, index) => (
              <span
                key={index}
                className="template-feature-tag"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {template.company_info && (
          <div className="template-info-section">
            <TooltipProvider>
              {template.company_info.languages && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="template-info-row">
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
                    <div className="template-info-row">
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
                    <div className="template-info-row">
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
                    <div className="template-info-row">
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
          <div className="template-preview">
            <h4 className="font-medium mb-4">Common Questions</h4>
            <div className="space-y-4">
              {template.company_info.commonQuestions.map((q, index) => (
                <div key={index} className="space-y-2">
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
          className="template-action-button flex-1"
        >
          Use Template
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="template-action-button"
        >
          <MessageSquare className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};