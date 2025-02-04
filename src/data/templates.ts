import { Template } from "@/types/chat";

export const templates: Template[] = [
  {
    id: "general",
    name: "General Assistant",
    description: "A helpful AI assistant for general questions and conversations.",
    systemPrompt: "You are a helpful AI assistant.",
    exampleMessages: []
  },
  {
    id: "writing",
    name: "Writing Assistant",
    description: "Helps with writing, editing, and improving your text.",
    systemPrompt: "You are a writing assistant focused on helping users improve their writing.",
    exampleMessages: []
  },
  {
    id: "coding",
    name: "Code Assistant",
    description: "Helps with programming and technical questions.",
    systemPrompt: "You are a coding assistant with expertise in programming.",
    exampleMessages: []
  },
  {
    id: "creative",
    name: "Creative Writing",
    description: "Assists with creative writing and storytelling.",
    systemPrompt: "You are a creative writing assistant helping users craft stories.",
    exampleMessages: []
  },
  {
    id: "academic",
    name: "Academic Writing",
    description: "Helps with academic papers and research.",
    systemPrompt: "You are an academic writing assistant helping with research papers.",
    exampleMessages: []
  },
  {
    id: "business",
    name: "Business Writing",
    description: "Assists with business communications and documents.",
    systemPrompt: "You are a business writing assistant helping with professional communications.",
    exampleMessages: []
  },
  {
    id: "translator",
    name: "Language Translator",
    description: "Helps translate between different languages.",
    systemPrompt: "You are a language translation assistant.",
    exampleMessages: []
  },
  {
    id: "teacher",
    name: "Teaching Assistant",
    description: "Helps explain complex topics in simple terms.",
    systemPrompt: "You are a teaching assistant helping users understand complex topics.",
    exampleMessages: []
  },
  {
    id: "math",
    name: "Math Tutor",
    description: "Assists with mathematical problems and concepts.",
    systemPrompt: "You are a math tutor helping users solve problems.",
    exampleMessages: []
  },
  {
    id: "brainstorm",
    name: "Brainstorming Partner",
    description: "Helps generate ideas and creative solutions.",
    systemPrompt: "You are a brainstorming assistant helping users generate ideas.",
    exampleMessages: []
  }
];