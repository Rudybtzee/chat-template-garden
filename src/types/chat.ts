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
  industry?: string;
  aiModel?: "gemini" | "deepseek" | "huggingface";
  responseStyle?: {
    maxLength?: number;
    tone?: string;
    format?: string;
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

export interface Profile {
  id: string;
  full_name?: string;
  avatar_url?: string;
  email?: string;
  company_name?: string;
  role?: string;
  created_at: string;
  updated_at: string;
}

export interface CompanyProfile {
  id: string;
  user_id: string;
  name: string;
  industry?: string;
  values?: string[];
  tone?: string;
  languages?: string[];
  business_hours?: string;
  target_audience?: string;
  common_questions?: { question: string; answer: string }[];
  social_media?: { platform: string; url: string }[];
  location?: {
    country: string;
    timezone: string;
    operating_regions?: string[];
  };
  brand_guidelines?: {
    colors?: string[];
    voice_tone?: string;
    keywords?: string[];
  };
  created_at: string;
  updated_at: string;
}