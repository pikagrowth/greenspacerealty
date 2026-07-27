import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, ShieldCheck, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS_DETAILS } from "@/lib/constants";

export const metadata = {
  title: "About Us | Founder & Journey",
  description: "Learn about Greenspace Realty's journey and how founder Krishna Patil brings engineering-grade diligence to real estate transactions in Navi Mumbai.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "The Foundation",
      title: "Establishing Trust in Panvel",
      description: "Started with a vision to bring transparency to local real estate, focusing on helping families find verified homes in Old and New Panvel.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
    },
    {
      year: "Portfolio Expansion",
      title: "Resale & Premium 2nd Homes",
      description: "Grew the B2C advisory wing by curating a strict, zero-litigation portfolio of ready-to-move apartments and weekend getaways.",
      icon: <Building2 className="w-6 h-6 text-brand-primary" />
    },
    {
      year: "Strategic Advisory",
      title: "Navigating Land Dealing",
      description: "Expanded into high-ticket land acquisitions and CIDCO plots, providing rigorous due-diligence for investors eyeing the upcoming airport and NAINA corridors.",
      icon: <TrendingUp className="w-6 h-6 text-brand-primary" />
    },
    {
      year: "B2B Partnerships",
      title: "Sole-Selling Marketing Mandates",
      description: "Evolved into a full-stack sales engine for developers. Today, we handle exclusive marketing mandates, allowing builders to focus purely on construction.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Engineering-Grade Diligence in Real Estate
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are not just brokers. We are a dedicated real estate marketing and advisory agency built on the principles of deep market research, absolute transparency, and verifiable data.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/images/brand/hero-poster.jpg" 
                  alt={`${BUSINESS_DETAILS.owner}, Founder of Greenspace Realty`}
                  fill
                  className="object-cover"
                />
                {/* Fallback image if client hasn't provided founder photo yet - mapped to existing poster to avoid broken links */}
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="text-4xl font-bold text-brand-accent mb-1">8+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Years of Trust</div>
              </div>
            </div>

            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet the Founder</h2>
              <h3 className="text-xl text-brand-primary font-medium mb-8">{BUSINESS_DETAILS.owner}</h3>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  The real estate market in Navi Mumbai is expanding at an unprecedented rate, driven by massive infrastructure projects like the International Airport and NAINA. With rapid growth comes complexity—zoning laws, title checks, valuation metrics, and aggressive marketing.
                </p>
                <p>
                  Founded by {BUSINESS_DETAILS.owner}, Greenspace Realty was built to cut through this noise. Taking an analytical, advisory-first approach to property transactions, Krishna realized that buyers and builders didn't need middlemen; they needed a professional partner who brought <strong className="text-gray-900">engineering-grade diligence</strong> to the table.
                </p>
                <p>
                  Whether it's conducting rigorous title preliminary checks for a land parcel, vetting a resale home for zero encumbrances, or designing a high-conversion marketing strategy for a developer's new launch, Krishna ensures that every transaction is grounded in verified data, not speculation.
                </p>
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100 italic text-gray-700">
                "{BUSINESS_DETAILS.tagline}. It's more than a slogan; it's the operational blueprint for every mandate we take on and every buyer we advise."
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            title="Our Growth Journey" 
            subtitle="From a local B2C consultancy to a comprehensive B2B marketing engine."
            className="mb-16"
          />

          <div className="relative">
            {/* Vertical Line connecting steps */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2 hidden sm:block"></div>

            <div className="space-y-12 relative z-10">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex flex-col sm:flex-row gap-8 items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline content half */}
                  <div className={`sm:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full lg:w-[90%]">
                      <div className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Center */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-50 shadow-sm flex items-center justify-center shrink-0 hidden sm:flex">
                    {milestone.icon}
                  </div>

                  {/* Empty half for spacing on desktop */}
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}