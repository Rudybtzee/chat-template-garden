import { useState } from "react";
import { Template } from "@/types/chat";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Json } from "@/integrations/supabase/types";

export const useSaveTemplate = (onSuccess: () => void) => {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

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

      onSuccess();
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

  return { saveTemplate, isSaving };
};