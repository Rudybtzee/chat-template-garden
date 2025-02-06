import { GoogleGenerativeAI } from '@google/generative-ai';
import { pipeline } from '@huggingface/transformers';
import { Message } from '@/types/chat';

let textClassifier: any = null;

// Initialize Hugging Face classifier
const initializeHuggingFace = async () => {
  if (!textClassifier) {
    textClassifier = await pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
  }
  return textClassifier;
};

// Initialize Gemini
const initializeGemini = (apiKey: string) => {
  if (!apiKey) {
    throw new Error("Gemini API key is required");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ model: "gemini-pro" });
};

export const processMessage = async (
  message: string,
  systemPrompt: string,
  history: Message[],
  geminiApiKey: string
) => {
  try {
    if (!message || !systemPrompt) {
      throw new Error("Message and system prompt are required");
    }

    // Get sentiment analysis from Hugging Face
    const classifier = await initializeHuggingFace();
    const sentiment = await classifier(message);
    console.log('Message sentiment:', sentiment);

    // Process with Gemini
    const model = initializeGemini(geminiApiKey);
    
    // Prepare chat history with system prompt
    const chatHistory = [
      {
        role: 'model',
        parts: [{ text: systemPrompt }]
      },
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      }))
    ];

    // Start chat with enhanced context
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Generate response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    
    if (!response.text()) {
      throw new Error("Failed to generate response");
    }
    
    return response.text();
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
};