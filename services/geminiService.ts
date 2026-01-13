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
        Your goal is to help students, faculty, and visitors with information about the department.
        Be professional, friendly, and academic.
        Key info: We offer programs in AI, Cyber Security, Data Science, and core Computer Science.
        Head of Department is Prof. Parashuram D Talwar.
        Key Faculty: Mrs. Leelavathi R (Full Stack Dev), Mr. Satish (Cyber Security).
        We have several guest lecturers for subjects like DBMS, Software Engineering, IT Skills, and Networking.
        If you don't know specific info, guide them to the Contact page.`,
        temperature: 0.7,
      },
    });
    return response.text || "I processed your request but didn't generate any text. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my department servers. Please try again or visit the Contact page!";
  }
};