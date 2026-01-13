import React, { useState, useRef, useEffect } from 'react';

const KNOWLEDGE_BASE = [
  {
    keywords: ["hello", "hi", "hey", "greetings", "anyone there"],
    response: "Hello! I am your KPT CS College Assistant. How can I help you today?"
  },
  {
    keywords: ["hod", "parashuram", "talwar", "head of department", "head", "department lead"],
    response: "The Department of Computer Science & Engineering is led by Prof. Parashuram Talwar (HOD). He focuses on quality technical education and skill development."
  },
  {
    keywords: ["faculty", "teachers", "staff", "lecturers", "timings", "faculty timings"],
    response: "Our faculty includes Prof. Parashuram Talwar (HOD), Mrs. Leelavathi (Full Stack), Mr. Satish (Cyber Security), and guest lecturers Mrs. Akshitha, Mrs. Akshatha, Mrs. Likhitha, and Mrs. Sheetal. Faculty are available during college hours: 9 AM to 5 PM."
  },
  {
    keywords: ["vision", "mission", "goal", "objective", "ethos"],
    response: "Vision: To achieve leadership in CS & Engineering by strengthening fundamentals. Mission: Evolve as a center of excellence, collaborate with industry, and develop ethical professionals."
  },
  {
    keywords: ["timing", "hours", "working hours", "open", "time", "schedule", "working"],
    response: "The college operates from 9:00 AM to 5:00 PM, Monday to Saturday. Sunday is a holiday."
  },
  {
    keywords: ["location", "address", "where", "junction", "place", "college location"],
    response: "KPT Mangalore College is located at KPT Junction, Mangalore, Karnataka, 575004."
  },
  {
    keywords: ["email", "contact", "gmail", "reach", "contact details"],
    response: "You can reach the college office at kptmangalore@gmail.com. We handle all inquiries via Gmail."
  },
  {
    keywords: ["courses", "syllabus", "subjects", "learn", "study", "areas"],
    response: "Our courses cover Programming, Data Structures, DBMS, Software Engineering, Networking, Cyber Security, and Emerging Technologies like AI/ML and Cloud."
  },
  {
    keywords: ["holiday", "sunday", "off"],
    response: "Sunday is a holiday. We are open from Monday to Saturday, 9:00 AM to 5:00 PM."
  },
  {
    keywords: ["admissions", "join", "apply"],
    response: "For admission-related inquiries, please visit the college office at KPT Junction during working hours (9 AM - 5 PM) or email kptmangalore@gmail.com."
  }
];

const SUGGESTIONS = [
  "Faculty Timings",
  "College Location",
  "Working Hours",
  "Courses",
  "Contact Details"
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Welcome to KPT CS Assistant. I am here to help with information about our college, faculty, and courses!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const processResponse = (userText: string) => {
    const lowQuery = userText.toLowerCase();
    let matchedResponse = "I'm sorry, I don't have that specific information. You can ask about faculty, timings, location, courses, or contact details.";
    
    for (const entry of KNOWLEDGE_BASE) {
      if (entry.keywords.some(keyword => lowQuery.includes(keyword))) {
        matchedResponse = entry.response;
        break;
      }
    }

    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: matchedResponse }]);
      setIsTyping(false);
    }, 500);
  };

  const handleSend = () => {
    const userText = input.trim();
    if (!userText) return;

    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    processResponse(userText);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessages(prev => [...prev, { role: 'user', text: suggestion }]);
    processResponse(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-[320px] sm:w-[380px] flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden h-[500px] animate-fadeIn transition-colors duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-university text-sm"></i>
              </div>
              <span className="font-semibold text-sm">KPT CS Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-cyan-100 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 scroll-stable">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-tr-none shadow-sm' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-cyan-300 dark:bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-cyan-300 dark:bg-cyan-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1 h-1 bg-cyan-300 dark:bg-cyan-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions & Input */}
          <div className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-3">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {SUGGESTIONS.map(s => (
                <button
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                  className="text-[10px] font-semibold bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-100 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-grow border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-800 dark:text-white"
              />
              <button 
                onClick={handleSend}
                className="w-9 h-9 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-full flex items-center justify-center hover:from-cyan-700 hover:to-teal-600 transition-colors shrink-0 shadow-md"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-cyan-600 to-teal-500 hover:from-cyan-700 hover:to-teal-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
        >
          <i className="fas fa-comment-dots text-xl group-hover:animate-pulse"></i>
        </button>
      )}
    </div>
  );
};

export default Chatbot;