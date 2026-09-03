import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
      
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#5C1615]/10 text-[#5C1615] font-bold text-sm tracking-widest uppercase shadow-sm border border-[#5C1615]/20 backdrop-blur-sm">
        <ShieldCheck size={16} className="text-[#D4AF37]" />
        Krivana Premium Exclusive
      </div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#5C1615] leading-tight font-heading">
        इस गणपति अपनी Property का <br className="hidden md:block"/>
        <span className="text-[#D4AF37] drop-shadow-sm">Discount Builder नहीं,</span> <br className="hidden md:block"/>
        आपकी किस्मत तय करेगी।
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-lg md:text-2xl text-gray-800 font-bold leading-relaxed">
          Panvel's Most Trusted & Transparent Property Event
        </p>
        <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed">
          Tap the Golden Modak below to claim your guaranteed Shubh Muhurat blessing. Secure spot booking discounts, gold coins, and zero floor rise offers—exclusively for our premium 1, 2 & 3 BHK residences.
        </p>
      </div>
    </div>
  );
}