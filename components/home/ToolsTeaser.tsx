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
      icon: <Calculator className="w-6 h-6 text-brand-primary" />,
      href: "/tools#emi"
    },
    {
      title: "Home Affordability",
      description: "Find out how much house you can afford based on your current income and existing obligations.",
      icon: <Wallet className="w-6 h-6 text-brand-primary" />,
      href: "/tools#affordability"
    },
    {
      title: "Down Payment Planner",
      description: "Calculate your upfront costs and determine the exact loan amount needed for your target property.",
      icon: <PiggyBank className="w-6 h-6 text-brand-primary" />,
      href: "/tools#down-payment"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
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
              className="group block p-8 rounded-2xl bg-gray-50 hover:bg-brand-primary border border-transparent hover:border-brand-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {tool.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-200 mb-8 leading-relaxed transition-colors">
                {tool.description}
              </p>
              
              <div className="inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
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