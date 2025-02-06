import { Template } from "@/types/chat";

export const healthcareTemplates: Template[] = [
  {
    id: "medical-assistant",
    name: "Medical Assistant",
    description: "Helps with appointment scheduling and general medical inquiries.",
    category: "healthcare",
    system_prompt: "You are a healthcare assistant helping with medical scheduling and basic information.",
    example_messages: [
      {
        role: "user",
        content: "I need to schedule a check-up appointment."
      },
      {
        role: "assistant",
        content: "I'll help you schedule your check-up. What days work best for you?"
      }
    ],
    features: ["Appointment Scheduling", "Medical Information", "Patient Support"],
    company_info: {
      industry: "Healthcare",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "wellness-coach",
    name: "Wellness Coach",
    description: "Provides guidance on health and wellness goals.",
    category: "healthcare",
    system_prompt: "You are a wellness coach helping people achieve their health and wellness goals.",
    example_messages: [],
    features: ["Wellness Planning", "Lifestyle Guidance", "Health Goals"],
    company_info: {
      industry: "Health & Wellness",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];