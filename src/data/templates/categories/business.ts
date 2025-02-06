import { Template } from "@/types/chat";

export const businessTemplates: Template[] = [
  {
    id: "consulting",
    name: "Business Consultant",
    description: "Offers business strategy and operational advice with industry-specific insights.",
    systemPrompt: "You are a business consultant helping with strategy and operations. Use the company information provided to give contextual and relevant advice.",
    exampleMessages: [
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
    category: "Business",
    industry: "Business Consulting",
    aiModel: "gemini",
    responseStyle: {
      maxLength: 300,
      tone: "professional",
      format: "structured"
    },
    companyInfo: {
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
        },
        {
          question: "What industries do you specialize in?",
          answer: "We specialize in technology, healthcare, retail, and manufacturing sectors, with certified consultants in each field."
        }
      ],
      socialMedia: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/company/business-consulting"
        },
        {
          platform: "Twitter",
          url: "https://twitter.com/business-consulting"
        }
      ],
      uniqueSellingPoints: [
        "20+ years of industry experience",
        "Certified consultants in multiple fields",
        "Data-driven approach",
        "Customized solutions"
      ]
    }
  },
  {
    id: "startup-advisor",
    name: "Startup Advisor",
    description: "Assists with startup planning and growth.",
    systemPrompt: "You are a startup advisory assistant helping with business development and strategy. Utilize the company's specific information to provide targeted advice.",
    exampleMessages: [
      {
        role: "user",
        content: "How should we approach our seed funding round?"
      },
      {
        role: "assistant",
        content: "Given your current stage and market position..."
      }
    ],
    features: ["Funding Strategy", "Market Entry", "Team Building", "Product Development"],
    companyInfo: {
      industry: "Startup Advisory",
      values: ["Innovation", "Agility", "Growth"],
      tone: "friendly",
      languages: ["English"],
      businessHours: "Flexible Hours",
      commonQuestions: [
        {
          question: "When should we start fundraising?",
          answer: "The ideal time to start fundraising depends on your traction, market validation, and growth metrics."
        },
        {
          question: "How do we build our initial team?",
          answer: "Focus on finding versatile individuals who share your vision and can wear multiple hats in the early stages."
        }
      ]
    }
  },
  {
    id: "project-manager",
    name: "Project Manager",
    description: "Assists with project planning and tracking.",
    systemPrompt: "You are a project management assistant helping with project coordination.",
    exampleMessages: [],
    features: [],
    companyInfo: {}
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    description: "Provides business analysis and insights.",
    systemPrompt: "You are a business analysis assistant helping with data interpretation and strategy.",
    exampleMessages: [],
    features: [],
    companyInfo: {}
  }
];
