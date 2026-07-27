import React from "react";
import Link from "next/link";
import { Building2, Map, Home, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Our Services | B2C Advisory & B2B Mandates",
  description: "Explore Greenspace Realty's core services: Sole Selling Mandates for developers, Land Dealing Advisory, Resale Homes, and Investment Consultation.",
};

const IconMap: Record<string, React.ElementType> = {
  Building2,
  Map,
  Home,
  LineChart
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/brand/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Comprehensive Real Estate Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From helping families find their dream home to acting as the dedicated sales engine for top-tier developers, our services bridge the gap between supply and demand with complete transparency.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-24">
            {services.map((service, idx) => {
              const Icon = IconMap[service.icon] || Home;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={service.slug} 
                  id={service.slug}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center scroll-mt-28 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image/Visual Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                      <img 
                        src="/images/brand/hero-poster.jpg" 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
                      
                      {/* Floating Badge */}
                      <div className={`absolute bottom-6 ${isEven ? 'right-6' : 'left-6'} bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4`}>
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-brand-primary" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Target Audience</div>
                          <div className="font-semibold text-gray-900">{service.audience === 'Both' ? 'B2C & B2B' : service.audience}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                    <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
                      <p>{service.fullDescription}</p>
                    </div>
                    
                    {/* Unique bullet points based on service slug for added depth */}
                    <ul className="space-y-3 mb-10">
                      {service.slug === 'sole-selling-mandates' && (
                        <>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Zero marketing overheads for builders.</li>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> End-to-end site visit conversions.</li>
                        </>
                      )}
                      {service.slug === 'land-dealing' && (
                        <>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Comprehensive zoning & title due diligence.</li>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Focus on high-appreciation corridors like NAINA.</li>
                        </>
                      )}
                      {service.slug === 'resale-and-2nd-homes' && (
                        <>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Strict background checks on all properties.</li>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Assistance with loan transfers and registration.</li>
                        </>
                      )}
                      {service.slug === 'investment-consultation' && (
                        <>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Data-backed yield and appreciation analysis.</li>
                          <li className="flex items-start text-sm text-gray-700 font-medium"><CheckCircle2 size={20} className="text-brand-accent mr-3 shrink-0" /> Portfolio diversification across asset classes.</li>
                        </>
                      )}
                    </ul>

                    <Link href={service.ctaHref}>
                      <Button className="px-8 py-3.5 h-auto text-base group shadow-md hover:shadow-brand-primary/20">
                        {service.ctaLabel} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Not sure where to start?" 
            subtitle="Let our advisory team guide you to the right solution based on your specific goals."
            className="mb-8"
          />
          <Link href="/contact#enquire">
            <Button variant="outline" className="px-10 py-4 h-auto text-base bg-white shadow-sm hover:shadow-md transition-shadow">
              Speak to an Advisor
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}