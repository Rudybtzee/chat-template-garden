import { useState, useEffect } from "react";
import { Template, Message, CompanyInfo } from "@/types/chat";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Json } from "@/integrations/supabase/types";

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

      if (error) {
        console.error('Error fetching templates:', error);
        toast({
          title: "Error",
          description: "Failed to load templates. Please try again.",
          variant: "destructive"
        });
        return;
      }

      if (data) {
        const formattedTemplates: Template[] = data.map(template => ({
          id: template.id,
          name: template.name,
          description: template.description,
          category: template.category,
          system_prompt: template.system_prompt,
          example_messages: (template.example_messages as any[] || []).map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          company_info: template.company_info as CompanyInfo || {},
          style: template.style as Template['style'] || {
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
        company_info: templateData.company_info as Json,
        style: templateData.style as Json,
        example_messages: templateData.example_messages?.map(msg => ({
          role: msg.role,
          content: msg.content
        })) as Json,
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