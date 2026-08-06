// components/home/QuickPopupForm.tsx
"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Flame, Lock, ArrowRight } from "lucide-react";

export const QuickPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });

  useEffect(() => {
    // Show after 5 seconds instead of 8 for better conversion & testing
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("greenspace_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    // Use sessionStorage so the user sees it again on their next fresh visit
    sessionStorage.setItem("greenspace_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        enquiryType: "general",
        source: "quick-popup-form",
        leadPriority: "High Intent", // Marks this as a hot lead for the backend
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        setTimeout(() => handleClose(), 3000);
      } else {
        console.error("Popup form submission failed:", data.error);
      }
    } catch (error) {
      console.error("Network or server error during popup submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* High-Conversion Centered Modal */}
      <div className="bg-white dark:bg-[#111412] w-full max-w-md rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-brand-primary/30 overflow-hidden relative flex flex-col transition-colors duration-300 animate-in zoom-in-95 duration-300">
        
        {/* Subtle Close Button (De-emphasized to force focus on the form) */}
        <button 
          onClick={handleClose}
          type="button"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-[#161917] dark:hover:bg-gray-800 transition-colors z-50 p-2 rounded-full cursor-pointer"
          aria-label="Close popup"
        >
          <X size={16} strokeWidth={3} />
        </button>

        {/* Aggressive / High-Conversion Header */}
        <div className="px-8 pt-10 pb-6 relative z-10 bg-brand-bg dark:bg-[#161917] text-center border-b border-gray-100 dark:border-gray-800">
          <div className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-brand-alert/10 text-brand-alert rounded-full text-[11px] font-extrabold uppercase tracking-widest mb-6 animate-pulse border border-brand-alert/20">
            <Flame size={14} /> High Demand
          </div>
          
          <h3 className="font-black text-gray-900 dark:text-white text-3xl leading-tight mb-3 tracking-tight">
            Unlock Secret Pricing & Floor Plans
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            The best units never make it to the public market. Register now for <span className="text-brand-primary dark:text-brand-primaryDark font-bold">priority allocation</span> and <span className="text-brand-primary dark:text-brand-primaryDark font-bold">direct developer deals</span>.
          </p>
        </div>

        {/* Form Section */}
        <div className="px-8 py-8 relative z-20 bg-white dark:bg-[#111412]">
          {isSuccess ? (
            <div className="text-center py-6 animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="font-extrabold text-gray-900 dark:text-white text-xl mb-2">Access Granted!</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Our Senior Advisor is reviewing your slot and will call you instantly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-base placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  placeholder="Mobile Number"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold text-base placeholder-gray-400"
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-black rounded-xl transition-all duration-300 shadow-xl shadow-brand-primary/30 flex items-center justify-center disabled:opacity-70 text-lg group cursor-pointer"
              >
                {isSubmitting ? "Securing Access..." : (
                  <>Claim Priority Access <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
              
              {/* Trust Microcopy */}
              <div className="flex items-center justify-center gap-1.5 mt-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <Lock size={12} /> 100% Secure. Zero Spam.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};