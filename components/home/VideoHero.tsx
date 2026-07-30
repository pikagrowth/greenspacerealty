// components/home/VideoHero.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EnquiryType } from "@/lib/types";

export function VideoHero() {
  const router = useRouter();
  const [intent, setIntent] = useState<EnquiryType | "">("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent || !mobile) return;
    
    setStatus('loading');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enquiryType: intent,
          mobile,
          source: 'hero-quick-form',
          name: 'Hero Quick Form Lead', // Fallback for the sheet requirement
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setMobile('');
          setIntent('');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full bg-[#111412] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/brand/hero-poster.jpeg"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        >
          {/* Native HTML5 media queries to serve optimized video per device */}
          <source 
            src={process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL} 
            media="(max-width: 768px)" 
            type="video/mp4" 
          />
          <source 
            src={process.env.NEXT_PUBLIC_HERO_VIDEO_DESKTOP_URL} 
            media="(min-width: 769px)" 
            type="video/mp4" 
          />
        </video>
        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#FAF8F3] dark:to-[#111412] transition-colors duration-300" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <Badge variant="default" className="mb-6 bg-brand-primary/90 dark:bg-brand-primaryDark/90 border-brand-accent/30 dark:border-brand-accentDark/30 text-white dark:text-brand-bgDark backdrop-blur-sm px-4 py-1.5 text-sm shadow-xl transition-colors">
          Building Trust, Creating Value
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl drop-shadow-md transition-colors">
          Panvel & Navi Mumbai's Trusted Property Partner
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 dark:text-gray-200 mb-10 max-w-3xl leading-relaxed drop-shadow transition-colors">
          Stop chasing dead ends. Whether you want to secure a high-yield investment or need a dedicated marketing partner to liquidate your project's inventory, we deliver results.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <Button 
            className="text-base px-8 py-4 h-auto shadow-xl hover:shadow-brand-primary/20 dark:hover:shadow-brand-primaryDark/20"
            onClick={() => router.push('/projects')}
          >
            Explore Verified Listings
          </Button>
          <Button 
            variant="outline" 
            className="text-base px-8 py-4 h-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm dark:bg-black/20 dark:hover:bg-black/40 dark:border-gray-600"
            onClick={() => router.push('/partner-with-us')}
          >
            Builder Mandates
          </Button>
        </div>

        {/* Compact Quick Select Strip */}
        <div className="w-full max-w-4xl mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md p-2 rounded-2xl md:rounded-full border border-white/20 dark:border-gray-700 shadow-2xl animate-in slide-in-from-bottom-4 fade-in duration-700 transition-colors">
          <form onSubmit={handleQuickSubmit} className="flex flex-col md:flex-row gap-2 bg-white dark:bg-[#161917] rounded-xl md:rounded-full p-2 transition-colors">
            
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 px-4 py-2 relative transition-colors">
              <select 
                required
                value={intent}
                onChange={(e) => setIntent(e.target.value as EnquiryType)}
                className="w-full bg-transparent text-gray-900 dark:text-white font-medium focus:outline-none cursor-pointer appearance-none z-10 transition-colors"
              >
                <option value="" disabled>My goal is to...</option>
                <option value="buyer">Buy a Home / Resale</option>
                <option value="seller-builder">Partner (Builder Mandate)</option>
                <option value="land">Buy or Sell Land</option>
                <option value="consultation">Get Investment Advice</option>
              </select>
              <ChevronDown size={18} className="text-gray-400 dark:text-gray-500 absolute right-4 z-0 pointer-events-none transition-colors" />
            </div>

            <div className="flex-1 flex items-center px-4 py-2">
              <Phone size={18} className="text-gray-400 dark:text-gray-500 mr-3 shrink-0 transition-colors" />
              <input 
                type="tel" 
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                placeholder="Mobile Number" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-transparent text-gray-900 dark:text-white font-medium focus:outline-none placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors"
              />
            </div>

            <Button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="md:w-auto w-full rounded-lg md:rounded-full px-8 py-3 md:py-0 h-12 whitespace-nowrap transition-all"
            >
              {status === 'loading' ? (
                'Sending...'
              ) : status === 'success' ? (
                <span className="flex items-center gap-2"><CheckCircle2 size={18} /> Request Received</span>
              ) : status === 'error' ? (
                'Try Again'
              ) : (
                'Request Callback'
              )}
            </Button>

          </form>
        </div>

      </div>
    </div>
  );
}