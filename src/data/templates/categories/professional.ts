import { Template } from "@/types/chat";

export const professionalTemplates: Template[] = [
  {
    id: "legal",
    name: "Legal Assistant",
    description: "Helps with basic legal information and document preparation.",
    systemPrompt: "You are a legal assistant providing general legal information and guidance.",
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
    id: "recruitment",
    name: "Recruitment Specialist",
    description: "Assists with hiring and talent acquisition.",
    systemPrompt: "You are a recruitment assistant helping with hiring processes and candidate screening.",
    exampleMessages: []
  }
];