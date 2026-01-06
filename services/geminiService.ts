
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDepartmentResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are the KPT Computer Science Department Assistant. 
        Your goal is to help students, faculty, and visitors with information about the department.
        Be professional, friendly, and academic.
        Key info: We offer AI, Cyber Security, and Data Science programs.
        Head of Department is Dr. Sarah Mitchell.
        If you don't know specific info, guide them to the Contact page.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my department servers. Please try again or visit the Contact page!";
  }
};
