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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Our Core Services" 
          subtitle="Specialized real estate solutions spanning B2C advisory and B2B marketing mandates."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon] || Home;
            return (
              <div 
                key={service.slug} 
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                
                <Link 
                  href={service.ctaHref}
                  className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
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