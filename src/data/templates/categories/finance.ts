import { Template } from "@/types/chat";

export const financeTemplates: Template[] = [
  {
    id: "financial-advisor",
    name: "Financial Advisor",
    description: "Provides financial planning and investment guidance.",
    category: "finance",
    system_prompt: "You are a financial advisory assistant helping with financial planning queries.",
    example_messages: [
      {
        role: "user",
        content: "How should I start planning for retirement?"
      },
      {
        role: "assistant",
        content: "Let's start by understanding your current financial situation and goals..."
      }
    ],
    features: ["Financial Planning", "Investment Guidance", "Risk Assessment", "Retirement Planning"],
    company_info: {
      industry: "Financial Services",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "tax-advisor",
    name: "Tax Advisor",
    description: "Provides guidance on tax planning and compliance.",
    category: "finance",
    system_prompt: "You are a tax advisory assistant helping with tax-related queries and planning.",
    example_messages: [],
    features: ["Tax Planning", "Compliance", "Deduction Optimization"],
    company_info: {
      industry: "Tax Services",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];