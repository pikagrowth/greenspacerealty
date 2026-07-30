// components/forms/BrochureGateForm.tsx
"use client";

import React, { useState } from "react";
import { X, CheckCircle2, FileText } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CLOUDINARY_URLS } from "@/lib/constants";

interface BrochureGateFormProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export const BrochureGateForm: React.FC<BrochureGateFormProps> = ({ 
  isOpen, 
  onClose,
  projectName = "the project"
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          enquiryType: "brochure-download",
          source: "brochure-download-form",
          unitType: projectName,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        
        // Trigger the PDF download in a new tab
        if (CLOUDINARY_URLS.brochurePdf) {
          window.open(CLOUDINARY_URLS.brochurePdf, "_blank");
        } else {
          console.error("Brochure PDF URL is missing from environment variables.");
        }

        // Auto-close modal after showing success state briefly
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", mobile: "" });
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Brochure form submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-[#161917] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-md overflow-hidden relative transition-colors duration-300 animate-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors z-50 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
        
        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center min-h-[350px]">
            <div className="w-16 h-16 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mb-4 transition-colors">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Brochure Unlocked!</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors">
              The PDF is opening in a new tab. Our advisor will also share it with you on WhatsApp shortly.
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="w-12 h-12 bg-brand-accent/10 dark:bg-brand-accentDark/20 text-brand-accent dark:text-brand-accentDark rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FileText size={24} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Download Floor Plans</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 transition-colors">
              Enter your details below to instantly unlock the full floor plan, master layout, and pricing PDF for {projectName}.
            </p>

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
              <div className="pt-2">
                <Button type="submit" className="w-full py-4" isLoading={isSubmitting}>
                  Unlock Brochure Now
                </Button>
              </div>
              <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-4 transition-colors">
                By downloading, you agree to receive property updates via WhatsApp.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};