// app/services/land-dealing/page.tsx
import React from "react";
import Link from "next/link";
import { Map, ShieldCheck, Scale, Search, FileText, ArrowRight, Landmark, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Land Dealing Advisory | Greenspace Realty",
  description: "Strategic land acquisition, rigorous due diligence, and sales across Navi Mumbai and Panvel micro-markets.",
};

export default function LandDealingPage() {
  const landTypes = [
    {
      title: "CIDCO Transfer Plots",
      description: "Secure, highly-regulated plots within planned nodes like Karanjade and New Panvel, offering excellent infrastructure and guaranteed appreciation.",
      icon: <Map className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Clear Title NA Plots",
      description: "Non-Agricultural plots ready for residential or commercial development. Perfect for builders looking to launch boutique projects.",
      icon: <Landmark className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "NAINA Corridor Land",
      description: "High-potential parcels in the Navi Mumbai Airport Influence Notified Area, designed for long-term investors aiming for massive capital gains.",
      icon: <TrendingUp className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" /> 
    }
  ];

  const processSteps = [
    {
      title: "Preliminary Title Search",
      description: "We trace the ownership history to ensure the land is free from immediate disputes and has a clean, unbroken chain of title.",
      icon: <Search className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    },
    {
      title: "Zoning & FSI Check",
      description: "Verifying the land's current zoning classification and permissible Floor Space Index (FSI) to ensure it aligns with your development goals.",
      icon: <FileText className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    },
    {
      title: "Ground Survey & Valuation",
      description: "Physical verification of the plot dimensions against official records and an honest market valuation based on recent localized transactions.",
      icon: <Map className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    },
    {
      title: "Legal Vetting Facilitation",
      description: "While we handle preliminary checks, we assist your legal counsel by organizing all necessary documents for final vetting and transaction closure.",
      icon: <Scale className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-sm font-medium mb-6 backdrop-blur-sm transition-colors">
              <Map size={16} /> Specialized Advisory
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-colors">
              Land is a Distinct Asset Class. Treat it Like One.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 leading-relaxed transition-colors">
              Navigating zoning laws, title clearances, and valuations in rapidly growing regions like Panvel and NAINA requires deep local expertise. We minimize your risk while maximizing your upside.
            </p>
          </div>
        </div>
      </section>

      {/* Why Land Section / Types */}
      <section className="py-24 bg-white dark:bg-[#161917] border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="The Land We Handle" 
            subtitle="From ready-to-develop builder plots to long-term investor parcels, we source and vet premium land across the region."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {landTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-[#111412] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-white dark:bg-[#1a1e1b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-6 transition-colors">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence Process */}
      <section className="py-24 bg-gray-50 dark:bg-brand-bgDark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <ShieldCheck className="w-12 h-12 text-brand-primary dark:text-brand-primaryDark mb-6 transition-colors" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Rigorous Due Diligence</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors">
                  A bad land deal can tie up your capital for years in litigation. We act as your primary filter, aggressively rejecting compromised properties before they ever reach your desk.
                </p>
                <Link href="/contact#enquire">
                  <Button className="w-full sm:w-auto shadow-md">
                    Discuss a Land Requirement
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="space-y-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#161917] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex gap-6 transition-colors">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-[#111412] rounded-full flex items-center justify-center shrink-0 border border-gray-200 dark:border-gray-700 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">{step.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-brand-primary/5 dark:bg-brand-primaryDark/10 border border-brand-primary/20 dark:border-brand-primaryDark/20 rounded-2xl text-sm text-gray-700 dark:text-gray-300 italic transition-colors">
                <strong>Disclaimer:</strong> Greenspace Realty provides preliminary advisory and administrative support. We strongly mandate all clients to engage independent legal counsel for final title search and conveyance execution.
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA Bottom */}
      <section className="py-20 bg-white dark:bg-[#161917] text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Looking to sell your land parcel?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 transition-colors">
            We have a verified database of developers and high-net-worth investors actively looking for clear-title land in Panvel and Navi Mumbai. Let us help you unlock its true market value.
          </p>
          <Link href="/contact#enquire">
            <Button variant="outline" className="px-10 py-4 h-auto text-base dark:bg-[#111412] dark:border-gray-800">
              List Your Land With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}