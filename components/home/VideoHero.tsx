"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, CheckCircle2, ChevronDown, ShieldCheck, ArrowRight, Building2 } from "lucide-react";
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
          name: 'Hero Quick Form Lead', 
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
    <div className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/brand/hero-poster.jpeg"
          /* REMOVED mix-blend and opacity so the video is fully visible in its natural colors */
          className="absolute inset-0 w-full h-full object-cover"
        >
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
        
        {/* CHANGED OVERLAY: Cinematic neutral dark vignette to keep text readable without turning the video green */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 transition-colors duration-300" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-brand-accent font-bold text-sm mb-8 backdrop-blur-md shadow-2xl animate-in slide-in-from-top-4 duration-700">
          <ShieldCheck className="w-4 h-4 mr-2" />
          Building Trust, Creating Value
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight max-w-5xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-tight">
          Panvel & Navi Mumbai's <br className="hidden md:block" />
          <span className="text-brand-accent">Trusted Property Partner</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
          Stop chasing dead ends. Whether you want to secure a high-yield investment or need a dedicated marketing partner to liquidate your project's inventory, we deliver results.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <button 
            className="px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 text-lg"
            onClick={() => router.push('/projects')}
          >
            Explore Verified Listings <ArrowRight size={20} />
          </button>
          <button 
            className="px-8 py-4 bg-black/40 hover:bg-black/60 border border-white/30 text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            onClick={() => router.push('/partner-with-us')}
          >
            <Building2 size={20} /> Builder Mandates
          </button>
        </div>

        {/* Compact Quick Select Strip (Premium Glassmorphism) */}
        <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-8 fade-in duration-1000">
          <form onSubmit={handleQuickSubmit} className="flex flex-col md:flex-row gap-2 bg-white dark:bg-[#111412] rounded-xl md:rounded-full p-2">
            
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 px-4 py-2 md:py-0 relative h-12">
              <select 
                required
                value={intent}
                onChange={(e) => setIntent(e.target.value as EnquiryType)}
                className="w-full h-full bg-transparent text-gray-900 dark:text-white font-bold focus:outline-none cursor-pointer appearance-none z-10"
              >
                <option value="" disabled>My goal is to...</option>
                <option value="buyer">Buy a Home / Resale</option>
                <option value="seller-builder">Partner (Builder Mandate)</option>
                <option value="land">Buy or Sell Land</option>
                <option value="consultation">Get Investment Advice</option>
              </select>
              <ChevronDown size={18} className="text-gray-400 dark:text-gray-500 absolute right-4 z-0 pointer-events-none" />
            </div>

            <div className="flex-1 flex items-center px-4 py-2 md:py-0 h-12">
              <Phone size={18} className="text-brand-primary dark:text-brand-primaryDark mr-3 shrink-0" />
              <input 
                type="tel" 
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                placeholder="Mobile Number" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full h-full bg-transparent text-gray-900 dark:text-white font-bold focus:outline-none placeholder:font-normal placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="md:w-auto w-full rounded-lg md:rounded-full px-8 h-12 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold transition-all shadow-md disabled:opacity-70 flex items-center justify-center whitespace-nowrap"
            >
              {status === 'loading' ? (
                'Sending...'
              ) : status === 'success' ? (
                <span className="flex items-center gap-2 text-brand-success"><CheckCircle2 size={18} /> Received</span>
              ) : status === 'error' ? (
                'Try Again'
              ) : (
                'Request Callback'
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}