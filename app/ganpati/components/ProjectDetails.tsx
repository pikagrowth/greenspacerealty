import { MapPin, Building2, Gem, Wallet, ArrowUpRight, Coins } from "lucide-react";

export function ProjectDetails() {
  const features = [
    {
      icon: MapPin,
      title: "Prime Location in Panvel",
      desc: "Strategically located with seamless connectivity to upcoming infrastructure and transit hubs.",
    },
    {
      icon: Building2,
      title: "Premium Residences",
      desc: "Meticulously designed 1, 2, 3 BHK & Commercial spaces crafted for a luxurious lifestyle.",
    },
    {
      icon: Gem,
      title: "World-Class Amenities",
      desc: "Elevate your everyday life with state-of-the-art facilities, lush greens, and leisure zones.",
    },
    {
      icon: Wallet,
      title: "80:20 Smart Payment",
      desc: "Highly accessible loan ratios designed to make purchasing your dream home entirely stress-free.",
    },
    {
      icon: ArrowUpRight,
      title: "Zero Floor Rise Charges",
      desc: "Choose your favorite view and preferred floor without paying a single rupee extra.",
    },
    {
      icon: Coins,
      title: "Assured Gold Rewards",
      desc: "Exclusive gold coin bonuses secured on your bookings and successful family referrals.",
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto relative z-10 px-4">
      
      {/* Premium Heading Section */}
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-black text-[#5C1615] font-heading mb-4 drop-shadow-sm">
          The Krivana <span className="text-[#D4AF37]">Advantage</span>
        </h3>
        <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg">
          Experience unmatched luxury, transparent pricing, and a vibrant community built for your future.
        </p>
      </div>

      {/* Grid of Interactive Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute top-[-50%] right-[-50%] w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-colors duration-700 pointer-events-none"></div>
              
              {/* Icon Box */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#5C1615] to-[#8B0000] rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                <Icon className="text-[#D4AF37]" size={32} strokeWidth={1.5} />
              </div>
              
              {/* Text Content */}
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-bold text-[#5C1615] mb-3 leading-tight font-heading">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}