"use client";

import React from "react";
import { testimonials } from "@/lib/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-bg dark:bg-[#0c100e] transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white dark:bg-[#161917] text-brand-primary dark:text-brand-primaryDark border border-gray-200 dark:border-gray-800 text-xs font-bold tracking-widest mb-4 uppercase shadow-sm">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Don't just take our word for it. Hear from buyers, investors, and builders who have experienced the Greenspace standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#111412] rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-primary/30 transition-all duration-300 flex flex-col relative overflow-hidden group"
            >
              <Quote className="absolute -top-4 -right-4 w-28 h-28 text-gray-50 dark:text-gray-900/40 -z-0 rotate-12 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-8">
                  {/* @ts-ignore */}
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent dark:fill-brand-accentDark text-brand-accent dark:text-brand-accentDark transition-colors" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-10 flex-1 italic transition-colors font-light">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto transition-colors">
                  <div className="font-extrabold text-gray-900 dark:text-white transition-colors text-lg">{testimonial.name}</div>
                  <div className="text-xs font-bold text-brand-primary dark:text-brand-primaryDark uppercase tracking-wider mt-1 transition-colors">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}