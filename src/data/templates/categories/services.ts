import { Template } from "@/types/chat";

export const serviceTemplates: Template[] = [
  {
    id: "customer-service",
    name: "Customer Service Representative",
    description: "Handles customer inquiries and support requests.",
    category: "services",
    system_prompt: "You are a customer service representative helping resolve customer inquiries and issues.",
    example_messages: [
      {
        role: "user",
        content: "I need help with my recent order."
      },
      {
        role: "assistant",
        content: "I'll be happy to help you with your order. Could you please provide your order number?"
      }
    ],
    features: ["Issue Resolution", "Order Support", "Product Information"],
    company_info: {
      industry: "Customer Service",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "event-planner",
    name: "Event Planner",
    description: "Assists with event planning and coordination.",
    category: "services",
    system_prompt: "You are an event planner helping organize successful events.",
    example_messages: [],
    features: ["Event Planning", "Vendor Coordination", "Timeline Management"],
    company_info: {
      industry: "Event Planning",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];