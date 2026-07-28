"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const QuickPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });

  useEffect(() => {
    // Show after 8 seconds if not previously dismissed
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("greenspace_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    localStorage.setItem("greenspace_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          enquiryType: "general",
          source: "popup",
          tab: "Quick Leads"
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => handleClose(), 3000);
      }
    } catch (error) {
      console.error("Popup submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 md:bottom-28 md:right-6 z-[100] pointer-events-auto w-[calc(100%-2rem)] md:w-80 animate-in slide-in-from-bottom-10 fade-in duration-500 drop-shadow-2xl">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative pointer-events-auto flex flex-col">
        
        {/* Improved Close Button hit area and z-index */}
        <button 
          onClick={handleClose}
          type="button"
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors z-50 cursor-pointer p-1.5 bg-black/10 hover:bg-black/20 rounded-full"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>
        
        <div className="p-5 bg-brand-primary text-white relative z-10 pointer-events-none">
          <h3 className="font-heading font-bold text-lg mb-1 pr-8">Looking for a property or expert advice?</h3>
          <p className="text-xs text-brand-accent">Drop your number, our advisor will call you back.</p>
        </div>

        <div className="p-5 relative z-20 bg-white pointer-events-auto">
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="font-medium text-gray-900">Got it! We'll call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="pointer-events-auto">
                <Input
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="pointer-events-auto">
                <Input
                  placeholder="Mobile Number"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full text-sm py-2.5 pointer-events-auto cursor-pointer" isLoading={isSubmitting}>
                Get Callback
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};