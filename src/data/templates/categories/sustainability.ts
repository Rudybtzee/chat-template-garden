import { Template } from "@/types/chat";

export const sustainabilityTemplates: Template[] = [
  {
    id: "sustainability-consultant",
    name: "Sustainability Consultant",
    description: "Provides guidance on environmental practices and sustainability initiatives.",
    category: "sustainability",
    system_prompt: "You are a sustainability consultant helping organizations implement eco-friendly practices.",
    example_messages: [
      {
        role: "user",
        content: "How can we make our business more environmentally friendly?"
      },
      {
        role: "assistant",
        content: "Let's assess your current practices and identify areas for sustainable improvements..."
      }
    ],
    features: ["Environmental Assessment", "Sustainability Planning", "Green Initiatives"],
    company_info: {
      industry: "Environmental Consulting",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "energy-consultant",
    name: "Energy Efficiency Consultant",
    description: "Advises on energy efficiency and conservation.",
    category: "sustainability",
    system_prompt: "You are an energy efficiency consultant helping reduce energy consumption and costs.",
    example_messages: [],
    features: ["Energy Audits", "Efficiency Planning", "Cost Reduction"],
    company_info: {
      industry: "Energy Consulting",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];