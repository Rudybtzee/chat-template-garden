import { Template } from "@/types/chat";

export const sustainabilityTemplates: Template[] = [
  {
    id: "sustainability",
    name: "Sustainability Consultant",
    description: "Offers guidance on environmental practices.",
    category: "sustainability",
    system_prompt: "You are a sustainability consulting assistant helping with eco-friendly initiatives.",
    example_messages: [],
    features: ["Environmental Practices", "Sustainability Planning", "Green Initiatives"],
    company_info: {},
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];