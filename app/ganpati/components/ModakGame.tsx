"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { OfferModal } from "./OfferModal";
import { PRIMARY_FIRST_OFFER, RARE_FIRST_OFFER, SECONDARY_OFFERS } from "../lib/constants";
import { Download, Share2, Sparkles, Ticket } from "lucide-react";

export function ModakGame() {
  const [tappedModak, setTappedModak] = useState<number | null>(null);
  const [modalState, setModalState] = useState<"closed" | "form" | "voucher">("closed");
  const [showGenerateButton, setShowGenerateButton] = useState(false);
  
  const [firstOffer, setFirstOffer] = useState("");
  const [secondaryOffer, setSecondaryOffer] = useState("");
  const [voucherCode, setVoucherCode] = useState(""); // NEW: State for unique code
  const [attempts, setAttempts] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const storedAttempts = parseInt(localStorage.getItem("krivana_modak_attempts") || "0");
    setAttempts(storedAttempts);

    if (localStorage.getItem("krivana_voucher_secured") === "true") {
      setIsCompleted(true);
      setFirstOffer(localStorage.getItem("krivana_offer_1") || PRIMARY_FIRST_OFFER);
      setSecondaryOffer(localStorage.getItem("krivana_offer_2") || SECONDARY_OFFERS[0]);
      // Load saved code or fallback
      setVoucherCode(localStorage.getItem("krivana_voucher_code") || `GANPATI-${Math.floor(10000 + Math.random() * 90000)}`);
    } else {
      const isRare = Math.random() > 0.95;
      setFirstOffer(isRare ? RARE_FIRST_OFFER : PRIMARY_FIRST_OFFER);

      const randomSecond = SECONDARY_OFFERS[Math.floor(Math.random() * SECONDARY_OFFERS.length)];
      setSecondaryOffer(randomSecond);
    }
  }, []);

  const handleModakTap = (id: number) => {
    if (tappedModak !== null || isCompleted) return;

    if (attempts >= 5) {
      alert("Bappa's maximum blessings reached! You have exhausted your 5 attempts.");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    localStorage.setItem("krivana_modak_attempts", newAttempts.toString());

    setTappedModak(id);
    
    setTimeout(() => {
      setShowGenerateButton(true);
    }, 600);

    setTimeout(() => {
      setModalState((current) => current === "closed" ? "form" : current);
    }, 4500);
  };

  const handleManualButtonClick = () => {
    setModalState("form");
  };

  const handleVoucherGeneration = () => {
    // Generate unique code on successful submit
    const newCode = `GANPATI-${Math.floor(10000 + Math.random() * 90000)}`;
    setVoucherCode(newCode);

    localStorage.setItem("krivana_voucher_secured", "true");
    localStorage.setItem("krivana_offer_1", firstOffer);
    localStorage.setItem("krivana_offer_2", secondaryOffer);
    localStorage.setItem("krivana_voucher_code", newCode);
    
    setIsCompleted(true);
    setModalState("closed"); 
  };

  const handleWhatsAppShare = () => {
    const text = `Ganpati Bappa Morya! 🙏 I just claimed my Shubh Muhurat voucher at Krivana Panvel:\n\n1️⃣ ${firstOffer}\n2️⃣ ${secondaryOffer}\n🎟️ Code: ${voucherCode}\n\nPlease help me schedule my priority site visit.`;
    window.open(`https://api.whatsapp.com/send?phone=919022745227&text=${encodeURIComponent(text)}`, "_blank");
  };

  // ==========================================
  // PERMANENT ON-PAGE VOUCHER
  // ==========================================
  if (isCompleted && modalState === "closed") {
    return (
      <div className="w-full px-4 flex justify-center w-full my-8">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-[#D4AF37] text-center animate-in fade-in slide-in-from-bottom-4 relative" id="persistent-voucher">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#5C1615] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles size={14} /> VIP Voucher Secured
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#5C1615] mb-6 leading-tight">Your Shubh Muhurat Offers</h2>
          <div className="space-y-4 mb-8 text-left bg-[#FDFBF7] p-5 rounded-xl border border-gray-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">🎁</span>
              <p className="font-bold text-gray-800 text-lg leading-tight">{firstOffer}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">🏆</span>
              <p className="font-bold text-gray-800 text-lg leading-tight">{secondaryOffer}</p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-200 text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Code: <span className="text-[#5C1615] text-sm ml-1">{voucherCode}</span>
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm font-medium mb-6 hide-on-print">
            Share this voucher with our team on WhatsApp to confirm your site visit.
          </p>
          <div className="grid grid-cols-2 gap-3 hide-on-print">
            <button onClick={handleWhatsAppShare} className="w-full flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-md active:scale-95 transition-transform text-sm md:text-base">
              <Share2 size={16} /> Send to WA
            </button>
            <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-1.5 bg-gray-800 text-white font-bold py-3.5 rounded-xl shadow-md active:scale-95 transition-transform text-sm md:text-base">
              <Download size={16} /> Save PDF
            </button>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body * { visibility: hidden; }
            #persistent-voucher, #persistent-voucher * { visibility: visible; }
            #persistent-voucher { position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 100%; max-width: 600px; box-shadow: none; border: 2px solid #D4AF37; margin-top: 20px; }
            .hide-on-print { display: none !important; }
          }
        `}} />
      </div>
    );
  }

  // ==========================================
  // GAME UI WITH GENERATE BUTTON
  // ==========================================
  return (
    <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12 w-full">
      <div className="text-center h-12 flex items-center justify-center">
        {tappedModak === null ? (
          <p className="text-sm md:text-lg font-bold text-[#5C1615] bg-[#D4AF37]/20 px-5 py-2 rounded-full border border-[#D4AF37] animate-pulse shadow-sm">
            Tap a Modak to reveal your guaranteed gift!
          </p>
        ) : (
          <p className="text-sm md:text-lg font-bold text-green-800 bg-green-100 px-5 py-2 rounded-full border border-green-400 animate-in fade-in">
            Gift Unlocked!
          </p>
        )}
      </div>

      <div className="flex flex-row gap-6 md:gap-16 justify-center w-full px-4">
        {[1, 2].map((id) => {
          const isThisModakTapped = tappedModak === id;
          const isAnotherModakTapped = tappedModak !== null && tappedModak !== id;

          return (
            <button 
              key={id}
              onClick={() => handleModakTap(id)}
              disabled={tappedModak !== null}
              className={`group relative w-36 h-36 md:w-56 md:h-56 rounded-full shadow-xl transition-all duration-700 border-4 flex items-center justify-center flex-shrink-0
                ${isThisModakTapped ? 'bg-[#FDFBF7] border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.6)] scale-110' : 'bg-white border-transparent'}
                ${tappedModak === null ? 'hover:border-[#D4AF37] active:scale-95 cursor-pointer' : ''}
                ${isAnotherModakTapped ? 'opacity-30 grayscale-[70%] scale-90' : ''}
              `}
            >
              {!isThisModakTapped ? (
                <>
                  <div className={`absolute inset-0 rounded-full bg-[#D4AF37]/10 ${tappedModak === null ? 'animate-ping duration-1000' : ''}`}></div>
                  <div className="relative w-24 h-24 md:w-40 md:h-40 transition-transform duration-500 group-hover:scale-110">
                    <Image src="/modak.png" alt="Golden Modak" fill className="object-contain drop-shadow-lg" priority />
                  </div>
                </>
              ) : (
                <div className="text-center p-2 animate-in fade-in zoom-in duration-500">
                  <span className="text-3xl md:text-5xl mb-2 block animate-bounce">🎉</span>
                  <p className="font-extrabold text-[#5C1615] text-sm md:text-lg leading-tight px-1">
                    {firstOffer}
                  </p>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="h-16 flex items-center justify-center w-full max-w-xs">
        {showGenerateButton && !isCompleted && (
          <button 
            onClick={handleManualButtonClick}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5C1615] to-[#7a1d1c] text-[#D4AF37] font-bold text-lg py-4 rounded-xl shadow-xl hover:-translate-y-1 transition-all animate-in fade-in slide-in-from-bottom-4 active:scale-95 border border-[#D4AF37]/50"
          >
            <Ticket size={20} />
            Generate My Voucher
          </button>
        )}
      </div>

      <p className="text-xs text-gray-400 font-medium -mt-4">Attempts remaining: {5 - attempts}</p>

      {modalState !== "closed" && (
        <OfferModal 
          firstOffer={firstOffer}
          secondaryOffer={secondaryOffer}
          voucherCode={voucherCode} // Passed down to modal
          modalState={modalState}
          onClose={() => setModalState("closed")} 
          onFormSuccess={handleVoucherGeneration} 
        />
      )}
    </div>
  );
}