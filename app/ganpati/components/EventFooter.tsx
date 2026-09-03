import { PhoneCall } from "lucide-react";

export function EventFooter() {
  return (
    <footer className="w-full bg-[#5C1615] text-[#FDFBF7]/60 py-10 text-center mt-24 relative z-10">
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
      
      {/* Contact & Support Section */}
      <div className="mb-10 flex flex-col items-center justify-center space-y-3">
        <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
          Need Help or Have Questions?
        </p>
        <a 
          href="tel:+919209278867" 
          className="inline-flex items-center gap-2.5 bg-black/20 hover:bg-black/40 border border-[#D4AF37]/30 px-6 py-3 rounded-full text-white font-bold text-lg md:text-xl transition-all shadow-md active:scale-95"
        >
          <PhoneCall size={20} className="text-[#D4AF37]" />
          +91 9209278867
        </a>
      </div>

      <h4 className="text-xl font-bold text-[#D4AF37] tracking-widest uppercase mb-4">
        Krivana
      </h4>
      
      <p className="text-sm font-medium mb-6 text-white/80">
        Powered by <strong className="text-white">Greenspace Realty</strong>
      </p>

      <p className="text-xs max-w-2xl mx-auto px-4 opacity-60 leading-relaxed font-light">
        © {new Date().getFullYear()} Krivana. All Rights Reserved. 
        Offers are subject to terms and conditions. The spot booking discount and other offers are mutually exclusive and applicable only on select Panvel properties during the Ganeshotsav event period. Please consult with our sales team for exact details upon site visit.
      </p>
    </footer>
  );
}