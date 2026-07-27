import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={project.images[0] || "/images/brand/hero-poster.jpg"} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Top Badges (Category & Urgency) */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
          <Badge variant="brand" className="shadow-md">
            {project.category}
          </Badge>
          {project.fastSelling && (
            <Badge variant="urgent" className="shadow-md animate-pulse">
              Fast Selling
            </Badge>
          )}
        </div>
        
        {/* Bottom Badge (Status) */}
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="shadow-md bg-white text-gray-800">
            {project.status}
          </Badge>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <MapPin size={16} className="mr-1.5 shrink-0 text-brand-accent" />
          <span className="truncate">{project.location}</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Starting From
            </div>
            <div className="text-lg font-bold text-brand-primary">
              {project.priceRange || "Price on Request"}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Configuration
            </div>
            <div className="text-sm font-semibold text-gray-700">
              {project.configuration || "Various"}
            </div>
          </div>
        </div>
        
        <Link 
          href={`/projects/${project.slug}`} 
          className="mt-6 flex items-center justify-center w-full py-3 bg-gray-50 group-hover:bg-brand-primary text-gray-700 group-hover:text-white rounded-xl transition-colors text-sm font-semibold"
        >
          View Details 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}