import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Template, Message } from "@/types/chat";
import { DashboardStats } from "@/types/admin";
import TemplateList from "@/components/admin/TemplateList";
import TemplateDialog from "@/components/admin/TemplateDialog";
import StatsGrid from "@/components/admin/StatsGrid";

const Admin = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalConversations: 0,
    totalMessages: 0,
    totalTemplates: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const [
          { count: usersCount, error: usersError },
          { count: conversationsCount, error: convsError },
          { count: messagesCount, error: msgsError },
          { data: templatesData, error: templatesError }
        ] = await Promise.all([
          supabase.from('profiles').select('*', { count: 'exact', head: true }),
          supabase.from('chat_conversations').select('*', { count: 'exact', head: true }),
          supabase.from('chat_messages').select('*', { count: 'exact', head: true }),
          supabase.from('chat_templates').select('*').order('created_at', { ascending: false })
        ]);

        if (usersError) throw usersError;
        if (convsError) throw convsError;
        if (msgsError) throw msgsError;
        if (templatesError) throw templatesError;

        setStats({
          totalUsers: usersCount || 0,
          totalConversations: conversationsCount || 0,
          totalMessages: messagesCount || 0,
          totalTemplates: templatesData?.length || 0,
        });
        
        if (templatesData) {
          const formattedTemplates: Template[] = templatesData.map(template => ({
            id: template.id,
            name: template.name,
            description: template.description,
            category: template.category,
            system_prompt: template.system_prompt,
            example_messages: (template.example_messages as Message[]) || [],
            features: template.features || [],
            company_info: template.company_info || {},
            style: template.style || {},
            created_at: template.created_at,
            updated_at: template.updated_at
          }));
          setTemplates(formattedTemplates);
        }
      } catch (error: any) {
        toast({
          title: "Error fetching admin stats",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdminStats();
  }, [toast]);

  const handleSaveTemplate = async (templateData: Partial<Template>) => {
    try {
      setIsSaving(true);
      const formattedTemplate = {
        name: templateData.name,
        description: templateData.description,
        category: templateData.category,
        system_prompt: templateData.system_prompt,
        company_info: templateData.company_info || {},
        style: templateData.style || {},
        features: templateData.features || [],
        example_messages: templateData.example_messages || []
      };

      if (selectedTemplate) {
        const { error } = await supabase
          .from('chat_templates')
          .update(formattedTemplate)
          .eq('id', selectedTemplate.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Template updated successfully",
        });
      } else {
        const { error } = await supabase
          .from('chat_templates')
          .insert([formattedTemplate]);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Template created successfully",
        });
      }

      const { data } = await supabase
        .from('chat_templates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) {
        const formattedTemplates: Template[] = data.map(template => ({
          id: template.id,
          name: template.name,
          description: template.description,
          category: template.category,
          system_prompt: template.system_prompt,
          example_messages: (template.example_messages as Message[]) || [],
          features: template.features || [],
          company_info: template.company_info || {},
          style: template.style || {},
          created_at: template.created_at,
          updated_at: template.updated_at
        }));
        setTemplates(formattedTemplates);
      }

      setDialogOpen(false);
      setSelectedTemplate(null);
    } catch (error: any) {
      toast({
        title: "Error saving template",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
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
        description: "Template deleted successfully",
      });

      setTemplates(templates.filter(t => t.id !== templateId));
    } catch (error: any) {
      toast({
        title: "Error deleting template",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            {isLoading ? "Loading..." : "Last updated just now"}
          </div>
        </div>

        <StatsGrid stats={stats} isLoading={isLoading} />

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Template Management</CardTitle>
              <Button onClick={() => {
                setSelectedTemplate(null);
                setDialogOpen(true);
              }}>
                <Plus className="h-4 w-4 mr-2" />
                New Template
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <TemplateList 
              templates={templates}
              onEdit={(template) => {
                setSelectedTemplate(template);
                setDialogOpen(true);
              }}
              onDelete={handleDeleteTemplate}
            />
          </CardContent>
        </Card>

        <TemplateDialog 
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          template={selectedTemplate}
          onSave={handleSaveTemplate}
          isLoading={isSaving}
        />

        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Coming soon: Recent user registrations, conversations, and system events
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;