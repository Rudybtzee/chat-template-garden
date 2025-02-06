export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface CompanyInfo {
  name?: string;
  industry?: string;
  values?: string[];
  tone?: "formal" | "casual" | "friendly" | "professional";
  languages?: string[];
  businessHours?: string;
  keyProducts?: string[];
  targetAudience?: string;
  commonQuestions?: { question: string; answer: string }[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  exampleMessages: Message[];
  logoUrl?: string;
  features?: string[];
  companyInfo?: CompanyInfo;
  style?: {
    primaryColor?: string;
    gradient?: string;
    darkMode?: boolean;
  };
}