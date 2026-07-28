import React from "react";
import { Building2, TrendingUp, Users, Target, BarChart, ArrowRight, ShieldCheck } from "lucide-react";
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
      icon: <Building2 className="w-6 h-6 text-brand-primary dark:text-brand-accent" />
    },
    {
      title: "Custom Marketing Strategy",
      description: "We design a high-impact digital and offline marketing plan, positioning your project against local competitors to highlight its unique USPs.",
      icon: <Target className="w-6 h-6 text-brand-primary dark:text-brand-accent" />
    },
    {
      title: "Aggressive Lead Generation",
      description: "Utilizing our existing database and targeted digital ads, we generate high-intent buyer leads specifically for your inventory.",
      icon: <Users className="w-6 h-6 text-brand-primary dark:text-brand-accent" />
    },
    {
      title: "Site Operations & Conversion",
      description: "Our trained sales professionals station at your site, conducting tours, handling objections, and closing deals with builder-grade professionalism.",
      icon: <TrendingUp className="w-6 h-6 text-brand-primary dark:text-brand-accent" />
    },
    {
      title: "Transparent Reporting",
      description: "You receive weekly MIS reports detailing walk-ins, follow-ups, and closures. You maintain complete visibility over the sales pipeline.",
      icon: <BarChart className="w-6 h-6 text-brand-primary dark:text-brand-accent" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-950 pb-24 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/brand/hero-poster.jpg" 
            alt="Real Estate Development" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 to-brand-primary"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-semibold text-sm mb-6 backdrop-blur-sm">
            Exclusive B2B Mandates
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            You Build. We Sell.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Stop worrying about marketing budgets, dead leads, and unmotivated brokers. Greenspace Realty acts as your dedicated outsourced sales arm, driving volume and protecting your brand equity.
          </p>
        </div>
      </section>

      {/* Why Choose Us for Mandates */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Sole-Selling Advantage
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When you partner with us on a sole-selling mandate, you aren't just hiring a broker—you are integrating a high-performance sales engine directly into your project. 
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
                    <ShieldCheck className="w-6 h-6 text-brand-success" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Zero Brand Dilution</h4>
                    <p className="text-gray-600 dark:text-gray-400">Multiple brokers marketing the same property creates price wars and cheapens your brand. We control the narrative and maintain pricing integrity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
                    <TrendingUp className="w-6 h-6 text-brand-success" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Predictable Cash Flow</h4>
                    <p className="text-gray-600 dark:text-gray-400">Our structured marketing funnels ensure a steady stream of site visits, leading to predictable conversions and cash flow for your construction milestones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* The Builder Form */}
            <div className="relative" id="builder-form">
              <div className="absolute inset-0 bg-brand-primary/5 dark:bg-brand-accent/5 transform rotate-3 rounded-3xl -z-10"></div>
              <BuilderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Execution */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="How We Execute a Mandate" 
            subtitle="A transparent, aggressive, and systematic approach to liquidating your inventory."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
                <div className="text-6xl font-black text-gray-100 dark:text-gray-800 absolute top-4 right-6 pointer-events-none group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-6 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm relative z-10">
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