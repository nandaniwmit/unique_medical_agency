import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Clock, MapPin, AlertCircle, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-init',
      role: 'assistant',
      content: "नमस्ते! यूनिक मेडिकल एजेन्सी AI सहायक में आपका स्वागत है। 🙏 I am your smart healthcare assistant. I can help you with store timings, medicine categories, WhatsApp order guides, or general wellness advice. How can I care for you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      // Map history to standard chat payload
      const historyPayload = messages.slice(1).map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: historyPayload })
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMsg: ChatMessage = {
          id: `a-${Date.now()}`,
          role: 'assistant',
          content: data.reply || "I am sorry, I couldn't generate a response. Please try again.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMsg]);
      } else {
        throw new Error("Chat request failed");
      }
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: "क्षमा करें, सर्वर से संपर्क करने में असमर्थता हुई। (Network connection issue. Please check your internet or try asking again in a moment!)",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    { text: "Store location & timing?", label: "🕒 Timing & Location" },
    { text: "How can I order via WhatsApp?", label: "💬 How to Order" },
    { text: "Do you have digital BP machines?", label: "🩺 BP Monitors" },
    { text: "Common Cold safety tips?", label: "🌿 Wellness advice" }
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4.5 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-800 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <Bot className="w-5 h-5 text-emerald-400" />
        <span className="text-xs font-bold font-mono tracking-wide uppercase hidden md:inline">Ask AI Assistant</span>
      </motion.button>

      {/* Sliding Widget Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[420px] h-[550px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            
            {/* Header */}
            <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-display text-sm leading-none flex items-center gap-1">
                    <span>Unique Medical AI</span>
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1 block">Live Health Advisor</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Disclaimer Bar */}
            <div className="bg-rose-500/10 text-rose-500 text-[10px] px-4 py-2 flex items-start gap-1.5 border-b border-rose-500/10 leading-normal">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                <strong>Disclaimer:</strong> AI answers are for educational guidelines only. Do not substitute for expert doctor prescriptions.
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/20 scrollbar-thin">
              {messages.map((m) => {
                const isAI = m.role === 'assistant';
                return (
                  <div key={m.id} className={`flex items-start gap-2.5 ${isAI ? 'justify-start' : 'justify-end'}`}>
                    
                    {/* Avatar */}
                    {isAI && (
                      <div className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center border border-slate-800 shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    {/* Bubble */}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs sm:text-sm shadow-2xs leading-relaxed ${
                      isAI 
                        ? 'bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-xs' 
                        : 'bg-accent-med text-white rounded-tr-xs'
                    }`}>
                      <p className="whitespace-pre-line">{m.content}</p>
                      <span className={`block text-[8px] mt-1 text-right font-mono ${isAI ? 'text-slate-400' : 'text-emerald-100'}`}>
                        {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {/* User Avatar */}
                    {!isAI && (
                      <div className="w-7 h-7 rounded-lg bg-accent-med text-white flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                    )}

                  </div>
                );
              })}

              {loading && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center border border-slate-800 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl rounded-tl-xs px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts Container */}
            <div className="px-4 py-2.5 bg-slate-100/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800 flex flex-wrap gap-1.5">
              {samplePrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p.text)}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 hover:border-accent-med hover:text-accent-med dark:hover:text-emerald-400 text-[10px] font-semibold text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Form Input Footer */}
            <div className="p-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 bg-white dark:bg-slate-900">
              <input
                type="text"
                placeholder="Ask about medications, hours, WhatsApp order..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={loading}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-850 dark:text-slate-100 placeholder-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-500/25 focus:border-accent-med"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={loading || !input.trim()}
                className="p-2.5 rounded-xl bg-accent-med hover:bg-emerald-700 text-white disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
