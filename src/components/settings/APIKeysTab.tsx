import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const APIKeysTab = () => {
  const [geminiApiKey, setGeminiApiKey] = useState("");
  const [deepseekApiKey, setDeepseekApiKey] = useState("");
  const [huggingFaceApiKey, setHuggingFaceApiKey] = useState("");

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="geminiApiKey">Gemini API Key</Label>
        <Input
          id="geminiApiKey"
          type="password"
          placeholder="Enter your Gemini API key"
          value={geminiApiKey}
          onChange={(e) => setGeminiApiKey(e.target.value)}
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="deepseekApiKey">DeepSeek API Key</Label>
        <Input
          id="deepseekApiKey"
          type="password"
          placeholder="Enter your DeepSeek API key"
          value={deepseekApiKey}
          onChange={(e) => setDeepseekApiKey(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="huggingFaceApiKey">Hugging Face API Key</Label>
        <Input
          id="huggingFaceApiKey"
          type="password"
          placeholder="Enter your Hugging Face API key"
          value={huggingFaceApiKey}
          onChange={(e) => setHuggingFaceApiKey(e.target.value)}
        />
      </div>
    </div>
  );
};