"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const BuilderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    projectName: "",
    location: "",
    configuration: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.mobile) {
      alert("Name and Mobile are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        enquiryType: "seller-builder",
        source: "partner-with-us-page",
        leadPriority: "Builder Mandate",
        unitType: formData.configuration || "Not Specified",
        budget: formData.location || "Not Specified", 
        message: `Project: ${formData.projectName} | Details: ${formData.message}`,
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
        console.error("Builder form submission failed:", data.error);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network or server error during form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-[#161917] p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in duration-500 transition-colors">
        <div className="w-20 h-20 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Mandate Request Received</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
          Thank you for considering Greenspace Realty for your project. Our B2B partnership director will review your details and contact you shortly to schedule an initial feasibility discussion.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#161917] p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Request a Sole Selling Mandate</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
          Submit your project details for an initial feasibility review. We partner exclusively with developers committed to quality and timely delivery.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <Input
              label="Representative Name *"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <Input
              label="Mobile Number *"
              required
              type="tel"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1">
          <Input
            label="Email Address"
            type="email"
            placeholder="rahul@buildergroup.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <Input
              label="Project Name *"
              required
              placeholder="e.g. Shravan Siddhant"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <Input
              label="Project Location *"
              required
              placeholder="e.g. Old Panvel"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1">
          <Input
            label="Configuration (Optional)"
            placeholder="e.g. 1 & 2 BHK, Commercial Shops"
            value={formData.configuration}
            onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-brand-text dark:text-brand-textDark mb-1.5 transition-colors duration-300">
            Additional Details
          </label>
          <textarea
            rows={4}
            className="w-full rounded-xl border bg-brand-bg/50 dark:bg-brand-bgDark/50 px-4 py-3 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:bg-white dark:focus:bg-[#161917] focus:border-brand-primary dark:focus:border-brand-primaryDark focus:outline-none focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 transition-colors resize-none"
            placeholder="Tell us about the project status (upcoming/ongoing) and what kind of marketing support you are looking for..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full py-4 text-base shadow-lg" isLoading={isSubmitting}>
            Submit Partnership Request <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};