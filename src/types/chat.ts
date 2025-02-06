export interface Message {
  id?: string;
  role: "user" | "assistant";
  content: string;
  created_at?: string;
  conversation_id?: string;
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
  category: string;
  system_prompt: string;
  example_messages?: Message[];
  features?: string[];
  company_info?: CompanyInfo;
  style?: {
    primaryColor?: string;
    gradient?: string;
    darkMode?: boolean;
  };
  created_at?: string;
  updated_at?: string;
}

export interface Conversation {
  id: string;
  user_id: string;
  template_id: string;
  title: string;
  created_at: string;
  updated_at: string;
  messages?: Message[];
  template?: Template;
}