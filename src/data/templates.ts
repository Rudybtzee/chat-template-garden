import { Template } from "@/types/chat";

export const templates: Template[] = [
  {
    id: "real-estate",
    name: "Real Estate Agent",
    description: "Assists with property listings, viewings, and client inquiries.",
    systemPrompt: "You are a real estate assistant helping with property-related queries.",
    exampleMessages: []
  },
  {
    id: "legal",
    name: "Legal Assistant",
    description: "Helps with basic legal information and document preparation.",
    systemPrompt: "You are a legal assistant providing general legal information and guidance.",
    exampleMessages: []
  },
  {
    id: "healthcare",
    name: "Healthcare Provider",
    description: "Manages appointment scheduling and general medical inquiries.",
    systemPrompt: "You are a healthcare assistant helping with medical scheduling and basic information.",
    exampleMessages: []
  },
  {
    id: "financial",
    name: "Financial Advisor",
    description: "Provides financial planning and investment guidance.",
    systemPrompt: "You are a financial advisory assistant helping with financial planning queries.",
    exampleMessages: []
  },
  {
    id: "hr",
    name: "HR Manager",
    description: "Handles employee inquiries and HR-related questions.",
    systemPrompt: "You are an HR assistant helping with employment and workplace queries.",
    exampleMessages: []
  },
  {
    id: "insurance",
    name: "Insurance Agent",
    description: "Assists with insurance quotes and policy information.",
    systemPrompt: "You are an insurance assistant helping with policy and coverage questions.",
    exampleMessages: []
  },
  {
    id: "education",
    name: "Education Consultant",
    description: "Helps with academic planning and educational guidance.",
    systemPrompt: "You are an education consultant assisting with academic and career planning.",
    exampleMessages: []
  },
  {
    id: "marketing",
    name: "Marketing Strategist",
    description: "Provides marketing and advertising guidance.",
    systemPrompt: "You are a marketing assistant helping with marketing strategy and campaigns.",
    exampleMessages: []
  },
  {
    id: "consulting",
    name: "Business Consultant",
    description: "Offers business strategy and operational advice.",
    systemPrompt: "You are a business consultant helping with strategy and operations.",
    exampleMessages: []
  },
  {
    id: "property-management",
    name: "Property Manager",
    description: "Manages tenant relations and property maintenance.",
    systemPrompt: "You are a property management assistant helping with tenant and maintenance issues.",
    exampleMessages: []
  }
];