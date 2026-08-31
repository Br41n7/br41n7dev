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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60]">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] max-h-[80vh] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300 border border-white/10 bg-slate-950/95 backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-between shadow-lg shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <div>
                <span className="font-bold text-white text-sm block">AI Career Assistant</span>
                <span className="text-[10px] text-indigo-200 block -mt-0.5">Powered by Gemini AI</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Messages container */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/60">
            {messages.map((m, i) => (
              <div key={`chat-msg-${i}`} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-md ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-tr-none font-medium'
                    : 'glass border border-white/10 text-slate-200 rounded-tl-none bg-slate-900/80'
                }`}>
                  {String(m.text)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass border border-white/10 p-3 rounded-2xl rounded-tl-none shimmer bg-slate-900/80">
                  <Loader2 className="animate-spin text-indigo-400" size={16} />
                </div>
              </div>
            )}
          </div>

          {/* Input field */}
          <div className="p-3.5 glass border-t border-white/10 bg-slate-950/80 shrink-0">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Iyanu's stack or projects..."
                className="w-full bg-slate-900/90 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="absolute right-2 p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-40 disabled:bg-transparent disabled:text-slate-500 transition-all"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40 text-white transition-all transform hover:scale-110 active:scale-95 group border border-white/20"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="group-hover:hidden" size={26} />
          <Sparkles className="hidden group-hover:block animate-pulse text-indigo-200" size={26} />
        </button>
      )}
    </div>
  );
};

export default GeminiChat;