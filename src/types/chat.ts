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
}