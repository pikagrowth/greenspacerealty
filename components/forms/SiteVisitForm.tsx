// components/forms/SiteVisitForm.tsx
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          enquiryType: "buyer", // Assuming site visits are primarily buyers
          source: "site-visit-form",
          unitType: projectTitle,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Site visit form submission failed", error);
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Your Name *"
          placeholder="e.g. Rahul Sharma"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        
        <Input
          label="Mobile Number *"
          placeholder="10-digit number"
          type="tel"
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-brand-text dark:text-brand-textDark mb-1.5 transition-colors">
            Preferred Visit Date *
          </label>
          <div className="relative">
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]} // Prevent selecting past dates
              className="w-full h-11 pl-11 pr-4 rounded-xl border bg-brand-bg/50 dark:bg-brand-bgDark/50 focus:bg-white dark:focus:bg-[#161917] border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark transition-colors"
              value={formData.preferredVisitDate}
              onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })}
            />
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" size={18} />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full py-4 shadow-md" isLoading={isSubmitting}>
            Schedule Visit
          </Button>
        </div>
        <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-2 transition-colors">
          Free site pickup & drop available on request.
        </p>
      </form>
    </div>
  );
};