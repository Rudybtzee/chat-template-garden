import { Template } from "@/types/chat";

export const financeTemplates: Template[] = [
  {
    id: "financial",
    name: "Financial Advisor",
    description: "Provides financial planning and investment guidance.",
    category: "finance",
    system_prompt: "You are a financial advisory assistant helping with financial planning queries.",
    example_messages: [],
    features: ["Financial Planning", "Investment Guidance", "Risk Assessment"],
    company_info: {}
  },
  {
    id: "tax-advisor",
    name: "Tax Advisor",
    description: "Provides guidance on tax planning and compliance.",
    category: "finance",
    system_prompt: "You are a tax advisory assistant helping with tax-related queries and planning.",
    example_messages: [],
    features: ["Tax Planning", "Compliance", "Deduction Optimization"],
    company_info: {}
  },
  {
    id: "mortgage-advisor",
    name: "Mortgage Advisor",
    description: "Provides mortgage and lending guidance.",
    category: "finance",
    system_prompt: "You are a mortgage advisory assistant helping with lending and mortgage queries.",
    example_messages: [],
    features: ["Mortgage Planning", "Rate Analysis", "Loan Guidance"],
    company_info: {}
  }
];