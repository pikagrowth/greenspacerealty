// app/tools/page.tsx
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
    <div className="flex flex-col w-full bg-gray-50 dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 mb-6 transition-colors">
            <Calculator className="w-8 h-8 text-brand-accent dark:text-brand-accentDark transition-colors" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-colors">
            Financial Planning Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 transition-colors">
            Take the guesswork out of your real estate investment. Use our free, instant calculators to plan your budget, estimate your EMIs, and understand your upfront costs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#emi" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 rounded-full text-sm font-medium transition-colors flex items-center">
              <Calculator size={16} className="mr-2" /> EMI
            </a>
            <a href="#affordability" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 rounded-full text-sm font-medium transition-colors flex items-center">
              <Wallet size={16} className="mr-2" /> Affordability
            </a>
            <a href="#down-payment" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 rounded-full text-sm font-medium transition-colors flex items-center">
              <PiggyBank size={16} className="mr-2" /> Down Payment
            </a>
          </div>
        </div>
      </section>

      {/* Calculators Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full space-y-16">
        
        <div className="text-center md:hidden mb-8">
          <ArrowDown className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark animate-bounce mx-auto transition-colors" />
        </div>

        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">1. EMI Calculator</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Determine your monthly outflow based on your desired loan amount and interest rate.</p>
          </div>
          <EMICalculator />
        </section>

        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">2. Home Affordability Calculator</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Find out the maximum property budget you can safely target based on your current income and obligations.</p>
          </div>
          <AffordabilityCalculator />
        </section>

        <section>
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">3. Down Payment Planner</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">Calculate the upfront cash required and the exact loan amount needed for a specific property price.</p>
          </div>
          <DownPaymentCalculator />
        </section>

      </div>
    </div>
  );
}