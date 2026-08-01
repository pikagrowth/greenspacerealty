"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturedListings() {
  const router = useRouter();
  
  // Prioritize fast selling projects, fallback to the first 3 if none exist yet
  const featured = projects.filter(p => p.fastSelling).slice(0, 3);
  const displayProjects = featured.length > 0 ? featured : projects.slice(0, 3);

  if (displayProjects.length === 0) return null;

  return (
    <section className="py-24 bg-white dark:bg-[#111412] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading
            title="Exclusive Mandates & Fast Movers"
            subtitle="Handpicked premium residential, commercial, and land opportunities currently experiencing high market demand."
            className="mb-0 max-w-2xl"
          />
          <button 
            onClick={() => router.push('/projects')} 
            className="hidden md:inline-flex items-center font-bold text-brand-primary dark:text-brand-primaryDark hover:text-brand-accent transition-colors pb-2"
          >
            View Full Portfolio <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="text-center md:hidden">
          <Button 
            onClick={() => router.push('/projects')} 
            className="w-full py-4 bg-gray-50 dark:bg-[#161917] text-brand-primary dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            View All Verified Projects <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
        
      </div>
    </section>
  );
}