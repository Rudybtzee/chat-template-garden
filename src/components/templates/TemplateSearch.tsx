import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { templateCategories, TemplateCategory } from "@/data/templates";

interface TemplateSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: TemplateCategory | "all";
  onCategoryChange: (value: TemplateCategory | "all") => void;
}

export const TemplateSearch = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: TemplateSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      <Select
        value={selectedCategory}
        onValueChange={(value: TemplateCategory | "all") => onCategoryChange(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {Object.keys(templateCategories).map((category) => (
            <SelectItem key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};