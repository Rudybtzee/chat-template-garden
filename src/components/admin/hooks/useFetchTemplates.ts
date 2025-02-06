import { useState, useEffect } from "react";
import { Template } from "@/types/chat";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Json } from "@/integrations/supabase/types";

export const useFetchTemplates = () => {
  const { toast } = useToast();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
          company_info: template.company_info as Template['company_info'],
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

  useEffect(() => {
    fetchTemplates();
  }, []);

  return { templates, isLoading, fetchTemplates };
};