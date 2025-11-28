import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const SYSTEM_INSTRUCTION = `
You are "SolarTech Bot", a highly knowledgeable technical sales engineer for SolarBOS Pro.
We sell wholesale Balance of System (BOS) components: cables, connectors, combiners, fuses, breakers, disconnects, and mounting hardware.

Your role is to:
1. Help installers identify the correct components for their specific solar projects (e.g., matching fuse sizes to wire gauges).
2. Explain technical specifications of BOS components (NEC compliance, voltage ratings).
3. Suggest products from our catalog (mock data knowledge: we sell PV Wire, MC4s, Combiner Boxes, Rapid Shutdown switches, Clamps, Grounding Lugs, SPDs).
4. Be concise, professional, and safety-oriented.

Do not invent prices that aren't in the provided context, but you can estimate typical industry standards if asked about general engineering principles.
Always prioritize safety and code compliance (NEC).
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGemini = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing from environment variables.");
    return;
  }
  aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!aiClient) initializeGemini();
  if (!aiClient) return "I'm sorry, I cannot connect to the assistance server right now. Please check your API key.";

  try {
    // Format history for the model
    // Note: The new SDK allows managing chat history via the chat object, but for simplicity in this stateless service wrapper
    // we will just construct a prompt with context or use the simple generateContent if history is short.
    // However, to maintain true context, we should use ai.chats.create()
    
    // Convert our internal ChatMessage type to the format expected by the chat history if we were persisting it properly.
    // For this implementation, we will use a fresh chat instance with history injection for each turn to simulate persistence in this demo context
    // or simply use generateContent with the full transcript if the session is short.
    
    // Let's use the Chat API correctly.
    const chat = aiClient.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I didn't get a clear response. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble processing your request. Please try again later.";
  }
};
