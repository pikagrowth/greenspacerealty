"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Map, 
  Home, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  ShieldCheck,
  Compass,
  Landmark
} from "lucide-react";

// ==========================================
// DATA CONFIGURATION
// ==========================================
const servicesData = [
  {
    slug: "sole-selling-mandates",
    title: "Sole-Selling Marketing Mandates",
    audience: "B2B Developers",
    icon: Building2,
    image: "/images/projects/shravan-siddhant/hero-residential.webp",
    fullDescription: "We act as a dedicated outsourced sales and marketing arm for top-tier developers. From crafting the initial brand narrative to generating high-intent leads and managing on-site conversions, we take complete ownership of liquidating your inventory.",
    bullets: [
      "Zero marketing overheads and reduced operational stress for builders.",
      "End-to-end site visit conversions handled by trained professionals.",
      "Predictable cash flow mapping for construction milestones."
    ],
    ctaLabel: "View Builder Solutions",
    ctaHref: "/partner-with-us"
  },
  {
    slug: "land-dealing",
    title: "Strategic Land Dealing & NAINA",
    audience: "B2B & B2C Investors",
    icon: Map,
    image: "/images/projects/shravan-siddhant/amenities.jpg",
    fullDescription: "Navigating land acquisition in rapidly developing corridors requires immense local knowledge and legal foresight. We specialize in clear-title CIDCO plots, agricultural land conversions, and high-yield parcels near the upcoming International Airport.",
    bullets: [
      "Comprehensive zoning, FSI calculations, and title due diligence.",
      "Focus on high-appreciation corridors like NAINA and Panvel.",
      "End-to-end assistance with legal documentation and registry."
    ],
    ctaLabel: "Explore Land Options",
    ctaHref: "/projects"
  },
  {
    slug: "resale-and-2nd-homes",
    title: "Premium Resale & Second Homes",
    audience: "B2C Homebuyers",
    icon: Home,
    image: "/images/projects/shravan-siddhant/commercial-spaces.jpg",
    fullDescription: "Finding a home should be an exciting journey, not a legal minefield. We curate a strict, zero-litigation portfolio of ready-to-move apartments, luxury villas, and serene weekend getaways for families seeking quality and peace of mind.",
    bullets: [
      "Rigorous 50-point background checks on all resale properties.",
      "Assistance with stamp duty, registration, and legal compliance.",
      "Expert negotiation to ensure fair market value for buyers."
    ],
    ctaLabel: "Browse Properties",
    ctaHref: "/projects"
  },
  {
    slug: "investment-consultation",
    title: "Real Estate Investment Consultation",
    audience: "B2C Investors",
    icon: LineChart,
    image: "/images/brand/hero-poster.jpeg",
    fullDescription: "Real estate is a science. Our engineering-led advisory team helps high-net-worth individuals and NRI investors build diversified, high-yielding property portfolios based on hard data, infrastructure tracking, and market analytics.",
    bullets: [
      "Data-backed rental yield and capital appreciation analysis.",
      "Portfolio diversification across commercial, residential, and land.",
      "Exclusive access to pre-launch and off-market opportunities."
    ],
    ctaLabel: "Book a Consultation",
    ctaHref: "/contact"
  },
  {
    slug: "home-loans",
    title: "Seamless Home Loan Assistance",
    audience: "B2C Homebuyers & Investors",
    icon: Landmark,
    image: "/images/projects/shravan-siddhant/hero-residential.webp",
    fullDescription: "Securing financing shouldn't be the hardest part of buying a property. Our dedicated financial advisory desk partners with leading national banks to secure the lowest interest rates, fastest approvals, and highest loan-to-value ratios for our clients.",
    bullets: [
      "Strategic partnerships with top-tier banks (HDFC, SBI, ICICI) for preferential rates.",
      "Hassle-free documentation, eligibility optimization, and doorstep service.",
      "Expert guidance on tax benefits, PMAY subsidies, and balance transfers."
    ],
    ctaLabel: "Check Loan Eligibility",
    ctaHref: "/contact"
  }
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300 min-h-screen">
      
      {/* ==========================================
          HERO SECTION
          Fixed Text Contrast: Forced text-white
      ========================================== */}
      <section className="relative w-full py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] overflow-hidden flex items-center justify-center">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/brand/hero-poster.jpeg" 
            alt="Real Estate Services" 
            fill
            className="object-cover opacity-15 grayscale mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/95 via-brand-primary/80 to-brand-primary dark:from-[#0c100e]/95 dark:to-[#0c100e]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-8 backdrop-blur-md transition-colors shadow-lg">
            <Compass className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            Comprehensive <br className="hidden md:block" />
            <span className="text-brand-accent dark:text-brand-accentDark">
              Real Estate Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light drop-shadow">
            From helping families find their dream home to acting as the dedicated sales engine for top-tier developers, our services bridge the gap between supply and demand with complete transparency.
          </p>
        </div>
      </section>

      {/* ==========================================
          SERVICES LIST (Alternating Layout)
      ========================================== */}
      <section className="py-24 bg-white dark:bg-[#111412] transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24 lg:gap-32">
            
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.slug} 
                  id={service.slug}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center scroll-mt-32 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  
                  {/* Image/Visual Side */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group transition-colors">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 dark:bg-black/40 mix-blend-multiply transition-colors"></div>
                      
                      {/* Floating Badge */}
                      <div className={`absolute bottom-6 sm:bottom-8 ${isEven ? 'right-6 sm:right-8' : 'left-6 sm:left-8'} bg-white dark:bg-[#161917] px-6 py-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 transition-colors z-20`}>
                        <div className="w-12 h-12 bg-brand-bg dark:bg-brand-bgDark rounded-xl flex items-center justify-center shrink-0 transition-colors border border-gray-100 dark:border-gray-800">
                          <Icon className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1 transition-colors">Target Audience</div>
                          <div className="font-extrabold text-gray-900 dark:text-white transition-colors">{service.audience}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Background Offset Element */}
                    <div className={`absolute -z-10 top-8 bottom-8 w-full bg-brand-primary/5 dark:bg-brand-primaryDark/10 rounded-3xl ${isEven ? '-right-6' : '-left-6'}`}></div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-primary dark:text-brand-primaryDark mb-4">
                      0{idx + 1} // Service Pillar
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light transition-colors">
                      {service.fullDescription}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start group">
                          <CheckCircle2 size={22} className="text-brand-success dark:text-brand-successDark mr-4 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-base transition-colors leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={service.ctaHref}
                      className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-primary/20 group"
                    >
                      {service.ctaLabel} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              );
            })}
            
          </div>
        </div>
      </section>

      {/* ==========================================
          BOTTOM CTA SECTION
      ========================================== */}
      <section className="py-24 bg-brand-bg dark:bg-brand-bgDark text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-white dark:bg-[#161917] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-10 h-10 text-brand-primary dark:text-brand-primaryDark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Not sure where to start?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Every real estate journey is unique. Let our engineering-led advisory team analyze your requirements and guide you to the right solution based on hard data and specific goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all duration-300 shadow-lg shadow-brand-primary/20"
            >
              Speak to an Advisor
            </Link>
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-white dark:bg-[#161917] border-2 border-brand-primary text-brand-primary dark:text-brand-primaryDark font-bold rounded-xl hover:bg-brand-bg dark:hover:bg-brand-bgDark transition-all duration-300"
            >
              Browse Portfolio
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}