import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { APIKeysTab } from "./settings/APIKeysTab";
import { ProfileTab } from "./settings/ProfileTab";
import { CompanyTab } from "./settings/CompanyTab";
import { PreferencesTab } from "./settings/PreferencesTab";
import { toast } from "./ui/use-toast";
import { Json } from "@/integrations/supabase/types";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface CssStyles {
  primaryColor?: string;
  secondaryColor?: string;
  customCss?: string;
}

export const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
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

      // Ensure we have a name value, using a default if none exists
      const name = companyProfile?.name || 'My Company';

      const { error: profileError } = await supabase
        .from('company_profiles')
        .upsert({
          user_id: user.id,
          name: name, // Make sure we always have a name
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
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/90 backdrop-blur-md border-gray-100/20 max-w-2xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-semibold">Settings</DialogTitle>
          <DialogDescription className="text-muted-foreground/80">
            Configure your chatbot preferences and profile settings.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="api" className="w-full">
          <TabsList className="grid grid-cols-4 gap-4 mb-4">
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="api">
            <APIKeysTab />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>

          <TabsContent value="company">
            <CompanyTab />
          </TabsContent>

          <TabsContent value="preferences">
            <PreferencesTab />
          </TabsContent>
        </Tabs>

        <Button onClick={handleSaveSettings} className="w-full mt-4">
          Save Settings
        </Button>
      </DialogContent>
    </Dialog>
  );
};