import { useState } from "react";
import { Template } from "@/types/chat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TemplateList from "@/components/admin/TemplateList";
import TemplateDialog from "@/components/admin/TemplateDialog";
import { useTemplates } from "./hooks/useTemplates";

export const TemplateManager = () => {
  const { templates, isLoading, isSaving, saveTemplate, deleteTemplate } = useTemplates();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const handleEditTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setDialogOpen(true);
  };

  const handleSaveTemplate = async (templateData: Partial<Template>) => {
    const success = await saveTemplate(templateData);
    if (success) {
      setDialogOpen(false);
      setSelectedTemplate(null);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Templates</CardTitle>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Template
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : templates.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No templates found. Click the "New Template" button to create one.
          </div>
        ) : (
          <TemplateList
            templates={templates}
            onEdit={handleEditTemplate}
            onDelete={deleteTemplate}
          />
        )}
      </CardContent>

      <TemplateDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        template={selectedTemplate}
        onSave={handleSaveTemplate}
        isLoading={isSaving}
      />
    </Card>
  );
};