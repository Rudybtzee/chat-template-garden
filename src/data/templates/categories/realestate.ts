import { Template } from "@/types/chat";

export const realEstateTemplates: Template[] = [
  {
    id: "real-estate",
    name: "Real Estate Agent",
    description: "Assists with property listings, viewings, and client inquiries.",
    category: "realEstate",
    system_prompt: "You are a real estate assistant helping with property-related queries.",
    example_messages: [],
    features: ["Property Listings", "Viewings", "Client Inquiries"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "property-management",
    name: "Property Manager",
    description: "Manages tenant relations and property maintenance.",
    category: "realEstate",
    system_prompt: "You are a property management assistant helping with tenant and maintenance issues.",
    example_messages: [],
    features: ["Tenant Relations", "Property Maintenance", "Issue Resolution"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "interior-designer",
    name: "Interior Designer",
    description: "Provides interior design consultation and advice.",
    category: "realEstate",
    system_prompt: "You are an interior design assistant helping with design concepts and recommendations.",
    example_messages: [],
    features: ["Design Consultation", "Space Planning", "Style Recommendations"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];