import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ChartBar, MessageSquare, Users } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState({
    totalConversations: 0,
    totalMessages: 0,
    templatesUsed: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Get total conversations
        const { data: conversations, error: convError } = await supabase
          .from('chat_conversations')
          .select('id')
          .eq('user_id', user.id);
        
        if (convError) throw convError;

        // Get total messages
        const { data: messages, error: msgError } = await supabase
          .from('chat_messages')
          .select('id, conversation_id')
          .in('conversation_id', conversations?.map(c => c.id) || []);

        if (msgError) throw msgError;

        // Get unique templates used
        const { data: templates, error: templError } = await supabase
          .from('chat_conversations')
          .select('template_id')
          .eq('user_id', user.id);

        if (templError) throw templError;

        const uniqueTemplates = new Set(templates?.map(t => t.template_id));

        setStats({
          totalConversations: conversations?.length || 0,
          totalMessages: messages?.length || 0,
          templatesUsed: uniqueTemplates.size,
        });

      } catch (error: any) {
        toast({
          title: "Error fetching stats",
          description: error.message,
          variant: "destructive",
        });
      }
    };

    fetchStats();
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Conversations
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalConversations}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Messages
            </CardTitle>
            <ChartBar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMessages}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Templates Used
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.templatesUsed}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;