import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, ShieldCheck, Handshake, Eye, Briefcase } from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Local Market Expertise",
      description: "Deep, boots-on-the-ground knowledge of Old Panvel, Karanjade, NAINA, and the broader Navi Mumbai corridors.",
      icon: <MapPin className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Verified & Transparent Listings",
      description: "Every property we list goes through strict background checks for clear titles and fair market valuation.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "End-to-End Support",
      description: "From site visits to loan approvals and final registration, we hold your hand throughout the transaction.",
      icon: <Handshake className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "No Hidden Costs",
      description: "What we quote is what you pay. We pride ourselves on absolute financial transparency before you commit.",
      icon: <Eye className="w-6 h-6 text-brand-primary" />
    },
    {
      title: "Builder-Grade Professionalism",
      description: "Developers trust us with their sole-selling mandates because we act as a disciplined, high-conversion sales engine.",
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Why Choose Greenspace Realty?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We bring engineering-grade diligence to real estate transactions. Whether you're buying your first home or trusting us with your project's sales mandate, we deliver value.
            </p>
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg hidden lg:block">
              <img 
                src="/images/brand/hero-poster.jpg" 
                alt="Greenspace Realty Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}