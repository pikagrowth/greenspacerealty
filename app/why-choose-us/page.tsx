import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  MapPin, 
  Handshake, 
  Eye, 
  Briefcase, 
  ArrowRight, 
  Star,
  Award,
  Quote,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Why Choose Us | Greenspace Realty",
  description: "Discover why Greenspace Realty is Panvel and Navi Mumbai's most trusted real estate advisory and marketing partner.",
};

// ==========================================
// INLINED DATA (For standalone premium UI)
// ==========================================
const pillars = [
  {
    title: "Local Market Expertise",
    description: "Deep, boots-on-the-ground knowledge of Old Panvel, Karanjade, NAINA, and the broader Navi Mumbai corridors. We don't just sell properties; we sell the micro-market's future potential.",
    icon: <MapPin className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Verified & Transparent",
    description: "Every single property we list—whether a resale flat or a land parcel—goes through strict background checks for clear titles, RERA compliance, and fair market valuation.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "End-to-End Support",
    description: "From the initial site visit to loan approvals, legal vetting facilitation, and final registration, we hold your hand throughout the entire transaction lifecycle.",
    icon: <Handshake className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Zero Hidden Costs",
    description: "What we quote is what you pay. We pride ourselves on absolute financial transparency before you commit, completely eliminating last-minute surprises or hidden brokerage fees.",
    icon: <Eye className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Builder-Grade Professionalism",
    description: "Developers trust us with their sole-selling mandates because we act as a disciplined, high-conversion sales engine that protects and enhances their brand equity in the market.",
    icon: <Briefcase className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Data-Driven Decisions",
    description: "Led by engineers and academicians, we remove emotion from the investment equation. We rely on infrastructure tracking, yield analysis, and ROI metrics to guide your purchase.",
    icon: <CheckCircle2 className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  }
];

const testimonialsData = [
  {
    name: "Rajesh Desai",
    role: "Property Investor",
    quote: "Greenspace Realty changed my perception of real estate agents. Their engineering-grade diligence ensured my land acquisition in NAINA was completely secure. Absolute transparency from day one.",
    rating: 5,
    initial: "R"
  },
  {
    name: "Amit & Priya Sharma",
    role: "First-Time Homebuyers",
    quote: "We were overwhelmed by the home buying process, but Subhash and the team made it seamless. From helping us secure the loan to the final registration, they were there at every step.",
    rating: 5,
    initial: "A"
  },
  {
    name: "Apex Developers",
    role: "B2B Partner",
    quote: "Handing over our sole-selling mandate to Greenspace was the best decision. They took over the entire marketing lifecycle, allowing us to focus purely on construction. The cash flow is incredibly predictable.",
    rating: 5,
    initial: "D"
  }
];

export default function WhyChooseUsPage() {
  return (
    <main className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300 min-h-screen pb-24">
      
      {/* ==========================================
          HERO SECTION (Premium Brand Theme)
          Fixed Text Contrast: Forced text-white
      ========================================== */}
      <section className="relative w-full py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] overflow-hidden flex items-center justify-center">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/brand/hero-poster.jpeg" 
            alt="Real Estate Trust & Value" 
            fill
            className="object-cover opacity-15 grayscale mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/95 via-brand-primary/80 to-brand-primary dark:from-[#0c100e]/95 dark:to-[#0c100e]"></div>
        </div>

        {/* Subtle Accents */}
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-8 backdrop-blur-md transition-colors shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            The Greenspace Standard
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            Building Trust,<br className="hidden md:block" />
            <span className="text-brand-accent dark:text-brand-accentDark">
              Creating Value.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-0 font-light drop-shadow">
            In a market crowded with transactional brokers, we stand apart as a dedicated advisory and marketing agency. Here is why buyers, investors, and builders consistently choose Greenspace Realty.
          </p>
        </div>
      </section>

      {/* ==========================================
          TRUST PILLARS SECTION
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 dark:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark border border-brand-primary/20 dark:border-brand-primaryDark/30 text-sm font-bold tracking-widest mb-4 uppercase">
              Our Core Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              The Foundation of Our Practice
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              The fundamental principles that guide every property consultation, land acquisition, and exclusive marketing mandate we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-brand-bg dark:bg-[#161917] p-10 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-white dark:bg-[#111412] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base transition-colors font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          FULL TESTIMONIALS GRID
      ========================================== */}
      <section className="py-24 bg-brand-bg dark:bg-[#0c100e] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-4 rounded-full bg-white dark:bg-[#161917] text-brand-primary dark:text-brand-primaryDark border border-gray-200 dark:border-gray-800 text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">
                Client Success
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                Don't just take our word for it. Hear directly from the families and businesses we've partnered with across Navi Mumbai.
              </p>
            </div>
            
            <Link 
              href="/projects" 
              className="inline-flex items-center font-bold text-brand-primary dark:text-brand-primaryDark hover:text-brand-accent transition-colors pb-2"
            >
              View Our Portfolio <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#111412] rounded-3xl p-10 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
              >
                {/* Decorative background quote icon */}
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-gray-50 dark:text-gray-900/30 -z-0 rotate-12 transition-transform group-hover:scale-110" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-accent dark:fill-brand-accentDark text-brand-accent dark:text-brand-accentDark transition-colors" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-10 flex-1 font-light italic transition-colors">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto flex items-center gap-4 transition-colors">
                    <div className="w-14 h-14 bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-bgDark rounded-2xl flex items-center justify-center font-extrabold text-xl transition-colors shadow-sm">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-extrabold text-gray-900 dark:text-white transition-colors">{testimonial.name}</div>
                      <div className="text-xs font-bold text-brand-primary dark:text-brand-primaryDark uppercase tracking-widest mt-1 transition-colors">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          CTA SECTION
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] border-t border-gray-200 dark:border-gray-800 text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-brand-bg dark:bg-[#161917] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-brand-primary dark:text-brand-primaryDark" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Experience the Difference
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
            Ready to make a secure, transparent real estate decision? Let our highly educated experts guide you through the process.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
            >
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}