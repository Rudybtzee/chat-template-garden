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
  socialMedia?: {
    platform: string;
    url: string;
  }[];
  location?: {
    country: string;
    timezone: string;
    operatingRegions?: string[];
  };
  brandGuidelines?: {
    colors?: string[];
    voiceTone?: string;
    keywords?: string[];
  };
  competitors?: string[];
  uniqueSellingPoints?: string[];
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
  category?: string;
  industry?: string;
  aiModel?: "gemini" | "deepseek" | "huggingface";
  responseStyle?: {
    maxLength?: number;
    tone?: string;
    format?: string;
  };
}