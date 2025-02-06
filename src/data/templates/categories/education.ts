import { Template } from "@/types/chat";

export const educationTemplates: Template[] = [
  {
    id: "education",
    name: "Education Consultant",
    description: "Helps with academic planning and educational guidance.",
    category: "education",
    system_prompt: "You are an education consultant assisting with academic and career planning.",
    example_messages: [],
    features: ["Academic Planning", "Career Guidance", "Educational Resources"],
    company_info: {}
  },
  {
    id: "career-coach",
    name: "Career Coach",
    description: "Offers career guidance and development advice.",
    category: "education",
    system_prompt: "You are a career coaching assistant helping with professional development.",
    example_messages: [],
    features: ["Career Planning", "Resume Review", "Interview Preparation"],
    company_info: {}
  },
  {
    id: "language-tutor",
    name: "Language Tutor",
    description: "Assists with language learning and practice.",
    category: "education",
    system_prompt: "You are a language tutoring assistant helping with language acquisition.",
    example_messages: [],
    features: ["Language Practice", "Grammar Help", "Vocabulary Building"],
    company_info: {}
  }
];