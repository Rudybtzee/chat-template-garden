import { Template } from "@/types/chat";

export const marketingTemplates: Template[] = [
  {
    id: "marketing-strategist",
    name: "Marketing Strategist",
    description: "Develops comprehensive marketing strategies and campaigns.",
    category: "marketing",
    system_prompt: "You are a marketing strategist helping businesses develop effective marketing plans.",
    example_messages: [
      {
        role: "user",
        content: "How can we improve our social media presence?"
      },
      {
        role: "assistant",
        content: "Let's analyze your current social media strategy and identify areas for improvement..."
      }
    ],
    features: ["Strategy Development", "Campaign Planning", "Market Research"],
    company_info: {
      industry: "Marketing",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "content-strategist",
    name: "Content Strategist",
    description: "Plans and develops content marketing strategies.",
    category: "marketing",
    system_prompt: "You are a content strategist helping create engaging and effective content plans.",
    example_messages: [],
    features: ["Content Planning", "SEO Strategy", "Content Calendar"],
    company_info: {
      industry: "Content Marketing",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];