// components/projects/ProjectCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, FileText, Calendar } from "lucide-react";
import { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrochureGateForm } from "@/components/forms/BrochureGateForm";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const mainImage = project.images[0] || "/images/brand/hero-poster.jpeg";

  return (
    <>
      <Card className="flex flex-col h-full group hover:shadow-xl dark:hover:shadow-brand-primaryDark/10 transition-all duration-300">
        <Link href={`/projects/${project.slug}`} className="relative h-64 overflow-hidden block">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
          
          <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
            <Badge variant="default" className="bg-white/90 text-brand-primary dark:bg-[#161917]/90 dark:text-brand-primaryDark backdrop-blur-sm border-none shadow-sm">
              {project.category}
            </Badge>
            {project.fastSelling && (
              <Badge variant="alert" className="animate-pulse shadow-sm">
                Fast Selling
              </Badge>
            )}
          </div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center text-gray-200 text-sm font-medium mb-1 drop-shadow-md">
              <MapPin size={14} className="mr-1 text-brand-accent dark:text-brand-accentDark" />
              {project.location}
            </div>
            <h3 className="text-xl font-bold text-white drop-shadow-md line-clamp-1">
              {project.title}
            </h3>
          </div>
        </Link>
        
        <div className="p-6 flex flex-col flex-1 bg-white dark:bg-[#161917] transition-colors duration-300">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">Configuration</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">{project.configuration || "Various"}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-1">Price From</div>
              <div className="font-bold text-brand-primary dark:text-brand-primaryDark">{project.priceRange || "On Request"}</div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-6 flex-1 transition-colors">
            {project.description}
          </p>
          
          <div className="flex flex-col gap-3 mt-auto">
            <div className="flex gap-2">
              <Link href={`/projects/${project.slug}`} className="flex-1">
                <Button variant="outline" className="w-full text-xs h-10 px-2 gap-1.5 border-gray-200 dark:border-gray-700 hover:border-brand-primary dark:hover:border-brand-primaryDark">
                  <Calendar size={14} /> Site Visit
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="flex-1 text-xs h-10 px-2 gap-1.5 border-brand-accent/50 text-brand-primary hover:bg-brand-accent/10 dark:border-brand-accentDark/50 dark:text-brand-accentDark dark:hover:bg-brand-accentDark/10"
                onClick={() => setIsBrochureOpen(true)}
              >
                <FileText size={14} /> Brochure
              </Button>
            </div>
            <Link href={`/projects/${project.slug}`}>
              <Button className="w-full h-11 text-sm gap-2">
                View Details <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      <BrochureGateForm 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
        projectName={project.title}
      />
    </>
  );
};