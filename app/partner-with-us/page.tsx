"use client";

import React from "react";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart, 
  ShieldCheck,
  ArrowRight,
  Phone,
  Briefcase
} from "lucide-react";

// CRITICAL FIX: Import the actual BuilderForm component
import { BuilderForm } from "@/components/forms/BuilderForm";

export default function PartnerWithUsPage() {
  const steps = [
    {
      title: "Project Feasibility & Site Visit",
      description: "We analyze your project's location, configuration, and target demographic to set realistic, data-driven sales expectations.",
      icon: <Building2 className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Custom Marketing Strategy",
      description: "We design a high-impact digital and offline marketing plan, positioning your project against local competitors to highlight its unique USPs.",
      icon: <Target className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Aggressive Lead Generation",
      description: "Utilizing our existing database and targeted digital ads, we generate high-intent buyer leads specifically for your inventory.",
      icon: <Users className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Site Operations & Conversion",
      description: "Our trained sales professionals station at your site, conducting tours, handling objections, and closing deals with builder-grade professionalism.",
      icon: <TrendingUp className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Transparent Reporting",
      description: "You receive weekly MIS reports detailing walk-ins, follow-ups, and closures. You maintain complete visibility over the sales pipeline.",
      icon: <BarChart className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    }
  ];

  return (
    <main className="flex flex-col w-full bg-gray-50 dark:bg-brand-bgDark min-h-screen transition-colors duration-300 pb-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/brand/hero-poster.jpeg" 
            alt="Real Estate Development" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-brand-primary/80 to-brand-primary dark:from-[#0c100e]/90 dark:to-[#0c100e]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-8 backdrop-blur-md transition-colors shadow-lg">
            <Briefcase className="w-4 h-4 mr-2" />
            Exclusive B2B Mandates
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            You Build. <br className="hidden md:block" />
            <span className="text-brand-accent dark:text-brand-accentDark">
              We Sell.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light drop-shadow">
            Stop worrying about marketing budgets, dead leads, and unmotivated brokers. Greenspace Realty acts as your dedicated outsourced sales arm, driving volume and protecting your brand equity.
          </p>

          <a 
            href="#builder-form" 
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-bold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            Discuss a Mandate <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* THE SOLE-SELLING ADVANTAGE SECTION */}
      <section className="py-24 bg-white dark:bg-[#111412] border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Copy & Value Props */}
            <div>
              <div className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-primary dark:text-brand-primaryDark mb-4">
                Why Partner With Us
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Sole-Selling Advantage
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
                When you partner with us on a sole-selling mandate, you aren't just hiring a broker—you are integrating a high-performance, data-driven sales engine directly into your project. 
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-200 dark:border-gray-800 group-hover:border-brand-primary transition-colors">
                    <ShieldCheck className="w-7 h-7 text-brand-success dark:text-brand-successDark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Zero Brand Dilution</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Multiple brokers marketing the same property creates price wars and cheapens your brand. We control the narrative and maintain pricing integrity across all channels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gray-200 dark:border-gray-800 group-hover:border-brand-primary transition-colors">
                    <TrendingUp className="w-7 h-7 text-brand-success dark:text-brand-successDark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Predictable Cash Flow</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Our structured marketing funnels ensure a steady stream of highly-qualified site visits, leading to predictable conversions and cash flow for your construction milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: REAL Builder Form Component */}
            <div className="relative lg:mt-4" id="builder-form">
              <div className="absolute inset-0 bg-brand-primary/5 dark:bg-brand-primaryDark/10 transform rotate-3 rounded-3xl -z-10 transition-colors"></div>
              {/* CRITICAL FIX: Calling the real component */}
              <BuilderForm />
            </div>

          </div>
        </div>
      </section>

      {/* OUR PROCESS EXECUTION SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-brand-bgDark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-4 rounded-full bg-white dark:bg-[#161917] text-brand-primary dark:text-brand-primaryDark border border-gray-200 dark:border-gray-800 text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">
              Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              How We Execute a Mandate
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A transparent, aggressive, and systematic approach to liquidating your inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-8 bg-white dark:bg-[#111412] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="text-7xl font-black text-gray-50 dark:text-gray-800/30 absolute top-4 right-4 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  0{idx + 1}
                </div>
                <div className="w-16 h-16 bg-gray-50 dark:bg-[#161917] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 relative z-10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Ready to scale your real estate business?</p>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-[#111412] border-2 border-brand-primary text-brand-primary dark:text-brand-primaryDark font-bold rounded-xl hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary dark:hover:text-white transition-all duration-300 shadow-sm"
            >
              <Phone size={20} className="mr-2" />
              Call Our B2B Team
            </a>
          </div>
          
        </div>
      </section>

    </main>
  );
}