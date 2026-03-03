'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export function ZorrowAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi 👋 I'm Zorrow AI. I help you discover charities, donate safely and track your impact.",
      sender: 'ai',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getAIResponse = (text: string) => {
    text = text.toLowerCase();

    if (text.includes('donate'))
      return "You can donate securely through Zorrow Impact. Every donation is tracked for transparency 💙";
    if (text.includes('ngo'))
      return "We verify NGOs carefully before listing them to ensure trust and real impact.";
    if (text.includes('impact'))
      return "With Zorrow, you can track exactly how your donation changes lives.";
    if (text.includes('hello') || text.includes('hi'))
      return "Hello 😊 What cause would you like to support today?";

    return "That's a great question 😊 I'm here to help you make a real-world impact.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(userMsg.text),
        sender: 'ai',
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full
        bg-gradient-to-br from-cyan-400 to-blue-600
        shadow-2xl shadow-cyan-500/60 flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        {isOpen ? (
          <X size={26} className="text-black" />
        ) : (
          <Image
            src="/zorrow-logo.png"
            alt="Zorrow AI"
            width={48}
            height={48}
            className="object-contain"
          />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[95vw]
            max-h-[calc(100vh-120px)] h-[600px]
            rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl border border-white/10
            flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/30 to-blue-600/30 backdrop-blur-xl p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image
                    src="/zorrow-logo.png"
                    alt="Zorrow Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">ZORROW AI</h3>
                  <p className="text-xs text-white/60">Impact Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-[#0b1220]/70 min-h-0">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === 'user' ? 'justify-end' : ''
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="text-white/60 text-sm">
                  Zorrow AI is typing...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-[#0b1220] border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about donating..."
                className="flex-1 bg-white/5 border border-cyan-400/30 rounded-full px-4 py-2 text-white outline-none"
              />
              <button
                onClick={sendMessage}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}