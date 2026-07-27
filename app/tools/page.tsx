import React from "react";
import { Calculator, Wallet, PiggyBank, ArrowDown } from "lucide-react";
import { EMICalculator } from "@/components/tools/EMICalculator";
import { AffordabilityCalculator } from "@/components/tools/AffordabilityCalculator";
import { DownPaymentCalculator } from "@/components/tools/DownPaymentCalculator";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Real Estate Calculators | EMI & Affordability",
  description: "Free real estate financial tools by Greenspace Realty. Calculate your home loan EMI, down payment, and property affordability instantly.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col w-full bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Calculator className="w-8 h-8 text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Financial Planning Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Take the guesswork out of your real estate investment. Use our free, instant calculators to plan your budget, estimate your EMIs, and understand your upfront costs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#emi" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors flex items-center">
              <Calculator size={16} className="mr-2" /> EMI
            </a>
            <a href="#affordability" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors flex items-center">
              <Wallet size={16} className="mr-2" /> Affordability
            </a>
            <a href="#down-payment" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors flex items-center">
              <PiggyBank size={16} className="mr-2" /> Down Payment
            </a>
          </div>
        </div>
      </section>

      {/* Calculators Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full space-y-16">
        
        <div className="text-center md:hidden mb-8">
          <ArrowDown className="w-6 h-6 text-brand-primary animate-bounce mx-auto" />
        </div>

        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">1. EMI Calculator</h2>
            <p className="text-gray-600">Determine your monthly outflow based on your desired loan amount and interest rate.</p>
          </div>
          <EMICalculator />
        </section>

        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">2. Home Affordability Calculator</h2>
            <p className="text-gray-600">Find out the maximum property budget you can safely target based on your current income and obligations.</p>
          </div>
          <AffordabilityCalculator />
        </section>

        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">3. Down Payment Planner</h2>
            <p className="text-gray-600">Calculate the upfront cash required and the exact loan amount needed for a specific property price.</p>
          </div>
          <DownPaymentCalculator />
        </section>

      </div>
    </div>
  );
}