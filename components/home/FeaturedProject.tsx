import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight } from "lucide-react";

export const FeaturedProject = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Flagship Project</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Construction in full swing. Plinth level completed in June 2026. Bookings open for residential and commercial spaces.
            </p>
          </div>
          <Link href="/projects/shravan-siddhant">
            <Button variant="outline" className="gap-2">
              View Project Details <ArrowRight size={16} />
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
          <div className="p-8 md:p-12 flex flex-col justify-center bg-brand-bg/50">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent mb-4">
              <MapPin size={16} /> Old Panvel, Navi Mumbai
            </div>
            <h3 className="text-3xl font-heading font-bold text-brand-primary mb-4">
              Shravan Siddhant
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              A landmark redevelopment project offering a perfect blend of peaceful residential living and high-visibility commercial spaces right in the heart of Old Panvel.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-sm text-gray-500 mb-1">Configuration</div>
                <div className="font-semibold text-brand-primary">2 & 3 BHK, Shops</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Status</div>
                <div className="font-semibold text-brand-success">Under Construction</div>
              </div>
            </div>
            <Link href="#enquire" className="w-full sm:w-auto">
              <Button className="w-full">
                Download Brochure
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};