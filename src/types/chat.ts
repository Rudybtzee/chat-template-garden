export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  exampleMessages: Message[];
  logoUrl?: string;
  features?: string[];
  style?: {
    primaryColor?: string;
    gradient?: string;
    darkMode?: boolean;
  };
}