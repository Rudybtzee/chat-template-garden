import { Template } from "@/types/chat";

export const technologyTemplates: Template[] = [
  {
    id: "tech-support",
    name: "Tech Support",
    description: "Provides technical support and troubleshooting assistance.",
    category: "technology",
    system_prompt: "You are a technical support assistant helping users resolve their technology issues.",
    example_messages: [
      {
        role: "user",
        content: "My computer is running slowly. What should I do?"
      },
      {
        role: "assistant",
        content: "Let's troubleshoot your computer's performance issues step by step..."
      }
    ],
    features: ["Technical Support", "Troubleshooting", "System Maintenance"],
    company_info: {
      industry: "Technology",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing Specialist",
    description: "Assists with digital marketing strategy and implementation.",
    category: "technology",
    system_prompt: "You are a digital marketing specialist helping with online marketing strategies.",
    example_messages: [],
    features: ["Marketing Strategy", "Social Media", "SEO Optimization"],
    company_info: {
      industry: "Digital Marketing",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];