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

export const BrochureGateForm: React.FC<BrochureGateFormProps> = ({ isOpen, onClose, projectName = "the project" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // CRITICAL: Stops page reload
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        enquiryType: "brochure-download",
        source: "brochure-download-form",
        unitType: projectName,
        leadPriority: "Medium Intent"
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        if (CLOUDINARY_URLS.brochurePdf) {
          window.open(CLOUDINARY_URLS.brochurePdf, "_blank");
        }
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", mobile: "" });
          onClose();
        }, 3000);
      } else {
        console.error("Form failed:", data.error);
        alert("Failed to unlock brochure. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-[#161917] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-md overflow-hidden relative">
        <button onClick={onClose} type="button" className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full z-50 dark:bg-gray-800 dark:hover:text-white">
          <X size={18} />
        </button>
        {isSuccess ? (
          <div className="p-10 text-center flex flex-col items-center justify-center min-h-[350px]">
            <div className="w-16 h-16 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} /></div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Brochure Unlocked!</h3>
            <p className="text-gray-600 dark:text-gray-400">The PDF is opening in a new tab.</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-2xl flex items-center justify-center mb-6"><FileText size={24} /></div>
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Download Floor Plans</h3>
            <p className="text-sm text-gray-600 mb-8 dark:text-gray-400">Enter your details to instantly unlock the brochure for {projectName}.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <Input label="Mobile Number *" type="tel" required pattern="[0-9]{10}" title="10-digit mobile number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
              <div className="pt-2">
                <Button type="submit" className="w-full py-4" isLoading={isSubmitting}>Unlock Brochure Now</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};