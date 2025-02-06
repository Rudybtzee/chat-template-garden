import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { DashboardStats } from "@/types/admin";
import { TemplateManager } from "@/components/admin/TemplateManager";
import StatsGrid from "@/components/admin/StatsGrid";
import { useToast } from "@/hooks/use-toast";
import { SettingsDialog } from "@/components/SettingsDialog";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalConversations: 0,
    totalMessages: 0,
    totalTemplates: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setSettingsOpen(true)}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid gap-6">
        <StatsGrid stats={stats} isLoading={isLoading} />
        <TemplateManager />
      </div>

      <SettingsDialog 
        open={settingsOpen} 
        onOpenChange={setSettingsOpen} 
      />
    </div>
  );
};

export default Admin;