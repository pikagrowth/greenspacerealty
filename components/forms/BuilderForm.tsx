"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// ENTERPRISE TYPE DEFINITIONS
// ==========================================
interface BuilderFormData {
  name: string;
  mobile: string;
  email: string;
  projectName: string;
  location: string;
  configuration: string;
  message: string;
}

export const BuilderForm = () => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<BuilderFormData>({
    name: "",
    mobile: "",
    email: "",
    projectName: "",
    location: "",
    configuration: "",
    message: "",
  });

  // ==========================================
  // HANDLERS & VALIDATION
  // ==========================================
  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Strict Requirement Checks
    if (!formData.name || formData.name.trim().length < 2) {
      alert("Please enter the Representative's Name.");
      return;
    }
    if (!formData.projectName || formData.projectName.trim() === "") {
      alert("Please enter the Project Name.");
      return;
    }
    if (!formData.location || formData.location.trim() === "") {
      alert("Please enter the Project Location.");
      return;
    }

    // 2. Strict Mobile Validation (Exactly 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 3. Standardized Enterprise Payload Mapping (Unified 12-Column Sheet)
      const payload = {
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim() || "Not Provided",
        enquiryType: "Builder Mandate",
        unitType: `${formData.projectName.trim()} (${formData.configuration || "Config Not Specified"})`,
        budget: "N/A", // Not applicable for B2B
        timeline: "N/A", // Not applicable for B2B
        preferredVisitDate: "N/A",
        message: `Project Location: ${formData.location.trim()} | Additional Details: ${formData.message.trim() || "None"}`,
        source: "partner-with-us-page",
        leadPriority: "Builder Mandate", 
      };

      console.log("🚀 Initiating Secure Builder Mandate Submission:", payload);

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
        console.log("✅ Builder Mandate Form Submission Successful");
        setIsSuccess(true);
      } else {
        console.error("❌ Builder form API rejected the payload:", data.error);
        alert("Our servers are currently busy. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("❌ Fatal network error during builder submission:", error);
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
      <div className="bg-white dark:bg-[#161917] p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in-95 duration-500 transition-colors">
        <div className="w-20 h-20 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner transition-colors">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">Mandate Request Received</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md mx-auto transition-colors">
          Thank you for considering Greenspace Realty for your project. Our B2B Partnership Director will review your details and contact you shortly.
        </p>
      </div>
    );
  }

  // ==========================================
  // INTERACTIVE FORM UI
  // ==========================================
  return (
    <div className="bg-white dark:bg-[#161917] p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 dark:bg-brand-primaryDark/5 rounded-bl-full pointer-events-none -z-0"></div>

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-14 h-14 bg-brand-primary/10 dark:bg-brand-primaryDark/20 text-brand-primary dark:text-brand-primaryDark rounded-2xl flex items-center justify-center shrink-0 transition-colors">
            <Building2 size={26} />
          </div>
          <div className="pt-1 text-center sm:text-left">
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-1 tracking-tight transition-colors">Request Consultation</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium transition-colors">
              Submit your project details for an initial review.
            </p>
          </div>
        </div>

        <form onSubmit={handleManualSubmit} className="space-y-6">
          
          {/* Section 1: Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
                Representative Name *
              </label>
              <input 
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
              />
            </div>
            
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
                  const numericValue = e.target.value.replace(/\D/g, '');
                  setFormData({ ...formData, mobile: numericValue });
                }}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
              Email Address (Optional)
            </label>
            <input 
              type="email"
              placeholder="rahul@buildergroup.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
            />
          </div>

          <div className="w-full h-px bg-gray-100 dark:bg-gray-800 my-4"></div>

          {/* Section 2: Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
                Project Name *
              </label>
              <input 
                type="text"
                placeholder="e.g. Shravan Siddhant"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
                Project Location *
              </label>
              <input 
                type="text"
                placeholder="e.g. Old Panvel"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
              Configuration (Optional)
            </label>
            <input 
              type="text"
              placeholder="e.g. 1 & 2 BHK, Commercial Shops"
              value={formData.configuration}
              onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors duration-300">
              Additional Details (Optional)
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about the project status (upcoming/ongoing) and what kind of marketing support you are looking for..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111412] px-4 py-4 focus:bg-white dark:focus:bg-[#161917] focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all text-gray-900 dark:text-white font-medium placeholder-gray-400 resize-none"
            />
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full py-6 text-base font-extrabold shadow-xl shadow-brand-primary/20 transition-all duration-300" 
              isLoading={isSubmitting}
            >
              {isSubmitting ? "Processing Application..." : "Submit Partnership Request"} 
              {!isSubmitting && <ArrowRight size={18} className="ml-2" />}
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            <ShieldCheck size={12} /> Strict NDA & Confidentiality Maintained
          </div>
        </form>
      </div>
    </div>
  );
};