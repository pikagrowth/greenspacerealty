"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Building2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-primary/5 dark:bg-brand-primaryDark/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ==========================================
              LEFT: Text Content
          ========================================== */}
          <div className="relative z-10 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 dark:bg-brand-accentDark/10 border border-brand-accent/20 text-brand-accent dark:text-brand-accentDark rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              New Launch In Old Panvel
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight transition-colors">
              Your Dream Space <br/>
              <span className="text-brand-primary dark:text-brand-primaryDark">Built on Trust.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed font-light transition-colors">
              Discover premium 2 & 3 BHK residences and commercial spaces at Shravan Siddhant. Prime location, modern amenities, and unparalleled construction quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <Link href="#enquire" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2">
                  Enquire Now <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/projects/shravan-siddhant" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-gray-800 hover:border-brand-primary dark:hover:border-brand-primary text-gray-900 dark:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-sm">
                  View Floor Plans
                </button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 border-t border-gray-100 dark:border-gray-800 pt-8 w-full transition-colors">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-brand-success dark:text-brand-successDark" size={20} />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white transition-colors">MahaRERA<br/><span className="text-gray-500 font-medium">Registered</span></div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="text-brand-success dark:text-brand-successDark" size={20} />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white transition-colors">On-Time<br/><span className="text-gray-500 font-medium">Delivery</span></div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-brand-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="text-brand-success dark:text-brand-successDark" size={20} />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white transition-colors">Premium<br/><span className="text-gray-500 font-medium">Quality</span></div>
              </div>
            </div>
          </div>

          {/* ==========================================
              RIGHT: Image
          ========================================== */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group">
            <Image 
              src="/images/projects/shravan-siddhant/hero-residential.webp"
              alt="Shravan Siddhant Residential Building"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Deep gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80"></div>
            
            {/* Floating Info Tag */}
            <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-[#111]/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">Starting Price</p>
              <p className="text-2xl font-black text-brand-primary dark:text-brand-primaryDark">₹85 Lacs*</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};