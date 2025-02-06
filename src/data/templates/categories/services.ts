import { Template } from "@/types/chat";

export const serviceTemplates: Template[] = [
  {
    id: "customer-service",
    name: "Customer Service",
    description: "Handles customer inquiries and support.",
    systemPrompt: "You are a customer service assistant helping with inquiries and resolution.",
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
    id: "travel-agent",
    name: "Travel Agent",
    description: "Assists with travel planning and bookings.",
    systemPrompt: "You are a travel planning assistant helping with itineraries and bookings.",
    exampleMessages: []
  },
  {
    id: "event-planner",
    name: "Event Planner",
    description: "Helps organize and coordinate events.",
    systemPrompt: "You are an event planning assistant helping with event organization and coordination.",
    exampleMessages: []
  },
  {
    id: "wedding-planner",
    name: "Wedding Planner",
    description: "Assists with wedding planning and coordination.",
    systemPrompt: "You are a wedding planning assistant helping with wedding organization and details.",
    exampleMessages: []
  }
];