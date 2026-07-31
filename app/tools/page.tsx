import React from "react";
import { Calculator, Wallet, PiggyBank, ArrowDown, Sparkles } from "lucide-react";
import { EMICalculator } from "@/components/tools/EMICalculator";
import { AffordabilityCalculator } from "@/components/tools/AffordabilityCalculator";
import { DownPaymentCalculator } from "@/components/tools/DownPaymentCalculator";

export const metadata = {
  title: "Real Estate Calculators | EMI & Affordability",
  description: "Free real estate financial tools by Greenspace Realty. Calculate your home loan EMI, down payment, and property affordability instantly.",
};

export default function ToolsPage() {
  return (
    <main className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark min-h-screen transition-colors duration-300 pb-24">
      
      {/* ==========================================
          HERO SECTION (Strict Brand Theme)
          Fixed Text Contrast: Forced text-white
      ========================================== */}
      <section className="py-10 lg:py-14 bg-brand-primary dark:bg-[#0c100e] relative overflow-hidden transition-colors duration-300 flex items-center justify-center">
        {/* Subtle Background Pattern & Overlays */}
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-brand-accent/10 blur-[120px] transform rotate-12 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[60%] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent dark:text-brand-accentDark font-bold text-sm mb-8 backdrop-blur-md transition-colors shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Smart Buyer Resources
          </div>

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 mb-8 transition-colors shadow-2xl">
            <Calculator className="w-10 h-10 text-brand-accent transition-colors" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
            Financial Planning <br className="hidden md:block" />
            <span className="text-brand-accent">Tools</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 transition-colors font-light drop-shadow">
            Take the guesswork out of your real estate investment. Use our free, instant calculators to plan your budget, estimate your EMIs, and understand your upfront costs.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#emi" className="px-6 py-4 bg-white/10 hover:bg-brand-accent border border-white/20 hover:border-brand-accent rounded-xl text-white hover:text-brand-primary font-bold transition-all duration-300 flex items-center shadow-lg">
              <Calculator size={18} className="mr-2" /> EMI Calculator
            </a>
            <a href="#affordability" className="px-6 py-4 bg-white/10 hover:bg-brand-accent border border-white/20 hover:border-brand-accent rounded-xl text-white hover:text-brand-primary font-bold transition-all duration-300 flex items-center shadow-lg">
              <Wallet size={18} className="mr-2" /> Affordability
            </a>
            <a href="#down-payment" className="px-6 py-4 bg-white/10 hover:bg-brand-accent border border-white/20 hover:border-brand-accent rounded-xl text-white hover:text-brand-primary font-bold transition-all duration-300 flex items-center shadow-lg">
              <PiggyBank size={18} className="mr-2" /> Down Payment
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          CALCULATORS CONTAINER (Premium Cards)
      ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full space-y-16 pb-12">
        
        <div className="text-center md:hidden mb-4">
          <ArrowDown className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark animate-bounce mx-auto transition-colors bg-white dark:bg-[#111] rounded-full p-1 shadow-md" />
        </div>

        {/* 1. EMI Calculator */}
        <section id="emi" className="scroll-mt-32">
          <div className="bg-white dark:bg-[#111412] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800 transition-colors duration-300 group hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm group-hover:bg-brand-primary/5 transition-colors">
                    <Calculator className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
                    EMI Calculator
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors ml-20 font-light leading-relaxed">
                  Determine your monthly outflow based on your desired loan amount, tenure, and interest rate.
                </p>
              </div>
            </div>
            
            {/* Component Integration Wrapper */}
            <div className="bg-brand-bg dark:bg-[#161917] p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
              <EMICalculator />
            </div>
          </div>
        </section>

        {/* 2. Affordability Calculator */}
        <section id="affordability" className="scroll-mt-32">
          <div className="bg-white dark:bg-[#111412] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800 transition-colors duration-300 group hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm group-hover:bg-brand-primary/5 transition-colors">
                    <Wallet className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
                    Home Affordability
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors ml-20 font-light leading-relaxed">
                  Find out the maximum property budget you can safely target based on your current income and existing obligations.
                </p>
              </div>
            </div>
            
            {/* Component Integration Wrapper */}
            <div className="bg-brand-bg dark:bg-[#161917] p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
              <AffordabilityCalculator />
            </div>
          </div>
        </section>

        {/* 3. Down Payment Planner */}
        <section id="down-payment" className="scroll-mt-32">
          <div className="bg-white dark:bg-[#111412] rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-800 transition-colors duration-300 group hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-16 h-16 bg-gray-50 dark:bg-[#161917] rounded-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm group-hover:bg-brand-primary/5 transition-colors">
                    <PiggyBank className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
                    Down Payment Planner
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors ml-20 font-light leading-relaxed">
                  Calculate the upfront cash required and the exact loan amount needed for a specific property price and stamp duty.
                </p>
              </div>
            </div>
            
            {/* Component Integration Wrapper */}
            <div className="bg-brand-bg dark:bg-[#161917] p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-inner">
              <DownPaymentCalculator />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}