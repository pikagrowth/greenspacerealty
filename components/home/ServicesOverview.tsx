// components/home/ServicesOverview.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Map, Home, LineChart } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  Building2,
  Map,
  Home,
  LineChart
};

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white dark:bg-[#161917] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Engineered Real Estate Solutions" 
          subtitle="From securing high-yield land parcels to liquidating massive project inventories, we bring data-driven strategies to every transaction."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon] || Home;
            return (
              <div 
                key={service.slug} 
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#111412] border border-transparent dark:border-gray-800 hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-white dark:bg-[#1a1e1b] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-1 transition-colors">
                  {service.shortDescription}
                </p>
                
                <Link 
                  href={service.ctaHref}
                  className="inline-flex items-center text-sm font-semibold text-brand-primary dark:text-brand-primaryDark hover:text-brand-accent dark:hover:text-brand-accentDark transition-colors"
                >
                  {service.ctaLabel}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}