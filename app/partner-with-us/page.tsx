// app/partner-with-us/page.tsx
import React from "react";
import { Building2, TrendingUp, Users, Target, BarChart, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BuilderForm } from "@/components/forms/BuilderForm";

export const metadata = {
  title: "Partner With Us | Sole Selling Mandates",
  description: "Greenspace Realty partners with developers in Panvel and Navi Mumbai to take over the complete marketing and sales lifecycle for maximum ROI.",
};

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
    <div className="flex flex-col w-full bg-white dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="py-24 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/brand/hero-poster.jpeg" 
            alt="Real Estate Development" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 to-brand-primary dark:from-[#0c100e]/80 dark:to-[#0c100e]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent dark:text-brand-accentDark font-semibold text-sm mb-6 backdrop-blur-sm transition-colors">
            Exclusive B2B Mandates
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight transition-colors">
            You Build. We Sell.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            Stop worrying about marketing budgets, dead leads, and unmotivated brokers. Greenspace Realty acts as your dedicated outsourced sales arm, driving volume and protecting your brand equity.
          </p>
        </div>
      </section>

      {/* Why Choose Us for Mandates */}
      <section className="py-24 bg-gray-50 dark:bg-[#111412] border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                The Sole-Selling Advantage
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
                When you partner with us on a sole-selling mandate, you aren't just hiring a broker—you are integrating a high-performance sales engine directly into your project. 
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-[#161917] rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-brand-success dark:text-brand-successDark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Zero Brand Dilution</h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">Multiple brokers marketing the same property creates price wars and cheapens your brand. We control the narrative and maintain pricing integrity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-[#161917] rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
                    <TrendingUp className="w-6 h-6 text-brand-success dark:text-brand-successDark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Predictable Cash Flow</h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">Our structured marketing funnels ensure a steady stream of site visits, leading to predictable conversions and cash flow for your construction milestones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* The Builder Form */}
            <div className="relative" id="builder-form">
              <div className="absolute inset-0 bg-brand-primary/5 dark:bg-brand-primaryDark/10 transform rotate-3 rounded-3xl -z-10 transition-colors"></div>
              <BuilderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Execution */}
      <section className="py-24 bg-white dark:bg-[#161917] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How We Execute a Mandate" 
            subtitle="A transparent, aggressive, and systematic approach to liquidating your inventory."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-8 bg-gray-50 dark:bg-[#111412] rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all group">
                <div className="text-6xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-6 pointer-events-none group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <div className="w-14 h-14 bg-white dark:bg-[#1a1e1b] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6 relative z-10 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10 transition-colors">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}