import { Template } from "@/types/chat";

export const marketingTemplates: Template[] = [
  {
    id: "marketing",
    name: "Marketing Strategist",
    description: "Provides marketing and advertising guidance.",
    systemPrompt: "You are a marketing assistant helping with marketing strategy and campaigns.",
    exampleMessages: []
  },
  {
    id: "personal-stylist",
    name: "Personal Stylist",
    description: "Provides fashion and styling advice.",
    systemPrompt: "You are a personal styling assistant helping with fashion recommendations.",
    exampleMessages: []
  }
];