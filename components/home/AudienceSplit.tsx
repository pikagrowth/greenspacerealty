"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Building2, Home, ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudienceSplit() {
  const router = useRouter();

  return (
    <section className="py-24 bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Tailored Real Estate Solutions"
          subtitle="Whether you are building a portfolio or building a skyscraper, we have a dedicated framework to accelerate your success."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* B2C Card - Premium Light/Dark Theme */}
          <div className="bg-white dark:bg-[#111412] rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
            {/* Decorative Corner Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-success/5 dark:bg-brand-successDark/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="w-16 h-16 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center mb-8 border border-gray-100 dark:border-gray-800 shadow-sm relative z-10 transition-colors">
              <Home className="w-8 h-8 text-brand-success dark:text-brand-successDark transition-colors" />
            </div>
            
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 relative z-10 transition-colors tracking-tight">
              For Home Buyers & Investors
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-1 relative z-10 transition-colors font-light text-lg">
              Skip the clutter. Access a curated portfolio of verified resale homes, premium weekend getaways, and high-yield land parcels in Navi Mumbai's fastest-growing micro-markets.
            </p>
            
            <ul className="space-y-4 mb-10 w-full relative z-10">
              <li className="flex items-center text-base text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <ShieldCheck size={22} className="text-brand-success dark:text-brand-successDark mr-4 shrink-0" /> 
                100% Clear Titles & RERA Verified
              </li>
              <li className="flex items-center text-base text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <TrendingUp size={22} className="text-brand-success dark:text-brand-successDark mr-4 shrink-0" /> 
                High-Growth Corridor Strategy
              </li>
            </ul>
            
            <Button 
              onClick={() => router.push('/projects')} 
              className="w-full py-4 bg-brand-bg dark:bg-[#161917] text-brand-primary dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-all duration-300 shadow-sm relative z-10"
            >
              View Premium Listings
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* B2B Card - Strict Brand Primary Theme */}
          <div className="bg-brand-primary dark:bg-[#0c100e] rounded-3xl p-8 md:p-12 shadow-2xl border border-brand-primary/50 dark:border-gray-800 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-brand-primary/20 relative overflow-hidden group">
            {/* Decorative Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-brand-accent/5 rounded-bl-[100px] pointer-events-none blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
            
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 relative z-10 transition-colors">
              <Building2 className="w-8 h-8 text-brand-accent dark:text-brand-accentDark transition-colors" />
            </div>
            
            {/* Forced text-white for contrast against dark brand-primary */}
            <h3 className="text-3xl font-extrabold text-white mb-4 relative z-10 tracking-tight">
              For Builders & Developers
            </h3>
            
            <p className="text-gray-200 dark:text-gray-400 mb-8 leading-relaxed flex-1 relative z-10 transition-colors font-light text-lg">
              Stop worrying about unsold inventory. Appoint Greenspace Realty as your sole selling mandate. We engineer the entire marketing funnel and site-visit conversion process so you can focus entirely on construction.
            </p>
            
            <ul className="space-y-4 mb-10 w-full relative z-10">
              <li className="flex items-center text-base text-white font-medium transition-colors">
                <TrendingUp size={22} className="text-brand-accent dark:text-brand-accentDark mr-4 shrink-0" /> 
                Accelerated Inventory Liquidation
              </li>
              <li className="flex items-center text-base text-white font-medium transition-colors">
                <ShieldCheck size={22} className="text-brand-accent dark:text-brand-accentDark mr-4 shrink-0" /> 
                End-to-End Sales Pipeline Management
              </li>
            </ul>
            
            <Button 
              onClick={() => router.push('/partner-with-us')} 
              className="w-full py-4 bg-brand-accent hover:bg-white text-brand-primary font-extrabold rounded-xl transition-all duration-300 shadow-lg relative z-10"
            >
              Request a Mandate Proposal
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}