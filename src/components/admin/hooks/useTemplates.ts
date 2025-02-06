import { Template } from "@/types/chat";
import { useFetchTemplates } from "./useFetchTemplates";
import { useSaveTemplate } from "./useSaveTemplate";
import { useDeleteTemplate } from "./useDeleteTemplate";

export const useTemplates = () => {
  const { templates, isLoading, fetchTemplates } = useFetchTemplates();
  const { saveTemplate, isSaving } = useSaveTemplate(fetchTemplates);
  const { deleteTemplate } = useDeleteTemplate(fetchTemplates);

  return {
    templates,
    isLoading,
    isSaving,
    fetchTemplates,
    saveTemplate,
    deleteTemplate
  };
};