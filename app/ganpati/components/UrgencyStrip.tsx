"use client";
import { Flame, Sparkles } from "lucide-react";

export function UrgencyStrip() {
  return (
    <div className="w-full bg-[#3a0e0d] border-b border-[#D4AF37]/40 py-2.5 overflow-hidden relative z-50 flex items-center shadow-md">
      
      {/* Inline CSS for the infinite scroll so you don't have to touch tailwind.config.js */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-wrapper {
          display: flex;
          width: fit-content;
          animation: smooth-scroll 25s linear infinite;
        }
        .scrolling-wrapper:hover {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="scrolling-wrapper">
        {/* We map 4 identical blocks to create a flawless infinite loop on any screen size */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-6 min-w-max">
            
            <div className="flex items-center gap-2">
              <Flame size={16} className="text-orange-500 animate-pulse" />
              <p className="text-[#D4AF37] text-xs md:text-sm font-bold tracking-widest uppercase">
                Shubh Muhurat Offer: Only 
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#5C1615] px-2 py-0.5 rounded font-black mx-1.5 text-sm md:text-base shadow-[0_0_12px_rgba(212,175,55,0.6)]">
                  21
                </span> 
                Modaks Left
              </p>
            </div>

            <span className="text-[#D4AF37]/30">|</span>

            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#D4AF37]" />
              <p className="text-white/90 text-xs md:text-sm font-medium tracking-wide">
                Valid exclusively for Premium Panvel Residences
              </p>
            </div>

            <span className="text-[#D4AF37]/30">|</span>

          </div>
        ))}
      </div>
    </div>
  );
}