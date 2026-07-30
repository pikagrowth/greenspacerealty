// components/home/FeaturedProject.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { BrochureGateForm } from "@/components/forms/BrochureGateForm";

export const FeaturedProject = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <section className="py-24 bg-white dark:bg-brand-bgDark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-alert/10 dark:bg-brand-alertDark/20 border border-brand-alert/20 text-brand-alert dark:text-brand-alertDark rounded-full text-xs font-bold tracking-wider uppercase mb-4 transition-colors">
              <Clock size={14} /> Fast Selling Project
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-brand-primary dark:text-brand-primaryDark transition-colors">
              Spotlight: Shravan Siddhant
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg transition-colors">
              Construction in full swing with plinth level already completed. Limited to just 80 premium units. Bookings are filling up fast for residential and commercial spaces.
            </p>
          </div>
          <Link href="/projects/shravan-siddhant">
            <Button variant="outline" className="gap-2">
              View Full Details <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <Card className="grid lg:grid-cols-2 gap-0 overflow-hidden">
          <div className="relative aspect-video lg:aspect-auto h-full min-h-[400px]">
            <Image
              src="/images/projects/shravan-siddhant/unit-2bhk-3bhk-lifestyle.jpg"
              alt="Shravan Siddhant Lifestyle"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50 dark:bg-[#111412] transition-colors">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent dark:text-brand-accentDark mb-4 transition-colors">
              <MapPin size={16} /> Old Panvel, Navi Mumbai
            </div>
            <h3 className="text-3xl font-heading font-bold text-brand-primary dark:text-white mb-4 transition-colors">
              Shravan Siddhant
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg transition-colors">
              A landmark redevelopment project offering a perfect blend of peaceful residential living and high-visibility commercial spaces right in the heart of Old Panvel. 
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mb-1 transition-colors">Configuration</div>
                <div className="font-semibold text-brand-primary dark:text-brand-primaryDark transition-colors">2 & 3 BHK, Shops</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mb-1 transition-colors">Availability</div>
                <div className="font-semibold text-brand-alert dark:text-brand-alertDark transition-colors">Limited Units Left</div>
              </div>
            </div>
            <Button className="w-full sm:w-auto" onClick={() => setIsBrochureOpen(true)}>
              Unlock Floor Plans & Pricing
            </Button>
          </div>
        </Card>
      </div>

      <BrochureGateForm 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
        projectName="Shravan Siddhant"
      />
    </section>
  );
};