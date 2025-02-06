import { Template } from "@/types/chat";

export const realEstateTemplates: Template[] = [
  {
    id: "real-estate",
    name: "Real Estate Agent",
    description: "Assists with property listings, viewings, and client inquiries.",
    systemPrompt: "You are a real estate assistant helping with property-related queries.",
    exampleMessages: []
  },
  {
    id: "property-management",
    name: "Property Manager",
    description: "Manages tenant relations and property maintenance.",
    systemPrompt: "You are a property management assistant helping with tenant and maintenance issues.",
    exampleMessages: []
  },
  {
    id: "interior-designer",
    name: "Interior Designer",
    description: "Provides interior design consultation and advice.",
    systemPrompt: "You are an interior design assistant helping with design concepts and recommendations.",
    exampleMessages: []
  }
];