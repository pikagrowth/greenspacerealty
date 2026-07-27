"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Building2, Home, ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AudienceSplit() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored real estate solutions whether you are looking for your next investment or looking to sell your inventory faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* B2C Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Home className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              For Home Buyers & Investors
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed flex-1">
              Find verified resale homes, premium weekend getaways, and strategic land parcels in the rapidly growing micro-markets of Panvel and Navi Mumbai. Our data-driven advisory ensures you invest with complete peace of mind.
            </p>
            <ul className="space-y-3 mb-8 w-full">
              <li className="flex items-center text-sm text-gray-700 font-medium">
                <ShieldCheck size={18} className="text-brand-primary mr-2 shrink-0" /> Clear Titles & Verified Listings
              </li>
              <li className="flex items-center text-sm text-gray-700 font-medium">
                <TrendingUp size={18} className="text-brand-primary mr-2 shrink-0" /> High-Growth Corridor Focus
              </li>
            </ul>
            <Button onClick={() => router.push('/projects')} className="w-full sm:w-auto group">
              Browse Properties
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* B2B Card */}
          <div className="bg-brand-primary rounded-2xl p-8 md:p-10 shadow-xl border border-brand-secondary flex flex-col items-start transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 pointer-events-none blur-3xl"></div>
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 relative z-10">
              <Building2 className="w-7 h-7 text-brand-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
              For Builders & Developers
            </h3>
            <p className="text-gray-200 mb-8 leading-relaxed flex-1 relative z-10">
              Stop worrying about inventory liquidation. Appoint Greenspace Realty as your exclusive sales and marketing partner. We take over the entire lead generation and site-visit conversion process so you can focus on construction.
            </p>
            <ul className="space-y-3 mb-8 w-full relative z-10">
              <li className="flex items-center text-sm text-gray-200 font-medium">
                <TrendingUp size={18} className="text-brand-accent mr-2 shrink-0" /> Faster Inventory Liquidation
              </li>
              <li className="flex items-center text-sm text-gray-200 font-medium">
                <ShieldCheck size={18} className="text-brand-accent mr-2 shrink-0" /> End-to-End Marketing Strategy
              </li>
            </ul>
            <Button variant="outline" onClick={() => router.push('/partner-with-us')} className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/30 group relative z-10">
              Partner With Us
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}