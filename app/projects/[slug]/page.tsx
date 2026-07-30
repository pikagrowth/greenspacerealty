// app/projects/[slug]/page.tsx
"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle2, ArrowRight, Tag, Maximize, FileText } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SiteVisitForm } from "@/components/forms/SiteVisitForm";
import { BrochureGateForm } from "@/components/forms/BrochureGateForm";
import { BUSINESS_DETAILS } from "@/lib/constants";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const mainImage = project.images[0] || "/images/brand/hero-poster.jpeg";

  return (
    <div className="flex flex-col w-full bg-gray-50 dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      {/* Project Hero */}
      <div className="relative w-full h-[50vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={mainImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="default" className="bg-brand-primary dark:bg-brand-primaryDark border-brand-accent/30 dark:border-brand-accentDark/30 text-white dark:text-brand-bgDark backdrop-blur-sm px-3 py-1 text-sm shadow-xl">
              {project.category}
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-3 py-1 text-sm shadow-xl">
              {project.status}
            </Badge>
            {project.fastSelling && (
              <Badge variant="alert" className="shadow-xl px-3 py-1 text-sm animate-pulse">
                Fast Selling
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
            {project.title}
          </h1>
          
          <div className="flex items-center text-gray-200 text-lg drop-shadow">
            <MapPin size={20} className="mr-2 text-brand-accent dark:text-brand-accentDark shrink-0" />
            {project.location}
          </div>
        </div>
      </div>

      {/* Sticky Navigation / Notice Bar */}
      <div className="sticky top-20 z-30 bg-white dark:bg-[#161917] border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-sm font-semibold text-brand-primary dark:text-brand-primaryDark bg-brand-primary/5 dark:bg-brand-primaryDark/10 px-4 py-2 rounded-lg border border-brand-primary/10 dark:border-brand-primaryDark/20 transition-colors">
            <Tag size={16} className="mr-2" />
            Currently Marketed as an Exclusive {project.mandateType} by {BUSINESS_DETAILS.name}
          </div>
          <div className="flex gap-4">
            <a href="#overview" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors">Overview</a>
            <a href="#highlights" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primaryDark transition-colors">Highlights</a>
            <a href="#enquire" className="text-sm font-medium text-brand-primary dark:text-brand-primaryDark hover:text-brand-accent dark:hover:text-brand-accentDark transition-colors">Book Visit</a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column (Details) */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-[#161917] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">Price From</div>
                <div className="text-lg font-bold text-brand-primary dark:text-brand-primaryDark">{project.priceRange || "On Request"}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">Configuration</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{project.configuration || "Various"}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">Property Type</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{project.category}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-1">Status</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">{project.status}</div>
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="scroll-mt-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Project Overview</h2>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Highlights Section */}
            <section id="highlights" className="scroll-mt-40">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-white dark:bg-[#161917] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
                    <CheckCircle2 size={20} className="text-brand-accent dark:text-brand-accentDark mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery Teaser */}
            {project.images.length > 1 && (
              <section className="bg-white dark:bg-[#161917] p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery Preview</h2>
                  <Link 
                    href={`/projects/${project.slug}/gallery`}
                    className="flex items-center text-brand-primary dark:text-brand-primaryDark font-semibold hover:text-brand-secondary transition-colors"
                  >
                    View All Images <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(1, 3).map((img, idx) => (
                    <Link key={idx} href={`/projects/${project.slug}/gallery`} className="relative h-48 rounded-xl overflow-hidden group">
                      <img src={img} alt={`${project.title} Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Maximize className="text-white drop-shadow-md" size={32} />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column (Sticky Form & Brochure CTA) */}
          <div className="lg:w-1/3" id="enquire">
            <div className="sticky top-36 flex flex-col gap-6">
              
              {/* Site Visit Booking */}
              <SiteVisitForm 
                projectSlug={project.slug} 
                projectTitle={project.title} 
              />
              
              {/* Secondary CTA: Brochure */}
              <Button 
                onClick={() => setIsBrochureOpen(true)}
                variant="outline" 
                className="w-full py-6 text-base font-bold shadow-sm border-brand-primary dark:border-brand-primaryDark text-brand-primary dark:text-brand-primaryDark hover:bg-brand-primary/5 dark:hover:bg-brand-primaryDark/10 transition-colors"
              >
                <FileText className="mr-2" size={18} /> Download Floor Plans & Pricing
              </Button>
            </div>
          </div>
          
        </div>
      </div>

      <BrochureGateForm 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
        projectName={project.title}
      />
    </div>
  );
}