import React from "react";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="Don't just take our word for it. Hear from buyers, investors, and builders we've partnered with."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed text-sm mb-8 flex-1 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-6 border-t border-gray-200 mt-auto">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-xs font-medium text-brand-primary uppercase tracking-wider mt-1">
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