import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Json } from "@/integrations/supabase/types";

interface CssStyles {
  primaryColor?: string;
  secondaryColor?: string;
  customCss?: string;
}

export const useSettingsSave = () => {
  const [isSaving, setIsSaving] = useState(false);

  const { data: companyProfile } = useQuery({
    queryKey: ['companyProfile'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from('company_profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  const handleSaveSettings = async () => {
    try {
      setIsSaving(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const cssStyles = {
        primaryColor: typeof companyProfile?.css_styles === 'object' && companyProfile?.css_styles !== null 
          ? (companyProfile.css_styles as Record<string, string>).primaryColor 
          : undefined,
        secondaryColor: typeof companyProfile?.css_styles === 'object' && companyProfile?.css_styles !== null 
          ? (companyProfile.css_styles as Record<string, string>).secondaryColor 
          : undefined,
        customCss: typeof companyProfile?.css_styles === 'object' && companyProfile?.css_styles !== null 
          ? (companyProfile.css_styles as Record<string, string>).customCss 
          : undefined
      } as Json;

      const name = companyProfile?.name || 'My Company';

      const { error: profileError } = await supabase
        .from('company_profiles')
        .upsert({
          user_id: user.id,
          name: name,
          industry: companyProfile?.industry,
          css_styles: cssStyles,
        });

      if (profileError) throw profileError;

      toast({
        title: "Success",
        description: "Settings saved successfully",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  return {
    handleSaveSettings,
    isSaving
  };
};