import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Users, MessageSquare, FileText, Activity } from "lucide-react";

interface DashboardStats {
  totalUsers: number;
  totalConversations: number;
  totalMessages: number;
  totalTemplates: number;
}

const Admin = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalConversations: 0,
    totalMessages: 0,
    totalTemplates: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        // Get total users
        const { count: usersCount, error: usersError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        if (usersError) throw usersError;

        // Get total conversations
        const { count: conversationsCount, error: convsError } = await supabase
          .from('chat_conversations')
          .select('*', { count: 'exact', head: true });

        if (convsError) throw convsError;

        // Get total messages
        const { count: messagesCount, error: msgsError } = await supabase
          .from('chat_messages')
          .select('*', { count: 'exact', head: true });

        if (msgsError) throw msgsError;

        // Get total templates
        const { count: templatesCount, error: templatesError } = await supabase
          .from('chat_templates')
          .select('*', { count: 'exact', head: true });

        if (templatesError) throw templatesError;

        setStats({
          totalUsers: usersCount || 0,
          totalConversations: conversationsCount || 0,
          totalMessages: messagesCount || 0,
          totalTemplates: templatesCount || 0,
        });
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            {isLoading ? "Loading..." : "Last updated just now"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Registered users in the platform
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalConversations}</div>
              <p className="text-xs text-muted-foreground">
                Active chat conversations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMessages}</div>
              <p className="text-xs text-muted-foreground">
                Messages exchanged
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Templates</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTemplates}</div>
              <p className="text-xs text-muted-foreground">
                Available chat templates
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Section */}
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