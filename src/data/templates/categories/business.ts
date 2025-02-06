import { Template } from "@/types/chat";

export const businessTemplates: Template[] = [
  {
    id: "consulting",
    name: "Business Consultant",
    description: "Offers business strategy and operational advice with industry-specific insights.",
    category: "business",
    system_prompt: "You are a business consultant helping with strategy and operations. Use the company information provided to give contextual and relevant advice.",
    example_messages: [
      {
        role: "user",
        content: "What are the key areas we should focus on for growth?"
      },
      {
        role: "assistant",
        content: "Based on your industry and target audience, I recommend focusing on three key areas..."
      }
    ],
    features: ["Strategy Planning", "Market Analysis", "Growth Consulting", "Operations Optimization"],
    company_info: {
      industry: "Business Consulting",
      values: ["Excellence", "Innovation", "Integrity"],
      tone: "professional",
      languages: ["English", "Spanish", "French"],
      businessHours: "9:00 AM - 6:00 PM EST",
      targetAudience: "Small to medium-sized businesses",
      location: {
        country: "United States",
        timezone: "EST",
        operatingRegions: ["North America", "Europe"]
      },
      brandGuidelines: {
        voiceTone: "Professional and authoritative",
        keywords: ["strategy", "growth", "optimization", "efficiency"]
      },
      commonQuestions: [
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive business consulting services including strategic planning, market analysis, and operational optimization."
        },
        {
          question: "How do you charge for services?",
          answer: "Our pricing is customized based on project scope and requirements. We offer both hourly consulting and project-based pricing."
        }
      ],
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "startup-advisor",
    name: "Startup Advisor",
    description: "Specialized guidance for startups and early-stage companies.",
    category: "business",
    system_prompt: "You are a startup advisor helping entrepreneurs navigate the challenges of building and scaling their businesses.",
    example_messages: [],
    features: ["Startup Strategy", "Funding Guidance", "Growth Planning", "Market Entry"],
    company_info: {
      industry: "Startup Advisory",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];