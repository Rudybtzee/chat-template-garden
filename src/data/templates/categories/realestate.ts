import { Template } from "@/types/chat";

export const realEstateTemplates: Template[] = [
  {
    id: "real-estate-agent",
    name: "Real Estate Agent",
    description: "Assists with property listings and real estate inquiries.",
    category: "realEstate",
    system_prompt: "You are a real estate agent helping clients find their perfect property.",
    example_messages: [
      {
        role: "user",
        content: "I'm looking for a 3-bedroom house in the suburbs."
      },
      {
        role: "assistant",
        content: "I'll help you find the perfect home. Let's start by discussing your preferences..."
      }
    ],
    features: ["Property Search", "Market Analysis", "Viewing Scheduling"],
    company_info: {
      industry: "Real Estate",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "property-manager",
    name: "Property Manager",
    description: "Handles property management and tenant relations.",
    category: "realEstate",
    system_prompt: "You are a property manager helping with property maintenance and tenant inquiries.",
    example_messages: [],
    features: ["Maintenance Requests", "Tenant Relations", "Property Inspections"],
    company_info: {
      industry: "Property Management",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];