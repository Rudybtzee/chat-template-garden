import { TemplateCategory } from "@/data/templates";
import { TemplateSearch } from "./TemplateSearch";

interface TemplateHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: TemplateCategory | "all";
  onCategoryChange: (category: TemplateCategory | "all") => void;
}

export const TemplateHeader = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: TemplateHeaderProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Choose a Template</h1>
        <p className="text-muted-foreground">Select a chat template to get started</p>
      </div>

      <TemplateSearch
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
};