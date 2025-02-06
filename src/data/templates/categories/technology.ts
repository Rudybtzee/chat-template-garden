import { Template } from "@/types/chat";

export const technologyTemplates: Template[] = [
  {
    id: "it-support",
    name: "IT Support",
    description: "Provides technical support and troubleshooting.",
    category: "technology",
    system_prompt: "You are an IT support assistant helping with technical issues and solutions.",
    example_messages: [],
    features: ["Technical Support", "Troubleshooting", "System Maintenance"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "social-media",
    name: "Social Media Manager",
    description: "Helps with social media strategy and content.",
    category: "technology",
    system_prompt: "You are a social media management assistant helping with content and strategy.",
    example_messages: [],
    features: ["Content Strategy", "Social Media Management", "Engagement Planning"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];