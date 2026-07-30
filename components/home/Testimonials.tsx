// components/home/Testimonials.tsx
import React from "react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-brand-bgDark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="Don't just take our word for it. Hear from buyers, investors, and builders who have experienced the Greenspace standard."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 dark:bg-[#111412] rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-brand-primary/20 dark:hover:border-brand-primaryDark/30 transition-all flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent dark:fill-brand-accentDark text-brand-accent dark:text-brand-accentDark transition-colors" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-8 flex-1 italic transition-colors">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors">
                <div className="font-bold text-gray-900 dark:text-white transition-colors">{testimonial.name}</div>
                <div className="text-xs font-medium text-brand-primary dark:text-brand-primaryDark uppercase tracking-wider mt-1 transition-colors">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}