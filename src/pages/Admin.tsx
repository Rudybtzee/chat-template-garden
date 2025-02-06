import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Users, MessageSquare, FileText, Activity, Plus, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Template } from "@/types/chat";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { templateCategories } from "@/data/templates";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

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
  const [isCreating, setIsCreating] = useState(false);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [newTemplate, setNewTemplate] = useState<Partial<Template>>({
    name: "",
    description: "",
    category: "",
    system_prompt: "",
  });

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
        
        // Fetch templates
        const { data: templatesData, error: templatesError } = await supabase
          .from('chat_templates')
          .select('*')
          .order('created_at', { ascending: false });

        if (templatesError) throw templatesError;
        setTemplates(templatesData);

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

  const handleCreateTemplate = async () => {
    try {
      setIsCreating(true);
      const { error } = await supabase
        .from('chat_templates')
        .insert([
          {
            name: newTemplate.name,
            description: newTemplate.description,
            category: newTemplate.category,
            system_prompt: newTemplate.system_prompt,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Template created successfully",
      });

      // Refresh templates
      const { data } = await supabase
        .from('chat_templates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setTemplates(data);

      // Reset form
      setNewTemplate({
        name: "",
        description: "",
        category: "",
        system_prompt: "",
      });
    } catch (error: any) {
      toast({
        title: "Error creating template",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const handleUpdateTemplate = async () => {
    if (!selectedTemplate?.id) return;
    
    try {
      const { error } = await supabase
        .from('chat_templates')
        .update({
          name: selectedTemplate.name,
          description: selectedTemplate.description,
          category: selectedTemplate.category,
          system_prompt: selectedTemplate.system_prompt,
        })
        .eq('id', selectedTemplate.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Template updated successfully",
      });

      // Refresh templates
      const { data } = await supabase
        .from('chat_templates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setTemplates(data);
      setSelectedTemplate(null);
    } catch (error: any) {
      toast({
        title: "Error updating template",
        description: error.message,
        variant: "destructive",
      });
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

      // Update local state
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
        {/* Stats Section */}
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

        {/* Template Management Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Template Management</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Template
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create New Template</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newTemplate.name}
                        onChange={(e) => setNewTemplate(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Template name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={newTemplate.category}
                        onValueChange={(value) => setNewTemplate(prev => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(templateCategories).map((category) => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newTemplate.description}
                        onChange={(e) => setNewTemplate(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Template description"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="system_prompt">System Prompt</Label>
                      <Textarea
                        id="system_prompt"
                        value={newTemplate.system_prompt}
                        onChange={(e) => setNewTemplate(prev => ({ ...prev, system_prompt: e.target.value }))}
                        placeholder="System prompt for the AI"
                      />
                    </div>
                  </div>
                  <Button 
                    onClick={handleCreateTemplate} 
                    disabled={isCreating}
                    className="w-full"
                  >
                    {isCreating ? "Creating..." : "Create Template"}
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {templates.map((template) => (
                <Card key={template.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.category}</p>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => setSelectedTemplate(template)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Template</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="edit-name">Name</Label>
                              <Input
                                id="edit-name"
                                value={selectedTemplate?.name}
                                onChange={(e) => setSelectedTemplate(prev => prev ? ({ ...prev, name: e.target.value }) : null)}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-category">Category</Label>
                              <Select
                                value={selectedTemplate?.category}
                                onValueChange={(value) => setSelectedTemplate(prev => prev ? ({ ...prev, category: value }) : null)}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {Object.keys(templateCategories).map((category) => (
                                    <SelectItem key={category} value={category}>
                                      {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-description">Description</Label>
                              <Textarea
                                id="edit-description"
                                value={selectedTemplate?.description}
                                onChange={(e) => setSelectedTemplate(prev => prev ? ({ ...prev, description: e.target.value }) : null)}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-system-prompt">System Prompt</Label>
                              <Textarea
                                id="edit-system-prompt"
                                value={selectedTemplate?.system_prompt}
                                onChange={(e) => setSelectedTemplate(prev => prev ? ({ ...prev, system_prompt: e.target.value }) : null)}
                              />
                            </div>
                          </div>
                          <Button onClick={handleUpdateTemplate} className="w-full">
                            Update Template
                          </Button>
                        </DialogContent>
                      </Dialog>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Template</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this template? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteTemplate(template.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

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
