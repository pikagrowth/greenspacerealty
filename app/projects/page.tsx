"use client";

import React, { useState } from "react";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters, FilterOption } from "@/components/projects/ProjectFilters";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Building } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterOption>("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-gray-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <SectionHeading 
          title="Properties & Projects" 
          subtitle="Browse our exclusive mandates, verified resale homes, and premium land parcels across Navi Mumbai and Panvel."
          className="mb-12"
        />

        <ProjectFilters 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
              <Building className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We currently don't have any active public listings in the "{activeCategory}" category. However, we often have exclusive offline inventory available.
            </p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="px-6 py-2.5 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-secondary transition-colors shadow-sm"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}