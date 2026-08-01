"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ShieldCheck, Handshake, Eye, Briefcase } from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Hyper-Local Expertise",
      description: "Deep, boots-on-the-ground knowledge of Old Panvel, Karanjade, NAINA, and the broader Navi Mumbai corridors.",
      icon: <MapPin className="w-7 h-7 text-brand-primary dark:text-brand-primaryDark transition-colors" />
    },
    {
      title: "Verified & Transparent",
      description: "Every property we list undergoes strict background checks for clear titles, RERA compliance, and fair market valuation.",
      icon: <ShieldCheck className="w-7 h-7 text-brand-primary dark:text-brand-primaryDark transition-colors" />
    },
    {
      title: "End-to-End Execution",
      description: "From site visits to loan approvals and final registration, we hold your hand throughout the entire transaction lifecycle.",
      icon: <Handshake className="w-7 h-7 text-brand-primary dark:text-brand-primaryDark transition-colors" />
    },
    {
      title: "Zero Hidden Costs",
      description: "What we quote is what you pay. We pride ourselves on absolute financial transparency before you commit.",
      icon: <Eye className="w-7 h-7 text-brand-primary dark:text-brand-primaryDark transition-colors" />
    },
    {
      title: "Builder-Grade Trust",
      description: "Developers trust us with their sole-selling mandates because we act as a disciplined, high-conversion sales engine.",
      icon: <Briefcase className="w-7 h-7 text-brand-primary dark:text-brand-primaryDark transition-colors" />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#111412] border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content & Image */}
          <div className="lg:w-1/3 text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/5 dark:bg-brand-primaryDark/10 text-brand-primary dark:text-brand-primaryDark border border-brand-primary/20 text-xs font-bold tracking-widest mb-6 uppercase shadow-sm">
              The Greenspace Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 transition-colors leading-tight">
              Why Choose Greenspace Realty?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors font-light">
              We bring engineering-grade diligence to real estate transactions. Whether you're buying your first home or trusting us with your project's sales mandate, we deliver concrete value.
            </p>
            <div className="relative h-72 md:h-80 w-full rounded-[2rem] overflow-hidden shadow-2xl hidden lg:block border border-gray-100 dark:border-gray-800 transition-colors group">
              <Image 
                src="/images/brand/hero-poster.jpeg" 
                alt="Greenspace Realty Team" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-brand-primary/10 dark:bg-black/40 mix-blend-multiply transition-colors"></div>
            </div>
          </div>

          {/* Right Side: Pillars Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-5 bg-brand-bg dark:bg-[#161917] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white dark:bg-[#111412] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-primary/5 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors">{pillar.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors font-light">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}