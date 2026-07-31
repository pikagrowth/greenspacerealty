import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Map, 
  ShieldCheck, 
  Scale, 
  Search, 
  FileText, 
  ArrowRight, 
  Landmark, 
  TrendingUp,
  Compass,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

export const metadata = {
  title: "Land Dealing Advisory | Greenspace Realty",
  description: "Strategic land acquisition, rigorous due diligence, and sales across Navi Mumbai and Panvel micro-markets.",
};

// ==========================================
// DATA CONFIGURATION
// ==========================================
const landTypes = [
  {
    title: "CIDCO Transfer Plots",
    description: "Secure, highly-regulated plots within planned nodes like Karanjade and New Panvel, offering excellent infrastructure and guaranteed appreciation.",
    icon: <Map className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Clear Title NA Plots",
    description: "Non-Agricultural plots ready for residential or commercial development. Perfect for builders looking to launch boutique projects.",
    icon: <Landmark className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "NAINA Corridor Land",
    description: "High-potential parcels in the Navi Mumbai Airport Influence Notified Area, designed for long-term investors aiming for massive capital gains.",
    icon: <TrendingUp className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" /> 
  }
];

const processSteps = [
  {
    title: "Preliminary Title Search",
    description: "We trace the ownership history to ensure the land is free from immediate disputes and has a clean, unbroken chain of title spanning decades.",
    icon: <Search className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Zoning & FSI Check",
    description: "Verifying the land's current zoning classification and permissible Floor Space Index (FSI) to ensure it aligns perfectly with your development goals.",
    icon: <FileText className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Ground Survey & Valuation",
    description: "Physical verification of the plot dimensions against official records and an honest market valuation based on recent localized transactions.",
    icon: <Map className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
  },
  {
    title: "Legal Vetting Facilitation",
    description: "While we handle preliminary checks, we assist your legal counsel by organizing all necessary documents for final vetting and transaction closure.",
    icon: <Scale className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
  }
];

export default function LandDealingPage() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300 pb-24">
      
      {/* ==========================================
          HERO SECTION (Premium Brand Theme)
          Fixed Text Contrast: Forced text-white
      ========================================== */}
      <section className="relative w-full py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] overflow-hidden flex items-center justify-center">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/brand/hero-poster.jpeg" 
            alt="Land Dealing Advisory" 
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
            <Compass className="w-4 h-4 mr-2" />
            Specialized Advisory
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            Land is a Distinct Asset Class.<br className="hidden md:block" />
            <span className="text-brand-accent dark:text-brand-accentDark">
              Treat it Like One.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light drop-shadow">
            Navigating zoning laws, title clearances, and valuations in rapidly growing regions like Panvel and NAINA requires deep local expertise. We minimize your risk while maximizing your upside.
          </p>

          <Link 
            href="#due-diligence" 
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-bold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            See Our Process <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ==========================================
          THE LAND WE HANDLE SECTION
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              The Land We Handle
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              From ready-to-develop builder plots to long-term investor parcels, we source and vet premium land across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {landTypes.map((type, idx) => (
              <div key={idx} className="bg-brand-bg dark:bg-[#161917] p-10 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white dark:bg-[#111412] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base transition-colors font-light">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          DUE DILIGENCE PROCESS SECTION
      ========================================== */}
      <section id="due-diligence" className="py-24 bg-brand-bg dark:bg-[#0c100e] transition-colors duration-300 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Sticky Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="w-20 h-20 bg-brand-primary/10 dark:bg-brand-primaryDark/10 rounded-3xl flex items-center justify-center mb-8 border border-brand-primary/20 dark:border-brand-primaryDark/20">
                  <ShieldCheck className="w-10 h-10 text-brand-primary dark:text-brand-primaryDark transition-colors" />
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
                  Rigorous Due Diligence
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 transition-colors font-light">
                  A bad land deal can tie up your capital for years in litigation. We act as your primary filter, aggressively rejecting compromised properties before they ever reach your desk.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-primary/20"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>

            {/* Right Scrolling Column (The Process) */}
            <div className="lg:w-2/3">
              <div className="relative">
                {/* Vertical Connecting Line */}
                <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
                
                <div className="space-y-8 relative z-10">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#111412] p-8 md:p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-6 md:gap-8 transition-all hover:shadow-xl group">
                      
                      <div className="w-16 h-16 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center shrink-0 border border-gray-200 dark:border-gray-700 group-hover:bg-brand-primary/5 dark:group-hover:bg-brand-primaryDark/10 transition-colors z-10">
                        {step.icon}
                      </div>
                      
                      <div>
                        <div className="text-xs font-bold text-brand-primary dark:text-brand-primaryDark uppercase tracking-widest mb-2">Step 0{idx + 1}</div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light transition-colors">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer Alert Box */}
              <div className="mt-12 p-8 bg-brand-accent/10 dark:bg-brand-accentDark/10 border border-brand-accent/20 dark:border-brand-accentDark/20 rounded-3xl flex gap-4 transition-colors">
                <AlertTriangle className="w-6 h-6 text-brand-accent dark:text-brand-accentDark shrink-0 mt-1" />
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Disclaimer:</strong> Greenspace Realty provides preliminary advisory and administrative support. We strongly mandate all clients to engage independent legal counsel for final title search, public notices, and conveyance execution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ==========================================
          BOTTOM CTA SECTION
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] text-center transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-brand-primary/5 dark:bg-[#161917] rounded-full flex items-center justify-center mx-auto mb-8 border border-gray-100 dark:border-gray-800">
            <Map className="w-10 h-10 text-brand-primary dark:text-brand-primaryDark" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 transition-colors tracking-tight">
            Looking to sell your land parcel?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 transition-colors font-light leading-relaxed">
            We have a verified, active database of developers and high-net-worth investors actively looking for clear-title land in Panvel and Navi Mumbai. Let us help you unlock its true market value.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-10 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2"
            >
              List Your Land With Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}