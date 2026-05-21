
import { GoogleGenAI, Type } from "@google/genai";

// Provide a local declaration so TypeScript recognizes Vite's import.meta.env
declare global {
  interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

export async function analyzeFragrance(ingredients: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this fragrance ingredient list: "${ingredients}"`,
    config: {
      systemInstruction: `You are OLFÄRA Intelligence, a luxury fragrance analyst. 
      Your goal is to decode ingredients into transparent, human-readable, and emotionally intelligent insights.
      
      PRINCIPLES:
      - Avoid binary "good/bad" labeling. Focus on function, craftsmanship, and molecular stability.
      - Use "Natural", "Synthetic", or "Bio-identical" for origin.
      - Explain why synthetics are often more sustainable or high-performance fixatives.
      - Do not make medical or hormonal claims.
      - Use professional, luxury-editorial tone.
      
      METRICS:
      - Quality Score: 0-100 based on purity, performance roles, and complexity.
      - Sustainability Index: Low/Medium/High Impact.
      - Longevity: Hours of wear.
      - Emotions: Associate aroma families with emotional mappings (Calm, Focus, Boldness, etc.).
      - Volatility: Categorize ingredients into Top, Heart, and Base notes.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          qualityScore: { type: Type.NUMBER },
          ingredients: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                role: { type: Type.STRING },
                origin: { type: Type.STRING },
                quality: { type: Type.STRING }
              },
              required: ["name", "role", "origin", "quality"]
            }
          },
          sustainability: {
            type: Type.OBJECT,
            properties: {
              index: { type: Type.STRING },
              score: { type: Type.NUMBER },
              summary: { type: Type.STRING }
            },
            required: ["index", "score", "summary"]
          },
          wearability: {
            type: Type.OBJECT,
            properties: {
              longevity: { type: Type.STRING },
              projection: { type: Type.STRING },
              climate: { type: Type.STRING },
              context: { type: Type.STRING }
            },
            required: ["longevity", "projection", "climate", "context"]
          },
          emotions: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                label: { type: Type.STRING },
                value: { type: Type.NUMBER },
                icon: { type: Type.STRING }
              },
              required: ["label", "value", "icon"]
            }
          },
          volatility: {
            type: Type.OBJECT,
            properties: {
              top: { type: Type.ARRAY, items: { type: Type.STRING } },
              heart: { type: Type.ARRAY, items: { type: Type.STRING } },
              base: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["top", "heart", "base"]
          }
        },
        required: ["summary", "qualityScore", "ingredients", "sustainability", "wearability", "emotions", "volatility"]
      }
    }
  });

  // response.text may be undefined according to typings — default to empty object JSON
  return JSON.parse(response.text ?? '{}');
}
