"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X, ArrowLeft, Send } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/constants";
import { useRouter, usePathname } from "next/navigation";

type Intent = {
  id: string;
  label: string;
  response: string;
  waText: string;
};

const INTENTS: Intent[] = [
  {
    id: "buy",
    label: "Buy a Home",
    response: "Great! We have verified resale properties and exclusive builder projects in Panvel and Navi Mumbai. How would you like to proceed?",
    waText: "Hi Greenspace Realty, I am looking to buy a home."
  },
  {
    id: "sell-land",
    label: "Sell Land",
    response: "We offer strategic land advisory and rigorous due-diligence to help you get the best value. Let's connect.",
    waText: "Hi Greenspace Realty, I have a land parcel I would like to discuss or sell."
  },
  {
    id: "builder",
    label: "Builder Partnership",
    response: "Looking for a dedicated sales engine? We take over the entire marketing lifecycle through our sole-selling mandates.",
    waText: "Hi Greenspace Realty, I am a builder/developer looking for a sales and marketing partnership."
  },
  {
    id: "invest",
    label: "Investment Advice",
    response: "Smart choice. We provide data-backed insights to help you build a profitable real estate portfolio in high-growth corridors.",
    waText: "Hi Greenspace Realty, I am looking for real estate investment advice."
  }
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenGreeting, setHasSeenGreeting] = useState(true);
  const [selectedIntent, setSelectedIntent] = useState<Intent | null>(null);
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Client-side only check
    const seen = localStorage.getItem("greenspace_chat_greeting_seen");
    if (!seen) {
      setHasSeenGreeting(false);
    }
  }, []);

  const toggleChat = () => {
    if (!isOpen) {
      localStorage.setItem("greenspace_chat_greeting_seen", "true");
      setHasSeenGreeting(true);
    }
    setIsOpen(!isOpen);
    if (isOpen) {
      // Reset flow when closing
      setTimeout(() => setSelectedIntent(null), 300);
    }
  };

  const handleFormClick = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedIntent(null), 300);
    
    if (pathname === '/' || pathname === '/contact') {
      const element = document.getElementById('enquire');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/contact#enquire');
      }
    } else {
      router.push('/contact#enquire');
    }
  };

  const cleanPhone = BUSINESS_DETAILS.phone.replace(/\D/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`bg-white w-[90vw] sm:w-96 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-right mb-4 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shrink-0">
              <img src="/images/brand/logo-square.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Greenspace Assistant</h3>
              <p className="text-xs text-brand-accent flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="bg-gray-50 p-4 h-96 overflow-y-auto flex flex-col gap-4">
          
          {/* Bot Greeting */}
          <div className="flex gap-2 items-end">
            <div className="w-6 h-6 bg-brand-primary rounded-full shrink-0 flex items-center justify-center">
              <MessageCircle size={12} className="text-white" />
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-sm text-gray-800 max-w-[85%]">
              Hi! I'm the Greenspace Realty assistant. What are you looking for today?
            </div>
          </div>

          {!selectedIntent ? (
            /* Intent Selection */
            <div className="flex flex-col gap-2 pl-8">
              {INTENTS.map((intent) => (
                <button
                  key={intent.id}
                  onClick={() => setSelectedIntent(intent)}
                  className="bg-white border border-brand-primary/20 text-brand-primary text-sm font-medium py-2 px-4 rounded-xl text-left hover:bg-brand-primary hover:text-white transition-colors shadow-sm"
                >
                  {intent.label}
                </button>
              ))}
            </div>
          ) : (
            /* Selected Intent Flow */
            <>
              <div className="flex justify-end">
                <div className="bg-brand-primary text-white p-3 rounded-2xl rounded-br-none shadow-sm text-sm max-w-[85%]">
                  {selectedIntent.label}
                </div>
              </div>

              <div className="flex gap-2 items-end">
                <div className="w-6 h-6 bg-brand-primary rounded-full shrink-0 flex items-center justify-center">
                  <MessageCircle size={12} className="text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 text-sm text-gray-800 max-w-[85%]">
                  {selectedIntent.response}
                </div>
              </div>

              <div className="pl-8 flex flex-col gap-2 mt-2">
                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(selectedIntent.waText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors shadow-sm"
                >
                  <Send size={16} />
                  Chat on WhatsApp
                </a>
                
                <button
                  onClick={handleFormClick}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium py-2.5 px-4 rounded-xl transition-colors shadow-sm text-center"
                >
                  Fill enquiry form instead
                </button>

                <button
                  onClick={() => setSelectedIntent(null)}
                  className="flex items-center justify-center gap-1 text-xs text-gray-500 hover:text-brand-primary mt-2 transition-colors"
                >
                  <ArrowLeft size={12} />
                  Start over
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Floating Toggle Button */}
      <div className="relative">
        {!hasSeenGreeting && !isOpen && (
          <div className="absolute bottom-full right-0 mb-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-sm font-medium text-brand-primary whitespace-nowrap animate-bounce">
            Need help? Let's chat!
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
          </div>
        )}
        <button
          onClick={toggleChat}
          className="bg-brand-primary hover:bg-brand-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95"
          aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        </button>
      </div>
      
    </div>
  );
}