import React from "react";
import { Building2, Target, Users, BarChart3, ArrowDownToLine, Handshake, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepForm } from "@/components/forms/StepForm";

export const metadata = {
  title: "Partner With Us | Sole Selling Mandates",
  description: "Appoint Greenspace Realty as your exclusive sales and marketing partner. We handle lead generation and conversions so builders can focus on construction.",
};

export default function PartnerWithUsPage() {
  const benefits = [
    {
      title: "Zero Marketing Overheads",
      description: "We take over the complete marketing lifecycle. From branding to ad spends, we bear the initial cost of lead generation.",
      icon: <ArrowDownToLine className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Faster Inventory Liquidation",
      description: "Our dedicated sales team and existing database of high-intent buyers ensure your project reaches the right audience immediately.",
      icon: <Target className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Professional Representation",
      description: "We act as your in-house sales team, providing a premium, transparent experience to your buyers that enhances your brand equity.",
      icon: <Handshake className="w-6 h-6 text-brand-primary" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Visit & Analysis",
      description: "We evaluate your project's USPs, target demographic, and competitive pricing in the local micro-market."
    },
    {
      step: "02",
      title: "Marketing Strategy",
      description: "Development of a tailored digital and on-ground marketing plan, completely funded and executed by our team."
    },
    {
      step: "03",
      title: "Lead Generation",
      description: "Deploying targeted campaigns to our verified database and generating fresh, high-intent buyer leads."
    },
    {
      step: "04",
      title: "Site Visits & Conversion",
      description: "Our professional advisory team handles property tours, negotiations, and final sales closures."
    },
    {
      step: "05",
      title: "Transparent Reporting",
      description: "You receive weekly data-driven reports on lead velocity, footfalls, and conversion metrics."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
              <Building2 size={16} /> B2B Builder Partnerships
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              You Build the Future. <br className="hidden md:block" />
              <span className="text-brand-accent">We'll Sell It.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Appoint Greenspace Realty as your exclusive Sole Selling Partner. We take over your entire sales and marketing operation, allowing you to focus 100% on construction and timely delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Appoint Us?" 
            subtitle="Selling real estate today requires more than just putting up a hoarding. It requires a dedicated, data-driven sales engine."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Mandate Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">A structured, accountable approach to liquidating your inventory.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-xl font-bold text-brand-accent mb-6 shadow-lg z-10 border-4 border-gray-900">
                  {step.step}
                </div>
                {/* Connecting Line */}
                {idx !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[50%] w-full h-[2px] bg-brand-primary/30 -z-0"></div>
                )}
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Form Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 relative">
        <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Let's Discuss Your Next Project
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the details of your upcoming or ongoing project. Our B2B partnership team will review your requirements and schedule a site visit to discuss a potential sole-selling mandate.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3" /> Dedicated Account Manager
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3" /> Comprehensive Market Feasibility Report
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mr-3" /> Performance-Based Remuneration
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 w-full">
              {/* Reusing the StepForm - it has a native 'seller-builder' flow built in */}
              <StepForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}