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
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          enquiryType: "seller-builder",
          source: "partner-with-us-page",
          tab: "Builder Leads",
          // Mapping B2B fields to the existing database columns safely
          unitType: formData.configuration,
          budget: formData.location, 
          message: `Project: ${formData.projectName} | Details: ${formData.message}`,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-brand-success rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mandate Request Received</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Thank you for considering Greenspace Realty. Our B2B partnership director will review your project details and contact you shortly to schedule an initial feasibility discussion.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request a Project Consultation</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Fill out the details below to discuss a potential sole-selling mandate for your upcoming or ongoing project.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Representative Name *</label>
            <Input
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Mobile Number *</label>
            <Input
              required
              type="tel"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              placeholder="10-digit number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
          <Input
            type="email"
            placeholder="rahul@buildergroup.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Project Name *</label>
            <Input
              required
              placeholder="e.g. Shravan Siddhant"
              value={formData.projectName}
              onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Project Location *</label>
            <Input
              required
              placeholder="e.g. Old Panvel"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Configuration (Optional)</label>
          <Input
            placeholder="e.g. 1 & 2 BHK, Commercial Shops"
            value={formData.configuration}
            onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Additional Details</label>
          <textarea
            rows={4}
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:border-brand-primary dark:focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-primary dark:focus:ring-brand-accent transition-colors resize-none"
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