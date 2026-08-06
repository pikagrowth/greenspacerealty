"use client";

import React, { useState } from "react";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SiteVisitFormProps {
  projectSlug: string;
  projectTitle: string;
  className?: string;
}

export const SiteVisitForm: React.FC<SiteVisitFormProps> = ({ 
  projectSlug, 
  projectTitle,
  className = "" 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    preferredVisitDate: "",
  });

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 

    if (!formData.name || formData.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    if (!formData.mobile || formData.mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.preferredVisitDate) {
      alert("Please select a preferred visit date.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        preferredVisitDate: formData.preferredVisitDate,
        enquiryType: "site-visit",
        source: "site-visit-form", 
        unitType: projectTitle || "Not Specified",
        leadPriority: "High Intent"
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        console.error("Site visit form submission failed:", data.error);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network error during site visit submission:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-white dark:bg-[#161917] p-8 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in duration-500 transition-colors ${className}`}>
        <div className="w-16 h-16 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Visit Requested!</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
          We have received your request to visit {projectTitle}. Our site manager will call you shortly to confirm the exact timing.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-[#161917] p-6 sm:p-8 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 transition-colors duration-300 ${className}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-brand-primary/10 dark:bg-brand-primaryDark/20 text-brand-primary dark:text-brand-primaryDark rounded-xl flex items-center justify-center shrink-0 transition-colors">
          <MapPin size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">Book a Site Visit</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors">
            Experience {projectTitle} in person.
          </p>
        </div>
      </div>

      <form onSubmit={handleManualSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Your Name *</label>
          <input 
            placeholder="e.g. Rahul Sharma" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            className="w-full h-11 px-4 rounded-xl border bg-gray-50 focus:bg-white outline-none dark:bg-[#161917] dark:border-gray-800 dark:text-white"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Mobile Number *</label>
          <input 
            type="tel" 
            placeholder="10-digit number" 
            value={formData.mobile} 
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} 
            className="w-full h-11 px-4 rounded-xl border bg-gray-50 focus:bg-white outline-none dark:bg-[#161917] dark:border-gray-800 dark:text-white"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Preferred Visit Date *</label>
          <div className="relative">
            <input 
              type="date" 
              min={new Date().toISOString().split("T")[0]} 
              className="w-full h-11 pl-11 pr-4 rounded-xl border bg-gray-50 focus:bg-white outline-none dark:bg-[#161917] dark:border-gray-800 dark:text-white" 
              value={formData.preferredVisitDate} 
              onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })} 
            />
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full py-4 shadow-md" isLoading={isSubmitting}>
            Schedule Visit
          </Button>
        </div>
      </form>
    </div>
  );
};