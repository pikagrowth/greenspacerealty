"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight, Building2, CheckCircle2, Award } from "lucide-react";
import { BrochureGateForm } from "@/components/forms/BrochureGateForm";

export const FeaturedProject = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0c100e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/10 dark:bg-brand-primaryDark/20 border border-brand-primary/20 text-brand-primary dark:text-brand-primaryDark rounded-full text-xs font-bold tracking-wider uppercase mb-6 transition-colors shadow-sm">
              <Award size={16} /> Official Sole Selling Mandate
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white transition-colors tracking-tight">
              Shravan Siddhant, Old Panvel
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors font-light leading-relaxed">
              Access direct-developer pricing and verified inventory for Panvel's premier G+14 mixed-use landmark. Featuring earthquake-resistant RCC construction and 3rd-floor podium luxury amenities.
            </p>
          </div>
          <Link href="/projects/shravan-siddhant" className="shrink-0 z-20">
            <Button className="py-3 px-6 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl shadow-lg shadow-brand-primary/20 transition-all duration-300">
              View Official Details <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Premium Split Card Design (Fully Clickable) */}
        <div className="relative bg-white dark:bg-[#111412] rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2 gap-0 border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-brand-primary/10 group cursor-pointer">
          
          {/* Invisible Link covering the entire card to make it clickable */}
          <Link 
            href="/projects/shravan-siddhant" 
            className="absolute inset-0 z-10" 
            aria-label="View Official Shravan Siddhant Details"
          />

          {/* Left: Image Container */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-auto w-full overflow-hidden bg-gray-100 dark:bg-gray-900 z-0">
            <Image
              src="/images/brand/hero-poster.jpeg"
              alt="Shravan Siddhant MTNL Road Old Panvel Exterior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Gradient Overlay for aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
            
            {/* Floating Detail Badge */}
            <div className="absolute bottom-6 left-6 z-0 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
              <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">Official Starting Price</div>
              <div className="text-2xl font-black text-brand-primary dark:text-brand-primaryDark">₹91 Lacs*</div>
            </div>
          </div>
          
          {/* Right: Content Container */}
          <div className="p-8 sm:p-10 md:p-14 flex flex-col justify-center relative z-0">
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[80px] -z-10"></div>
            
            <div className="relative z-0">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent dark:text-brand-accentDark mb-6 transition-colors bg-brand-accent/10 px-4 py-2 rounded-lg">
                <MapPin size={18} /> MTNL Road, Old Panvel
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 transition-colors tracking-tight group-hover:text-brand-primary dark:group-hover:text-brand-primaryDark">
                Shravan Siddhant
              </h3>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">MahaRERA: PM1270002601673</div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-base sm:text-lg transition-colors font-light">
                As the authorized sole-selling partner, we provide exclusive access to precise 2D double-line floor plans, structural elevations, and priority developer-direct bookings with zero brokerage.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-10 border-t border-gray-100 dark:border-gray-800 pt-8">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <Building2 size={16} />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Configuration</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white transition-colors">1, 2, 3 BHK & Retail</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Availability</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-brand-success dark:text-brand-success transition-colors">Direct Allocation</div>
                </div>
              </div>
              
              {/* Button Container - Needs high Z-index to bypass the invisible Link layer */}
              <div className="relative z-20">
                <Button 
                  className="w-full py-4 bg-brand-bg dark:bg-[#161917] hover:bg-brand-primary hover:text-white text-brand-primary dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-sm text-base" 
                  onClick={(e) => {
                    // Prevent the click from triggering the parent <Link> tag
                    e.preventDefault();
                    e.stopPropagation();
                    setIsBrochureOpen(true);
                  }}
                >
                  Unlock Official Floor Plans & Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrochureGateForm 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
        projectName="Shravan Siddhant"
      />
    </section>
  );
};