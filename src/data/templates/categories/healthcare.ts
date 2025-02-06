import { Template } from "@/types/chat";

export const healthcareTemplates: Template[] = [
  {
    id: "healthcare",
    name: "Healthcare Provider",
    description: "Manages appointment scheduling and general medical inquiries.",
    systemPrompt: "You are a healthcare assistant helping with medical scheduling and basic information.",
    exampleMessages: []
  },
  {
    id: "nutritionist",
    name: "Nutritionist",
    description: "Offers dietary advice and meal planning.",
    systemPrompt: "You are a nutrition assistant helping with dietary recommendations and meal plans.",
    exampleMessages: []
  },
  {
    id: "fitness-trainer",
    name: "Fitness Trainer",
    description: "Provides workout guidance and fitness plans.",
    systemPrompt: "You are a fitness training assistant helping with exercise routines and wellness goals.",
    exampleMessages: []
  },
  {
    id: "mental-health",
    name: "Mental Health Support",
    description: "Provides mental wellness resources and guidance.",
    systemPrompt: "You are a mental health support assistant helping with wellness resources and information.",
    exampleMessages: []
  }
];