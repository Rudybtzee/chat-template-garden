import { Template } from "@/types/chat";
import { TemplateCard } from "@/components/TemplateCard";

interface TemplateListProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export const TemplateList = ({ templates, onSelect }: TemplateListProps) => {
  if (templates.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No templates found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};