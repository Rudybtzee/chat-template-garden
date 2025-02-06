import { Template } from "@/types/chat";

export const healthcareTemplates: Template[] = [
  {
    id: "healthcare",
    name: "Healthcare Provider",
    description: "Manages appointment scheduling and general medical inquiries.",
    category: "healthcare",
    system_prompt: "You are a healthcare assistant helping with medical scheduling and basic information.",
    example_messages: [],
    features: ["Appointment Scheduling", "Medical Information", "Patient Support"],
    company_info: {}
  },
  {
    id: "nutritionist",
    name: "Nutritionist",
    description: "Offers dietary advice and meal planning.",
    category: "healthcare",
    system_prompt: "You are a nutrition assistant helping with dietary recommendations and meal plans.",
    example_messages: [],
    features: ["Meal Planning", "Dietary Advice", "Nutrition Education"],
    company_info: {}
  },
  {
    id: "fitness-trainer",
    name: "Fitness Trainer",
    description: "Provides workout guidance and fitness plans.",
    category: "healthcare",
    system_prompt: "You are a fitness training assistant helping with exercise routines and wellness goals.",
    example_messages: [],
    features: ["Workout Plans", "Exercise Guidance", "Fitness Goals"],
    company_info: {}
  },
  {
    id: "mental-health",
    name: "Mental Health Support",
    description: "Provides mental wellness resources and guidance.",
    category: "healthcare",
    system_prompt: "You are a mental health support assistant helping with wellness resources and information.",
    example_messages: [],
    features: ["Mental Wellness", "Resource Guidance", "Support Information"],
    company_info: {}
  }
];