import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Clock, Building2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full text-sm font-semibold tracking-wide mb-6">
              NEW LAUNCH IN OLD PANVEL
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-primary leading-tight mb-6">
              Your Dream Space <br/>
              <span className="text-brand-accent">Built on Trust.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Discover premium 2 & 3 BHK residences and commercial spaces at Shravan Siddhant. Prime location, modern amenities, and unparalleled construction quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#enquire" className="w-full sm:w-auto">
                <Button size="lg" className="w-full gap-2">
                  Enquire Now <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/projects/shravan-siddhant" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  View Floor Plans
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 border-t border-gray-200 pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-success" size={24} />
                <div className="text-sm font-medium">MahaRERA<br/><span className="text-gray-500 font-normal">Registered</span></div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-brand-success" size={24} />
                <div className="text-sm font-medium">On-Time<br/><span className="text-gray-500 font-normal">Delivery</span></div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="text-brand-success" size={24} />
                <div className="text-sm font-medium">Premium<br/><span className="text-gray-500 font-normal">Quality</span></div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/projects/shravan-siddhant/hero-residential.webp"
              alt="Shravan Siddhant Residential Building"
              fill
              priority
              className="object-cover"
            />
            {/* Soft gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};