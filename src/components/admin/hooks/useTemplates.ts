import { useState, useEffect } from "react";
import { Template, Message } from "@/types/chat";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const useTemplates = () => {
  const { toast } = useToast();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('chat_templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        const formattedTemplates: Template[] = data.map(template => ({
          id: template.id,
          name: template.name,
          description: template.description,
          category: template.category,
          system_prompt: template.system_prompt,
          example_messages: template.example_messages ? JSON.parse(JSON.stringify(template.example_messages)) as Message[] : [],
          company_info: template.company_info ? JSON.parse(JSON.stringify(template.company_info)) : {},
          style: template.style ? JSON.parse(JSON.stringify(template.style)) : {
            primaryColor: "#2563eb",
            gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
            darkMode: false
          },
          features: template.features || []
        }));
        setTemplates(formattedTemplates);
      }
    } catch (error: any) {
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

  const saveTemplate = async (templateData: Partial<Template>) => {
    try {
      setIsSaving(true);
      
      if (!templateData.name || !templateData.category || !templateData.description || !templateData.system_prompt) {
        throw new Error("Missing required fields");
      }

      const formattedTemplate = {
        name: templateData.name,
        category: templateData.category,
        description: templateData.description,
        system_prompt: templateData.system_prompt,
        company_info: JSON.stringify(templateData.company_info || {}),
        style: JSON.stringify(templateData.style || {
          primaryColor: "#2563eb",
          gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
          darkMode: false
        }),
        example_messages: JSON.stringify(templateData.example_messages || []),
        features: templateData.features || []
      };

      if (templateData.id) {
        const { error } = await supabase
          .from('chat_templates')
          .update(formattedTemplate)
          .eq('id', templateData.id);

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
      return true;
    } catch (error: any) {
      console.error('Error saving template:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save template",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const deleteTemplate = async (templateId: string) => {
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
      return true;
    } catch (error: any) {
      console.error('Error deleting template:', error);
      toast({
        title: "Error",
        description: "Failed to delete template",
        variant: "destructive"
      });
      return false;
    }
  };

  return {
    templates,
    isLoading,
    isSaving,
    fetchTemplates,
    saveTemplate,
    deleteTemplate
  };
};