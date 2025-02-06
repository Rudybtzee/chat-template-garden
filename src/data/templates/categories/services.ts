import { Template } from "@/types/chat";

export const serviceTemplates: Template[] = [
  {
    id: "customer-service",
    name: "Customer Service",
    description: "Handles customer inquiries and support.",
    category: "services",
    system_prompt: "You are a customer service assistant helping with inquiries and resolution.",
    example_messages: [],
    features: ["Customer Support", "Issue Resolution", "Service Inquiries"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "insurance",
    name: "Insurance Agent",
    description: "Assists with insurance quotes and policy information.",
    category: "services",
    system_prompt: "You are an insurance assistant helping with policy and coverage questions.",
    example_messages: [],
    features: ["Policy Information", "Coverage Quotes", "Claims Assistance"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "travel-agent",
    name: "Travel Agent",
    description: "Assists with travel planning and bookings.",
    category: "services",
    system_prompt: "You are a travel planning assistant helping with itineraries and bookings.",
    example_messages: [],
    features: ["Travel Planning", "Booking Assistance", "Itinerary Creation"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "event-planner",
    name: "Event Planner",
    description: "Helps organize and coordinate events.",
    category: "services",
    system_prompt: "You are an event planning assistant helping with event organization and coordination.",
    example_messages: [],
    features: ["Event Organization", "Vendor Coordination", "Timeline Planning"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "wedding-planner",
    name: "Wedding Planner",
    description: "Assists with wedding planning and coordination.",
    category: "services",
    system_prompt: "You are a wedding planning assistant helping with wedding organization and details.",
    example_messages: [],
    features: ["Wedding Planning", "Vendor Management", "Timeline Coordination"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];