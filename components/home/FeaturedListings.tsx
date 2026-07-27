"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedListings() {
  const router = useRouter();
  
  // Prioritize fast selling projects, fallback to the first 3 if none exist yet
  const featured = projects.filter(p => p.fastSelling).slice(0, 3);
  const displayProjects = featured.length > 0 ? featured : projects.slice(0, 3);

  if (displayProjects.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          title="Exclusive Mandates & Fast Selling Properties"
          subtitle="Explore our handpicked selection of premium residential, commercial, and land opportunities currently in high demand."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => router.push('/projects')} 
            className="px-10 py-4 h-auto text-base shadow-lg hover:shadow-brand-primary/20"
          >
            View All Projects
          </Button>
        </div>
        
      </div>
    </section>
  );
}