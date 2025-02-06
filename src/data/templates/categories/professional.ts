import { Template } from "@/types/chat";

export const professionalTemplates: Template[] = [
  {
    id: "legal-assistant",
    name: "Legal Assistant",
    description: "Provides basic legal information and document assistance.",
    category: "professional",
    system_prompt: "You are a legal assistant helping with general legal information and documentation.",
    example_messages: [
      {
        role: "user",
        content: "I need help understanding contract terms."
      },
      {
        role: "assistant",
        content: "I'll help explain the contract terms in simple language..."
      }
    ],
    features: ["Legal Information", "Document Review", "Process Guidance"],
    company_info: {
      industry: "Legal Services",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "hr-consultant",
    name: "HR Consultant",
    description: "Assists with human resources and workplace matters.",
    category: "professional",
    system_prompt: "You are an HR consultant helping with workplace policies and employee relations.",
    example_messages: [],
    features: ["Policy Development", "Employee Relations", "Workplace Culture"],
    company_info: {
      industry: "Human Resources",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];