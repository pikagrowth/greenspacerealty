"use client";

import { useState } from "react";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { X, Sparkles } from "lucide-react";

export default function GaneshotsavEvent() {
  const [selectedModak, setSelectedModak] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revealedOffer, setRevealedOffer] = useState<string | null>(null);

  const handleModakClick = (modakId: number) => {
    setSelectedModak(modakId);
    setIsModalOpen(true);
  };

  const handleFormSuccess = (offer: string) => {
    setIsModalOpen(false);
    setRevealedOffer(offer);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center py-20 px-4 relative overflow-hidden">
      {/* Festive Background Accents */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#5C1615]/10 to-transparent pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#5C1615]/10 text-[#5C1615] font-bold text-sm tracking-widest uppercase mb-6">
          Shravan Siddhant Special
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#5C1615] mb-6 leading-tight font-heading">
          The Golden Modak <br/><span className="text-[#D4AF37]">Reveal</span>
        </h1>
        
        {!revealedOffer ? (
          <p className="text-lg text-gray-700 mb-12 max-w-xl mx-auto leading-relaxed">
            Pick a Golden Modak to reveal your exclusive Ganeshotsav blessing for your dream home in Old Panvel.
          </p>
        ) : (
          <div className="animate-in fade-in zoom-in duration-700">
            <p className="text-xl text-gray-700 mb-4">Ganpati Bappa Morya!</p>
            <div className="bg-[#5C1615] border-2 border-[#D4AF37] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <Sparkles className="absolute top-4 right-4 text-[#D4AF37] opacity-50" size={32} />
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37] mb-4">You Won!</h2>
              <p className="text-2xl text-white font-medium">{revealedOffer}</p>
              <p className="mt-8 text-[#D4AF37]/80 text-sm">Your voucher code has been emailed to you. Show it during your site visit!</p>
            </div>
          </div>
        )}

        {/* Modak Selection Area */}
        {!revealedOffer && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 mt-8">
            {[1, 2].map((id) => (
              <button 
                key={id}
                onClick={() => handleModakClick(id)}
                className="group relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-[#D4AF37] flex items-center justify-center"
              >
                {/* Replace src with your actual modak image uploaded to your public folder */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src="/images/golden-modak.png" 
                    alt={`Golden Modak ${id}`}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="absolute -bottom-4 bg-[#5C1615] text-[#D4AF37] px-6 py-2 rounded-full font-bold text-sm shadow-md">
                  Tap to Open
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lead Capture Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-[#5C1615] p-6 relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-extrabold text-[#D4AF37]">Unlock Your Blessing</h3>
              <p className="text-white/80 text-sm mt-1">Enter your details to reveal what's inside the Modak!</p>
            </div>
            <div className="p-6 md:p-8">
              <LeadForm onSuccess={handleFormSuccess} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}