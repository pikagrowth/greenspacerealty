// components/chat/ChatWidget.tsx
"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { BUSINESS_DETAILS } from "@/lib/constants";

type Intent = "buy" | "sell" | "builder" | "invest" | null;

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<Intent>(null);

  // Map intents to canned responses and WhatsApp pre-fills
  const intentConfig = {
    buy: {
      label: "Buy a Home",
      response: "Great! We have exclusive verified listings across Panvel and Navi Mumbai. Would you like to chat with an advisor on WhatsApp or leave your details?",
      waText: "Hi, I'm looking to buy a home and would like some assistance.",
    },
    sell: {
      label: "Sell Land",
      response: "Excellent. We have a verified database of developers and investors looking for clear-title land. How would you like to proceed?",
      waText: "Hi, I have a land parcel I want to sell. Can we discuss?",
    },
    builder: {
      label: "Builder Partnership",
      response: "We'd love to partner. We take over the complete marketing lifecycle so you can focus on construction. Let's connect.",
      waText: "Hi, I'm a developer looking for a sole-selling mandate partnership.",
    },
    invest: {
      label: "Investment Advice",
      response: "Smart choice. The Navi Mumbai & NAINA corridors are booming. Let's get you connected with our investment advisory team.",
      waText: "Hi, I'm looking for high-growth real estate investment opportunities.",
    },
  };

  const handleWhatsAppClick = (text: string) => {
    const phone = BUSINESS_DETAILS.phone.replace(/\D/g, '');
    window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[110] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] md:w-80 bg-white dark:bg-[#161917] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300 transition-colors">
          
          {/* Header - Fixed Text Colors */}
          <div className="bg-brand-primary dark:bg-[#0c100e] border-b border-transparent dark:border-gray-800 p-4 flex items-center justify-between relative transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white dark:bg-[#161917] rounded-full flex items-center justify-center p-1 shrink-0 transition-colors">
                {/* Fallback to image tag to avoid Next.js Image component domain config issues */}
                <img 
                  src="/images/brand/logo-square.jpg" 
                  alt="Greenspace Logo" 
                  className="w-full h-full object-contain rounded-full" 
                />
              </div>
              <div>
                {/* Forced text-white for visibility */}
                <h3 className="font-bold text-white text-sm">Greenspace Advisor</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  {/* Enhanced contrast for the online status */}
                  <span className="text-xs text-emerald-100 dark:text-emerald-200 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1 bg-black/10 hover:bg-black/20 rounded-full"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-[#111412] flex flex-col gap-4 transition-colors">
            {/* Bot Greeting */}
            <div className="flex gap-2 w-full">
              <div className="w-8 h-8 bg-brand-primary dark:bg-brand-primaryDark rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm transition-colors">
                <MessageCircle size={16} className="text-white dark:text-brand-bgDark" />
              </div>
              <div className="bg-white dark:bg-[#1a1e1b] p-3 rounded-2xl rounded-tl-sm border border-gray-100 dark:border-gray-800 shadow-sm text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                Hi! I'm the Greenspace Realty assistant. What are you looking for today?
              </div>
            </div>

            {/* User Options or Selected Intent Flow */}
            {!selectedIntent ? (
              <div className="flex flex-col gap-2 ml-10">
                {(Object.keys(intentConfig) as Intent[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedIntent(key)}
                    className="bg-white dark:bg-[#161917] border border-brand-primary/20 dark:border-brand-primaryDark/30 hover:border-brand-primary dark:hover:border-brand-primaryDark hover:bg-brand-primary/5 dark:hover:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark text-sm font-medium py-2.5 px-4 rounded-xl text-left transition-colors shadow-sm"
                  >
                    {intentConfig[key]?.label}
                  </button>
                ))}
              </div>
            ) : (
              <>
                {/* User Selected Bubble */}
                <div className="flex justify-end w-full">
                  <div className="bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-bgDark p-3 rounded-2xl rounded-tr-sm shadow-sm text-sm transition-colors">
                    {intentConfig[selectedIntent].label}
                  </div>
                </div>

                {/* Bot Follow-up */}
                <div className="flex gap-2 w-full animate-in fade-in duration-500">
                  <div className="w-8 h-8 bg-brand-primary dark:bg-brand-primaryDark rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm transition-colors">
                    <MessageCircle size={16} className="text-white dark:text-brand-bgDark" />
                  </div>
                  <div className="bg-white dark:bg-[#1a1e1b] p-3 rounded-2xl rounded-tl-sm border border-gray-100 dark:border-gray-800 shadow-sm text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                    {intentConfig[selectedIntent].response}
                  </div>
                </div>

                {/* Final Actions */}
                <div className="flex flex-col gap-2 ml-10 animate-in fade-in duration-700">
                  <button
                    onClick={() => handleWhatsAppClick(intentConfig[selectedIntent].waText)}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </button>
                  
                  <Link 
                    href="/contact#enquire" 
                    onClick={() => setIsOpen(false)}
                    className="bg-white dark:bg-[#161917] border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium py-2.5 px-4 rounded-xl text-center transition-colors shadow-sm"
                  >
                    Fill enquiry form instead
                  </Link>
                  
                  <button 
                    onClick={() => setSelectedIntent(null)}
                    className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 mt-2 text-center underline underline-offset-2 transition-colors"
                  >
                    Start over
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 z-50 ${
          isOpen ? 'bg-gray-900 dark:bg-gray-800 text-white' : 'bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-bgDark'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};