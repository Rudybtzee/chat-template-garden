import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useDeleteTemplate = (onSuccess: () => void) => {
  const { toast } = useToast();

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

      onSuccess();
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

  return { deleteTemplate };
};