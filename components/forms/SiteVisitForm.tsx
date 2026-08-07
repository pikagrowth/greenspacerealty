"use client";

import React, { useState } from "react";
import { CheckCircle2, Calendar, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// ENTERPRISE TYPE DEFINITIONS
// ==========================================
interface SiteVisitFormProps {
  projectSlug: string;
  projectTitle: string;
  className?: string;
}

interface SiteVisitFormData {
  name: string;
  mobile: string;
  preferredVisitDate: string;
}

export const SiteVisitForm: React.FC<SiteVisitFormProps> = ({ 
  projectSlug, 
  projectTitle,
  className = "" 
}) => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<SiteVisitFormData>({
    name: "",
    mobile: "",
    preferredVisitDate: "",
  });

  // Get today's date formatted for the 'min' attribute of the date picker
  const today = new Date().toISOString().split("T")[0];

  // ==========================================
  // HANDLERS & VALIDATION
  // ==========================================
  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    // 1. Strict Name Validation
    if (!formData.name || formData.name.trim().length < 2) {
      alert("Please enter a valid full name.");
      return;
    }

    // 2. Strict Mobile Validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // 3. Date Validation
    if (!formData.preferredVisitDate) {
      alert("Please select a preferred date for your site visit.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 4. Standardized Enterprise Payload Mapping
      const payload = {
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: "Not Provided", // Standardized fallback for unified sheet
        enquiryType: "Site Visit",
        unitType: projectTitle || "Not Specified",
        budget: "Not Specified", // Standardized fallback
        timeline: "Not Specified", // Standardized fallback
        preferredVisitDate: formData.preferredVisitDate, // Explicit visit date mapping
        message: `Requested a priority site visit for ${projectTitle || 'the project'} on ${formData.preferredVisitDate}.`,
        source: "site-visit-form", 
        leadPriority: "High Intent"
      };

      console.log("🚀 Initiating Secure Site Visit Submission:", payload);

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        console.log("✅ Site Visit Form Submission Successful");
        setIsSuccess(true);
      } else {
        console.error("❌ Site visit form API rejected the payload:", data.error);
        alert("Our servers are currently busy. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("❌ Fatal network error during site visit submission:", error);
      alert("A network error occurred. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // SUCCESS STATE UI
  // ==========================================
  if (isSuccess) {
    return (
      <div className={`bg-white dark:bg-[#161917] p-8 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in-95 duration-500 transition-colors ${className}`}>
        <div className="w-16 h-16 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner transition-colors">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight transition-colors">Visit Requested!</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
          We have successfully received your request to visit <strong className="text-gray-900 dark:text-gray-200">{projectTitle}</strong>. Our site manager will call you shortly to confirm the exact timing and arrangements.
        </p>
      </div>
    );
  }

  // ==========================================
  // INTERACTIVE FORM UI
  // ==========================================
  return (
    <div className={`bg-white dark:bg-[#161917] p-6 sm:p-8 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden ${className}`}>
      
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 dark:bg-brand-primaryDark/5 rounded-bl-full pointer-events-none -z-0"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-brand-primary/10 dark:bg-brand-primaryDark/20 text-brand-primary dark:text-brand-primaryDark rounded-xl flex items-center justify-center shrink-0 transition-colors">
            <MapPin size={24} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">Book a Site Visit</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">
              Experience {projectTitle} in person.
            </p>
          </div>
        </div>

        <form onSubmit={handleManualSubmit} className="space-y-5">
          {/* Name Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
              Your Full Name *
            </label>
            <input 
              type="text"
              placeholder="e.g. Rahul Sharma" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
            />
          </div>

          {/* Mobile Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
              Mobile Number *
            </label>
            <input 
              type="tel" 
              maxLength={10}
              placeholder="10-digit number" 
              value={formData.mobile} 
              onChange={(e) => {
                // Ensure only numbers are entered
                const numericValue = e.target.value.replace(/\D/g, '');
                setFormData({ ...formData, mobile: numericValue });
              }} 
              className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
            />
          </div>

          {/* Date Picker Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
              Preferred Visit Date *
            </label>
            <div className="relative group">
              <input 
                type="date" 
                min={today} 
                value={formData.preferredVisitDate} 
                onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })} 
                className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium cursor-pointer" 
              />
              <Calendar 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors pointer-events-none" 
                size={18} 
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full py-6 text-base font-extrabold shadow-xl shadow-brand-primary/20 transition-all duration-300" 
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Scheduling Securely..." : "Confirm Site Visit"}
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            <ShieldCheck size={12} /> Free Site Pickup Available
          </div>
        </form>
      </div>
    </div>
  );
};