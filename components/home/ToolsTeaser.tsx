// components/home/ToolsTeaser.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Calculator, Wallet, PiggyBank, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ToolsTeaser() {
  const tools = [
    {
      title: "EMI Calculator",
      description: "Quickly estimate your monthly home loan EMIs based on amount, tenure, and interest rate.",
      icon: <Calculator className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-colors" />,
      href: "/tools#emi"
    },
    {
      title: "Home Affordability",
      description: "Find out exactly how much house you can afford based on your current income and existing obligations.",
      icon: <Wallet className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-colors" />,
      href: "/tools#affordability"
    },
    {
      title: "Down Payment Planner",
      description: "Calculate your upfront costs and determine the exact loan amount needed for your target property.",
      icon: <PiggyBank className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-colors" />,
      href: "/tools#down-payment"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#161917] border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Plan With Confidence" 
          subtitle="Free, instant financial calculators to help you make informed real estate decisions. No signup required."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, idx) => (
            <Link 
              key={idx} 
              href={tool.href}
              className="group block p-8 rounded-2xl bg-gray-50 dark:bg-[#111412] border border-transparent hover:bg-brand-primary dark:hover:bg-brand-primaryDark hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white dark:bg-[#1a1e1b] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-brand-bgDark mb-3 transition-colors">
                {tool.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-[#161917] mb-8 leading-relaxed transition-colors">
                {tool.description}
              </p>
              
              <div className="inline-flex items-center text-sm font-semibold text-brand-primary dark:text-brand-primaryDark group-hover:text-brand-accent dark:group-hover:text-brand-bgDark transition-colors">
                Try Calculator
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}