import { Template } from "@/types/chat";

export const professionalTemplates: Template[] = [
  {
    id: "legal",
    name: "Legal Assistant",
    description: "Helps with basic legal information and document preparation.",
    category: "professional",
    system_prompt: "You are a legal assistant providing general legal information and guidance.",
    example_messages: [],
    features: ["Legal Information", "Document Preparation", "General Guidance"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "hr",
    name: "HR Manager",
    description: "Handles employee inquiries and HR-related questions.",
    category: "professional",
    system_prompt: "You are an HR assistant helping with employment and workplace queries.",
    example_messages: [],
    features: ["Employee Relations", "HR Policy", "Workplace Guidance"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "recruitment",
    name: "Recruitment Specialist",
    description: "Assists with hiring and talent acquisition.",
    category: "professional",
    system_prompt: "You are a recruitment assistant helping with hiring processes and candidate screening.",
    example_messages: [],
    features: ["Hiring Process", "Candidate Screening", "Talent Acquisition"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];