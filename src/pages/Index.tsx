import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Template } from "@/types/chat";
import { TemplateHeader } from "@/components/templates/TemplateHeader";
import { TemplateList } from "@/components/templates/TemplateList";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { useTemplateSelection } from "@/hooks/useTemplateSelection";
import { useTemplateFiltering } from "@/hooks/useTemplateFiltering";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const { data: templates = [], isLoading: isLoadingTemplates } = useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('chat_templates')
        .select('*');
      
      if (error) {
        console.error('Error fetching templates:', error);
        toast({
          title: "Error",
          description: "Failed to load templates. Please try again.",
          variant: "destructive"
        });
        return [];
      }

      return data.map(template => ({
        ...template,
        example_messages: Array.isArray(template.example_messages) 
          ? template.example_messages.map(msg => ({
              role: msg.role as "user" | "assistant",
              content: msg.content
            }))
          : [],
        company_info: template.company_info || {},
        features: template.features || []
      })) as Template[];
    }
  });

  const {
    selectedTemplate,
    messages,
    isLoading,
    handleTemplateSelect,
    handleSendMessage,
    handleReset
  } = useTemplateSelection();

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredTemplates
  } = useTemplateFiltering(templates);

  if (isLoadingTemplates) {
    return (
      <div className="min-h-screen pt-20 pb-20 flex items-center justify-center">
        <div className="loading-dots">
          <span style={{ "--dot-index": 0 } as any} />
          <span style={{ "--dot-index": 1 } as any} />
          <span style={{ "--dot-index": 2 } as any} />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="chat-container">
        {!selectedTemplate ? (
          <div className="space-y-8">
            <TemplateHeader
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <TemplateList
              templates={filteredTemplates}
              onSelect={handleTemplateSelect}
            />
          </div>
        ) : (
          <ChatContainer
            template={selectedTemplate}
            messages={messages}
            isLoading={isLoading}
            onSendMessage={handleSendMessage}
            onReset={handleReset}
          />
        )}
      </div>
    </main>
  );
};

export default Index;