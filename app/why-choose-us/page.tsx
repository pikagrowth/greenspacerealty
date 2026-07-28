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
      icon: <MapPin className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Verified & Transparent Listings",
      description: "Every single property we list—whether a resale flat or a land parcel—goes through strict background checks for clear titles and fair market valuation.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "End-to-End Support",
      description: "From the initial site visit to loan approvals, legal vetting facilitation, and final registration, we hold your hand throughout the entire transaction lifecycle.",
      icon: <Handshake className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "No Hidden Costs",
      description: "What we quote is what you pay. We pride ourselves on absolute financial transparency before you commit, completely eliminating last-minute surprises.",
      icon: <Eye className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Builder-Grade Professionalism",
      description: "Developers trust us with their sole-selling mandates because we act as a disciplined, high-conversion sales engine that protects and enhances their brand equity.",
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Building Trust, Creating Value
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            In a market crowded with transactional brokers, we stand apart as a dedicated advisory and marketing agency. Here is why buyers, investors, and builders choose Greenspace Realty.
          </p>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Pillars" 
            subtitle="The fundamental principles that guide every property consultation and marketing mandate we undertake."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-50 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Testimonials Grid */}
      <section className="py-24 bg-white">
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
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 leading-relaxed mb-8 flex-1 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="pt-6 border-t border-gray-200 mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs font-semibold text-brand-primary uppercase tracking-wider mt-1">
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
      <section className="py-20 bg-brand-primary/5 border-t border-brand-primary/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to make a secure, transparent real estate decision? Let our experts guide you.
          </p>
          <Link href="/contact#enquire">
            <Button className="px-10 py-4 h-auto text-base shadow-lg hover:shadow-brand-primary/20">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}