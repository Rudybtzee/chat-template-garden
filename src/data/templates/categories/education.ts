import { Template } from "@/types/chat";

export const educationTemplates: Template[] = [
  {
    id: "tutor",
    name: "Academic Tutor",
    description: "Provides educational support and guidance across subjects.",
    category: "education",
    system_prompt: "You are an academic tutor helping students understand various subjects and concepts.",
    example_messages: [
      {
        role: "user",
        content: "Can you help me understand photosynthesis?"
      },
      {
        role: "assistant",
        content: "I'll explain photosynthesis in a simple way..."
      }
    ],
    features: ["Subject Tutoring", "Homework Help", "Exam Preparation"],
    company_info: {
      industry: "Education",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  },
  {
    id: "career-counselor",
    name: "Career Counselor",
    description: "Helps with career planning and professional development.",
    category: "education",
    system_prompt: "You are a career counselor helping people make informed decisions about their professional path.",
    example_messages: [],
    features: ["Career Planning", "Resume Review", "Interview Prep"],
    company_info: {
      industry: "Career Counseling",
      logoUrl: "/placeholder.svg"
    },
    style: {
      primaryColor: "#2563eb",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      darkMode: false
    }
  }
];