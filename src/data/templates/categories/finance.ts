import { Template } from "@/types/chat";

export const financeTemplates: Template[] = [
  {
    id: "financial",
    name: "Financial Advisor",
    description: "Provides financial planning and investment guidance.",
    systemPrompt: "You are a financial advisory assistant helping with financial planning queries.",
    exampleMessages: []
  },
  {
    id: "tax-advisor",
    name: "Tax Advisor",
    description: "Provides guidance on tax planning and compliance.",
    systemPrompt: "You are a tax advisory assistant helping with tax-related queries and planning.",
    exampleMessages: []
  },
  {
    id: "mortgage-advisor",
    name: "Mortgage Advisor",
    description: "Provides mortgage and lending guidance.",
    systemPrompt: "You are a mortgage advisory assistant helping with lending and mortgage queries.",
    exampleMessages: []
  }
];