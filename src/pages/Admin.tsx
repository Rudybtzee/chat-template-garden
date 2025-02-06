import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Template, Message, CompanyInfo } from "@/types/chat";
import { DashboardStats } from "@/types/admin";
import TemplateList from "@/components/admin/TemplateList";
import TemplateDialog from "@/components/admin/TemplateDialog";
import StatsGrid from "@/components/admin/StatsGrid";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalConversations: 0,
    totalMessages: 0,
    totalTemplates: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  useEffect(() => {
    fetchTemplates();
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: users } = await supabase.from('profiles').select('id', { count: 'exact' });
      const { data: conversations } = await supabase.from('chat_conversations').select('id', { count: 'exact' });
      const { data: messages } = await supabase.from('chat_messages').select('id', { count: 'exact' });
      const { data: templates } = await supabase.from('chat_templates').select('id', { count: 'exact' });

      setStats({
        totalUsers: users?.length || 0,
        totalConversations: conversations?.length || 0,
        totalMessages: messages?.length || 0,
        totalTemplates: templates?.length || 0
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard statistics",
        variant: "destructive"
      });
    }
  };

  const fetchTemplates = async () => {
    try {
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
          example_messages: template.example_messages ? (template.example_messages as unknown as Message[]) : [],
          features: template.features || [],
          company_info: template.company_info ? (template.company_info as unknown as CompanyInfo) : {},
          style: template.style ? (template.style as Template['style']) : {
            primaryColor: undefined,
            gradient: undefined,
            darkMode: false
          },
          created_at: template.created_at,
          updated_at: template.updated_at
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

      const template = {
        name: templateData.name,
        description: templateData.description,
        category: templateData.category,
        system_prompt: templateData.system_prompt,
        company_info: JSON.stringify(templateData.company_info || {}),
        style: JSON.stringify(templateData.style || {
          primaryColor: undefined,
          gradient: undefined,
          darkMode: false
        }),
        features: templateData.features || [],
        example_messages: JSON.stringify(templateData.example_messages || [])
      };

      if (selectedTemplate) {
        const { error } = await supabase
          .from('chat_templates')
          .update(template)
          .eq('id', selectedTemplate.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Template updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('chat_templates')
          .insert([template]);

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
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Template
        </Button>
      </div>

      <div className="grid gap-6">
        <StatsGrid stats={stats} isLoading={isLoading} />

        <Card>
          <CardHeader>
            <CardTitle>Templates</CardTitle>
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
        </Card>

        <TemplateDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          template={selectedTemplate}
          onSave={handleSaveTemplate}
          isLoading={isSaving}
        />
      </div>
    </div>
  );
};

export default Admin;