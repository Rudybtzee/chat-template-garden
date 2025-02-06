import { Template } from "@/types/chat";

export const businessTemplates: Template[] = [
  {
    id: "consulting",
    name: "Business Consultant",
    description: "Offers business strategy and operational advice.",
    systemPrompt: "You are a business consultant helping with strategy and operations.",
    exampleMessages: []
  },
  {
    id: "startup-advisor",
    name: "Startup Advisor",
    description: "Assists with startup planning and growth.",
    systemPrompt: "You are a startup advisory assistant helping with business development and strategy.",
    exampleMessages: []
  },
  {
    id: "project-manager",
    name: "Project Manager",
    description: "Assists with project planning and tracking.",
    systemPrompt: "You are a project management assistant helping with project coordination.",
    exampleMessages: []
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    description: "Provides business analysis and insights.",
    systemPrompt: "You are a business analysis assistant helping with data interpretation and strategy.",
    exampleMessages: []
  }
];