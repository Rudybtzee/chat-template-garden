import { Template } from "@/types/chat";

export const marketingTemplates: Template[] = [
  {
    id: "marketing",
    name: "Marketing Strategist",
    description: "Provides marketing and advertising guidance.",
    category: "marketing",
    system_prompt: "You are a marketing assistant helping with marketing strategy and campaigns.",
    example_messages: [],
    features: ["Marketing Strategy", "Campaign Planning", "Brand Development"],
    company_info: {}
  },
  {
    id: "personal-stylist",
    name: "Personal Stylist",
    description: "Provides fashion and styling advice.",
    category: "marketing",
    system_prompt: "You are a personal styling assistant helping with fashion recommendations.",
    example_messages: [],
    features: ["Style Consultation", "Fashion Advice", "Wardrobe Planning"],
    company_info: {}
  }
];