"use client";
import { X, Sparkles, Download, Share2 } from "lucide-react";
import { LeadCaptureForm } from "../form/LeadCaptureForm";

interface OfferModalProps {
  firstOffer: string;
  secondaryOffer: string;
  voucherCode: string; // NEW: Accepting unique code
  modalState: "form" | "voucher";
  onClose: () => void;
  onFormSuccess: () => void;
}

export function OfferModal({ firstOffer, secondaryOffer, voucherCode, modalState, onClose, onFormSuccess }: OfferModalProps) {
  
  const handleWhatsAppShare = () => {
    const text = `Ganpati Bappa Morya! 🙏 I just claimed my Shubh Muhurat voucher at Krivana Panvel:\n\n1️⃣ ${firstOffer}\n2️⃣ ${secondaryOffer}\n🎟️ Code: ${voucherCode}\n\nPlease help me schedule my priority site visit.`;
    
    // UPDATED: Sends directly to your specific number (91 is the country code for India)
    window.open(`https://api.whatsapp.com/send?phone=919022745227&text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 relative border border-[#D4AF37]/50 my-auto" id="printable-popup-voucher">
        
        <div className="bg-gradient-to-br from-[#5C1615] to-[#8B0000] p-6 sm:p-8 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white p-2 transition-colors hide-on-print">
            <X size={24} />
          </button>
          
          {modalState === "form" ? (
            <>
              <div className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#5C1615] px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 shadow-md">
                <Sparkles size={12} /> Bappa's Blessing Unlocked
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#D4AF37] drop-shadow-md leading-tight">{firstOffer}</h2>
            </>
          ) : (
            <>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-2 drop-shadow-md">🎉 VIP Voucher Ready!</h3>
              <p className="text-white/90 text-sm">Your Shubh Muhurat offers are secured.</p>
            </>
          )}
        </div>

        <div className="p-5 sm:p-8 bg-[#FDFBF7]">
          {modalState === "form" ? (
            <>
              <p className="text-center text-gray-700 text-sm sm:text-base mb-6 font-medium leading-relaxed">
                Enter your details to <strong className="text-[#5C1615] font-bold">generate your voucher</strong> and reveal your 2nd surprise gift!
              </p>
              <LeadCaptureForm firstOffer={firstOffer} secondaryOffer={secondaryOffer} onSuccess={onFormSuccess} />
            </>
          ) : (
            <div className="text-center space-y-5">
              <div className="bg-white border-2 border-dashed border-[#D4AF37] rounded-xl p-5 shadow-sm relative">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Your Guaranteed Prizes</p>
                <ul className="space-y-4 mb-5 text-left">
                  <li className="text-base sm:text-lg font-bold text-[#5C1615] flex items-start gap-3 leading-tight">
                    <span className="text-xl">🎁</span> {firstOffer}
                  </li>
                  <li className="text-base sm:text-lg font-bold text-[#5C1615] flex items-start gap-3 leading-tight">
                    <span className="text-xl">🏆</span> {secondaryOffer}
                  </li>
                </ul>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Code: <span className="text-[#5C1615]">{voucherCode}</span>
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm font-medium hide-on-print px-2">
                Share this voucher with our team on WhatsApp to confirm your site visit.
              </p>
              
              <div className="grid grid-cols-2 gap-3 hide-on-print">
                <button onClick={handleWhatsAppShare} className="w-full flex items-center justify-center gap-1.5 bg-[#25D366] text-white font-bold py-3 sm:py-3.5 rounded-xl shadow-md text-sm active:scale-95 transition-transform">
                  <Share2 size={16} /> Send to WA
                </button>
                <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-1.5 bg-gray-800 text-white font-bold py-3 sm:py-3.5 rounded-xl shadow-md text-sm active:scale-95 transition-transform">
                  <Download size={16} /> Save PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * { visibility: hidden; }
          #printable-popup-voucher, #printable-popup-voucher * { visibility: visible; }
          #printable-popup-voucher { position: absolute; left: 0; top: 0; width: 100%; max-width: 100%; box-shadow: none; border: none; margin: 0; }
          .hide-on-print { display: none !important; }
        }
      `}} />
    </div>
  );
}