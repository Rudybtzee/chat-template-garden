import { Template } from "@/types/chat";

export const templates: Template[] = [
  {
    id: "landlord",
    name: "Landlord Assistant",
    description: "Specialized support for property owners and landlords",
    systemPrompt: "You are a helpful assistant for landlords, providing guidance on property management, maintenance, and tenant relations.",
    exampleMessages: [
      { role: "user", content: "I need to upgrade the heating system in my rental property." },
      { role: "assistant", content: "Great to hear that! Upgrading to a heat pump can significantly reduce energy costs and improve tenant comfort. We offer government grants to help with the cost. Would you like more information on the available options?" }
    ]
  },
  {
    id: "homeowner",
    name: "Homeowner Support",
    description: "Expert assistance for home maintenance and improvements",
    systemPrompt: "You are a knowledgeable assistant for homeowners, offering advice on home maintenance, improvements, and energy efficiency.",
    exampleMessages: [
      { role: "user", content: "I'm interested in energy-efficient plumbing solutions for my home." },
      { role: "assistant", content: "That's a fantastic choice! Modern plumbing solutions can save you water and money. We offer options like low-flow fixtures and smart water systems. Would you like to know more about our services?" }
    ]
  },
  {
    id: "tenant",
    name: "Tenant Support",
    description: "Assistance for tenants with maintenance and property issues",
    systemPrompt: "You are a helpful assistant for tenants, providing support for maintenance requests and property-related concerns.",
    exampleMessages: [
      { role: "user", content: "I need to report an electrical issue in my apartment." },
      { role: "assistant", content: "I'm sorry to hear about the issue. We take tenant safety seriously. Could you please provide more details about the problem, such as the location and any visible damage?" }
    ]
  },
  {
    id: "customer-service",
    name: "Customer Service",
    description: "General customer support and inquiries",
    systemPrompt: "You are a friendly customer service representative, helping users with general inquiries and support needs.",
    exampleMessages: []
  },
  {
    id: "maintenance",
    name: "Maintenance Request",
    description: "Submit and track maintenance requests",
    systemPrompt: "You are a maintenance coordinator, helping to process and track maintenance requests efficiently.",
    exampleMessages: []
  },
  {
    id: "billing",
    name: "Billing Support",
    description: "Help with billing inquiries and payments",
    systemPrompt: "You are a billing specialist, assisting with payment-related questions and issues.",
    exampleMessages: []
  },
  {
    id: "emergency",
    name: "Emergency Support",
    description: "24/7 emergency assistance",
    systemPrompt: "You are an emergency support specialist, helping users with urgent issues that require immediate attention.",
    exampleMessages: []
  },
  {
    id: "scheduling",
    name: "Appointment Scheduling",
    description: "Schedule inspections and maintenance visits",
    systemPrompt: "You are a scheduling assistant, helping to coordinate appointments and maintenance visits.",
    exampleMessages: []
  },
  {
    id: "legal",
    name: "Legal Information",
    description: "Basic legal information and guidance",
    systemPrompt: "You are a legal information assistant, providing general guidance on property-related legal matters.",
    exampleMessages: []
  },
  {
    id: "feedback",
    name: "Feedback & Suggestions",
    description: "Submit feedback and improvement suggestions",
    systemPrompt: "You are a feedback coordinator, collecting and responding to user feedback and suggestions.",
    exampleMessages: []
  }
];