import { UrgencyStrip } from "./components/UrgencyStrip";
import { Hero } from "./components/Hero";
import { ModakGame } from "./components/ModakGame";
import { ProjectDetails } from "./components/ProjectDetails";
import { InstagramPromo } from "./components/InstagramPromo";
import { EventFooter } from "./components/EventFooter";

export default function GanpatiEventPage() {
  return (
    <main className="relative overflow-hidden flex flex-col items-center bg-[#FDFBF7] min-h-screen">
      
      {/* 1. The Premium Urgency Strip at the absolute top */}
      <UrgencyStrip />

      {/* Festive Ambient Background Lighting */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#5C1615]/15 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#5C1615]/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Page Content */}
      <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20 z-10 space-y-24">
        <Hero />
        <ModakGame />
        <ProjectDetails />
        <InstagramPromo />
      </div>
      
      <EventFooter />
    </main>
  );
}