// app/why-choose-us/page.tsx
import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Handshake, Eye, Briefcase, ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/lib/data/testimonials";

export const metadata = {
  title: "Why Choose Us | Greenspace Realty",
  description: "Discover why Greenspace Realty is Panvel and Navi Mumbai's most trusted real estate advisory and marketing partner.",
};

export default function WhyChooseUsPage() {
  const pillars = [
    {
      title: "Local Market Expertise",
      description: "Deep, boots-on-the-ground knowledge of Old Panvel, Karanjade, NAINA, and the broader Navi Mumbai corridors. We don't just sell properties; we sell the micro-market's future potential.",
      icon: <MapPin className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Verified & Transparent Listings",
      description: "Every single property we list—whether a resale flat or a land parcel—goes through strict background checks for clear titles and fair market valuation.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "End-to-End Support",
      description: "From the initial site visit to loan approvals, legal vetting facilitation, and final registration, we hold your hand throughout the entire transaction lifecycle.",
      icon: <Handshake className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "No Hidden Costs",
      description: "What we quote is what you pay. We pride ourselves on absolute financial transparency before you commit, completely eliminating last-minute surprises.",
      icon: <Eye className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    },
    {
      title: "Builder-Grade Professionalism",
      description: "Developers trust us with their sole-selling mandates because we act as a disciplined, high-conversion sales engine that protects and enhances their brand equity.",
      icon: <Briefcase className="w-6 h-6 text-brand-primary dark:text-brand-primaryDark" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary dark:bg-[#0c100e] text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight transition-colors">
            Building Trust, Creating Value
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors">
            In a market crowded with transactional brokers, we stand apart as a dedicated advisory and marketing agency. Here is why buyers, investors, and builders choose Greenspace Realty.
          </p>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 bg-gray-50 dark:bg-[#111412] border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Pillars" 
            subtitle="The fundamental principles that guide every property consultation and marketing mandate we undertake."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white dark:bg-[#161917] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-gray-50 dark:bg-[#1a1e1b] rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-6 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Testimonials Grid */}
      <section className="py-24 bg-white dark:bg-[#161917] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Hear directly from the families and businesses we've partnered with."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 dark:bg-[#111412] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col h-full transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent dark:fill-brand-accentDark text-brand-accent dark:text-brand-accentDark transition-colors" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 flex-1 italic transition-colors">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800 mt-auto flex items-center gap-4 transition-colors">
                  <div className="w-12 h-12 bg-brand-primary dark:bg-brand-primaryDark text-white dark:text-brand-bgDark rounded-full flex items-center justify-center font-bold text-lg transition-colors">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white transition-colors">{testimonial.name}</div>
                    <div className="text-xs font-semibold text-brand-primary dark:text-brand-primaryDark uppercase tracking-wider mt-1 transition-colors">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary/5 dark:bg-brand-primaryDark/10 border-t border-brand-primary/10 dark:border-brand-primaryDark/20 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Experience the Difference</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 transition-colors">
            Ready to make a secure, transparent real estate decision? Let our experts guide you.
          </p>
          <Link href="/contact#enquire">
            <Button className="px-10 py-4 h-auto text-base shadow-lg hover:shadow-brand-primary/20 dark:hover:shadow-brand-primaryDark/20">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}