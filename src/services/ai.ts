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
    // Get sentiment analysis from Hugging Face
    const classifier = await initializeHuggingFace();
    const sentiment = await classifier(message);
    console.log('Message sentiment:', sentiment);

    // Process with Gemini
    const model = initializeGemini(geminiApiKey);
    
    // Prepare chat history
    const chatHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: msg.content,
    }));

    // Start chat
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    // Generate response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    
    return response.text();
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
};