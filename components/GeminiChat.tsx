import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, X, MessageSquare, Send, Loader2 } from 'lucide-react';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hello! I'm your AI Career Assistant. I can tell you about Iyanu Olalegan's (br41n7) 4 years of Django/React experience or their Tech4Dev certification. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isTyping) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: trimmedInput }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: trimmedInput }] }],
        config: {
          systemInstruction: `
            You are a helpful and professional AI assistant for the developer Iyanu Olalegan, also known by the alias br41n7.
            DEVELOPER CONTEXT:
            - Name: Iyanu Olalegan (br41n7).
            - Email: iyanuolalegan@gmail.com
            - Experience: 4 years of professional full-stack web development.
            - Tech Stack: Expertise in Django (Python), Bootstrap, and ReactJS (JavaScript/TypeScript).
            - Certification: Recently received a Software Developer certification from Tech4Dev (Class of 2024).
            - Recent Roles: Senior Full Stack Developer at TechFlow Solutions.
            - Projects: Focus on E-commerce (Nexus Pro), SaaS Dashboards (Streamline), and Real-time Task management.
            - Tone: Professional, friendly, tech-savvy, and helpful.
            If asked for a resume, mention the download link is in the 'About' section or contact page.
          `,
          temperature: 0.7,
        }
      });

      const aiText = response.text ? String(response.text) : "I processed that, but couldn't generate a text response. Can you try rephrasing?";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting to my servers. Please check your internet or try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-indigo-600 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="text-white" size={20} />
              <span className="font-bold text-white">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close Chat">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={`chat-msg-${i}`} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'glass border-white/10 text-slate-200 rounded-tl-none'
                }`}>
                  {String(m.text)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass border-white/10 p-3 rounded-2xl rounded-tl-none shimmer">
                  <Loader2 className="animate-spin text-indigo-400" size={16} />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 glass border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Iyanu's skills..."
                className="w-full bg-slate-800/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="absolute right-2 top-1.5 p-1.5 text-indigo-400 hover:text-indigo-300 disabled:opacity-50 transition-colors"
                aria-label="Send Message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-indigo-600 hover:bg-indigo-700 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-600/30 text-white transition-all transform hover:scale-110 active:scale-95 group"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="group-hover:hidden" size={28} />
          <Sparkles className="hidden group-hover:block animate-pulse" size={28} />
        </button>
      )}
    </div>
  );
};

export default GeminiChat;