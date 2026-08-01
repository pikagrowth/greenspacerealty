"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Map, Home, LineChart } from "lucide-react";

// Preserving your data import so logic/routes do not change
import { services } from "@/lib/data/services";

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  Building2,
  Map,
  Home,
  LineChart
};

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white dark:bg-[#111412] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Section Heading */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/5 dark:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark border border-brand-primary/20 dark:border-brand-primaryDark/30 text-xs font-bold tracking-widest mb-4 uppercase shadow-sm transition-colors">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
            Engineered Real Estate Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            From securing high-yield land parcels to liquidating massive project inventories, we bring data-driven strategies to every transaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = IconMap[service.icon] || Home;
            return (
              <div 
                key={service.slug} 
                className="group p-8 md:p-10 rounded-3xl bg-gray-50 dark:bg-[#161917] border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 hover:border-brand-primary/30 dark:hover:border-brand-primaryDark/50 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Subtle Hover Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-125 -z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white dark:bg-[#111412] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-brand-primary dark:text-brand-primaryDark transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors tracking-tight group-hover:text-brand-primary dark:group-hover:text-brand-primaryDark">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed flex-1 transition-colors font-light text-lg">
                    {service.shortDescription}
                  </p>
                  
                  <Link 
                    href={service.ctaHref}
                    className="inline-flex items-center text-sm font-bold text-brand-primary dark:text-brand-primaryDark hover:text-brand-accent transition-colors mt-auto"
                  >
                    {service.ctaLabel}
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}