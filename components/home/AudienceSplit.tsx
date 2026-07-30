// components/home/AudienceSplit.tsx
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* B2C Card */}
          <div className="bg-white dark:bg-[#161917] rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col items-start transition-all hover:-translate-y-1 duration-300 group">
            <div className="w-16 h-16 bg-brand-success/10 dark:bg-brand-successDark/20 rounded-2xl flex items-center justify-center mb-8 transition-colors">
              <Home className="w-8 h-8 text-brand-success dark:text-brand-successDark transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              For Home Buyers & Investors
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-1 transition-colors">
              Skip the clutter. Access a curated portfolio of verified resale homes, premium weekend getaways, and high-yield land parcels in Navi Mumbai's fastest-growing micro-markets.
            </p>
            <ul className="space-y-4 mb-10 w-full">
              <li className="flex items-center text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <ShieldCheck size={20} className="text-brand-success dark:text-brand-successDark mr-3 shrink-0" /> 
                100% Clear Titles & RERA Verified
              </li>
              <li className="flex items-center text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">
                <TrendingUp size={20} className="text-brand-success dark:text-brand-successDark mr-3 shrink-0" /> 
                High-Growth Corridor Strategy
              </li>
            </ul>
            <Button onClick={() => router.push('/projects')} variant="outline" className="w-full sm:w-auto">
              View Premium Listings
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* B2B Card */}
          <div className="bg-brand-primary dark:bg-[#0c100e] rounded-3xl p-8 md:p-12 shadow-xl border border-brand-primary/50 dark:border-brand-primaryDark/30 flex flex-col items-start transition-all hover:-translate-y-1 duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-brand-primaryDark/10 rounded-full -mr-20 -mt-20 pointer-events-none blur-3xl transition-colors"></div>
            
            <div className="w-16 h-16 bg-white/10 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20 dark:border-white/10 relative z-10 transition-colors">
              <Building2 className="w-8 h-8 text-brand-accent dark:text-brand-accentDark transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              For Builders & Developers
            </h3>
            <p className="text-gray-200 dark:text-gray-400 mb-8 leading-relaxed flex-1 relative z-10 transition-colors">
              Stop worrying about unsold inventory. Appoint Greenspace Realty as your sole selling mandate. We engineer the entire marketing funnel and site-visit conversion process so you can focus entirely on construction.
            </p>
            <ul className="space-y-4 mb-10 w-full relative z-10">
              <li className="flex items-center text-sm text-gray-100 dark:text-gray-300 font-medium transition-colors">
                <TrendingUp size={20} className="text-brand-accent dark:text-brand-accentDark mr-3 shrink-0 transition-colors" /> 
                Accelerated Inventory Liquidation
              </li>
              <li className="flex items-center text-sm text-gray-100 dark:text-gray-300 font-medium transition-colors">
                <ShieldCheck size={20} className="text-brand-accent dark:text-brand-accentDark mr-3 shrink-0 transition-colors" /> 
                End-to-End Sales Pipeline Management
              </li>
            </ul>
            <Button onClick={() => router.push('/partner-with-us')} className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent/90 text-brand-primary dark:bg-brand-accentDark dark:hover:bg-brand-accentDark/90 border-none relative z-10">
              Request a Mandate Proposal
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}