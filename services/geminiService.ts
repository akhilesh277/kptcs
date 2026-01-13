import { GoogleGenAI } from "@google/genai";

// Use a lazy getter for the AI instance to avoid crashes if process is undefined during script load
const getAIClient = () => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const getDepartmentResponse = async (userPrompt: string) => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the KPT Computer Science Department Assistant. 
        Your goal is to provide information based on the official department overview.
        
        Department Ethos:
        - Vision: To achieve leadership in the field of Computer Science & Engineering by strengthening fundamentals and facilitating interdisciplinary sustainable research.
        - Mission: Evolve as a centre of excellence, develop state-of-the-art infrastructure for research, collaborate with industries, and develop professionals with ethical values.
        
        Academic Leadership:
        - HOD: Prof. Parashuram Talwar.
        - Permanent Faculty: Mrs. Leelavathi (Full Stack Development), Mr. Satish (Cyber Security).
        - Guest Faculty: Mrs. Akshitha (SE, DBMS), Mrs. Likhitha (IT Skills, CHMS), Mrs. Sheetal (Networking).
        
        Curriculum Highlights:
        - Outcome-based and industry-oriented.
        - Focus areas: Programming & Data Structures, DBMS, Software Engineering, Full Stack Dev, Cyber Security, OS, Cloud, and AI/ML basics.
        - Emphasis on hands-on labs, industrial visits, and project-based learning.
        
        Be professional, friendly, and guide students toward excellence. If you don't know specific info, guide them to the Contact page or HOD office.`,
        temperature: 0.7,
      },
    });
    return response.text || "I processed your request but didn't generate any text. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the department knowledge base. Please try again or visit our Contact page!";
  }
};