"use client";

import React from "react";
import Link from "next/link";
import { Calculator, Wallet, PiggyBank, ArrowRight, Settings2 } from "lucide-react";

export function ToolsTeaser() {
  const tools = [
    {
      title: "EMI Calculator",
      description: "Quickly estimate your monthly home loan EMIs based on amount, tenure, and interest rate.",
      icon: <Calculator className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark transition-colors group-hover:text-white" />,
      href: "/tools#emi"
    },
    {
      title: "Home Affordability",
      description: "Find out exactly how much house you can afford based on your current income and existing obligations.",
      icon: <Wallet className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark transition-colors group-hover:text-white" />,
      href: "/tools#affordability"
    },
    {
      title: "Down Payment Planner",
      description: "Calculate your upfront costs and determine the exact loan amount needed for your target property.",
      icon: <PiggyBank className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark transition-colors group-hover:text-white" />,
      href: "/tools#down-payment"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161917] border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-brand-bg dark:bg-[#111412] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center mx-auto mb-8">
            <Settings2 className="w-10 h-10 text-brand-accent dark:text-brand-accentDark" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Plan With Confidence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Free, instant financial calculators to help you make informed real estate decisions. No signup required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <Link 
              key={idx} 
              href={tool.href}
              className="group block p-10 rounded-[2rem] bg-gray-50 dark:bg-[#111412] border border-gray-100 dark:border-gray-800 hover:bg-brand-primary dark:hover:bg-brand-primaryDark hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white dark:bg-[#161917] group-hover:bg-white/20 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex items-center justify-center mb-8 transition-colors duration-500">
                  {tool.icon}
                </div>
                
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-white mb-4 transition-colors tracking-tight">
                  {tool.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200 mb-10 leading-relaxed font-light transition-colors text-lg">
                  {tool.description}
                </p>
                
                <div className="inline-flex items-center text-sm font-bold text-brand-primary dark:text-brand-primaryDark group-hover:text-brand-accent transition-colors">
                  Try Calculator
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}