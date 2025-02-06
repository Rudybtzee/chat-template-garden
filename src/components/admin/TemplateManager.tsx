import { useState } from "react";
import { Template, Message } from "@/types/chat";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TemplateList from "@/components/admin/TemplateList";
import TemplateDialog from "@/components/admin/TemplateDialog";

export const TemplateManager = () => {
  const { toast } = useToast();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const fetchTemplates = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        const formattedTemplates: Template[] = data.map(template => ({
          ...template,
          example_messages: template.example_messages ? (template.example_messages as Message[]) : [],
          company_info: template.company_info ? JSON.parse(JSON.stringify(template.company_info)) : {},
          style: template.style ? JSON.parse(JSON.stringify(template.style)) : {
            primaryColor: "#2563eb",
            gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
            darkMode: false
          }
        }));
        setTemplates(formattedTemplates);
      }
    } catch (error) {
      console.error('Error fetching templates:', error);
      toast({
        title: "Error",
        description: "Failed to load templates",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveTemplate = async (templateData: Partial<Template>) => {
    try {
      setIsSaving(true);
      const formattedTemplate = {
        ...templateData,
        company_info: JSON.stringify(templateData.company_info || {}),
        style: JSON.stringify(templateData.style || {
          primaryColor: "#2563eb",
          gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
          darkMode: false
        }),
        example_messages: JSON.stringify(templateData.example_messages || [])
      };

      if (selectedTemplate) {
        const { error } = await supabase
          .from('chat_templates')
          .update(formattedTemplate)
          .eq('id', selectedTemplate.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Template updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('chat_templates')
          .insert([formattedTemplate]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Template created successfully"
        });
      }

      await fetchTemplates();
      setDialogOpen(false);
      setSelectedTemplate(null);
    } catch (error) {
      console.error('Error saving template:', error);
      toast({
        title: "Error",
        description: "Failed to save template",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setDialogOpen(true);
  };

  const handleDeleteTemplate = async (templateId: string) => {
    try {
      const { error } = await supabase
        .from('chat_templates')
        .delete()
        .eq('id', templateId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Template deleted successfully"
      });

      await fetchTemplates();
    } catch (error) {
      console.error('Error deleting template:', error);
      toast({
        title: "Error",
        description: "Failed to delete template",
        variant: "destructive"
      });
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
          <div className="text-center py-4">Loading templates...</div>
        ) : (
          <TemplateList
            templates={templates}
            onEdit={handleEditTemplate}
            onDelete={handleDeleteTemplate}
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