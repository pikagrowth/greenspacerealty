"use client";

import React, { useState } from "react";
import { X, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CLOUDINARY_URLS } from "@/lib/constants";

// ==========================================
// ENTERPRISE TYPE DEFINITIONS
// ==========================================
interface BrochureGateFormProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

interface BrochureFormData {
  name: string;
  mobile: string;
}

export const BrochureGateForm: React.FC<BrochureGateFormProps> = ({ 
  isOpen, 
  onClose, 
  projectName = "the project" 
}) => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<BrochureFormData>({ 
    name: "", 
    mobile: "" 
  });

  if (!isOpen) return null;

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
        email: "Not Provided", // Standardized fallback for unified sheet
        enquiryType: "Brochure Download",
        unitType: projectName,
        budget: "Not Specified",
        timeline: "Not Specified",
        preferredVisitDate: "N/A",
        message: `Requested brochure download for ${projectName}.`,
        source: "brochure-download-form",
        leadPriority: "Medium Intent"
      };

      console.log("🚀 Initiating Secure Brochure Form Submission:", payload);

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
        console.log("✅ Brochure Form Submission Successful");
        setIsSuccess(true);
        
        // Trigger the actual PDF download/open
        if (CLOUDINARY_URLS.brochurePdf) {
          window.open(CLOUDINARY_URLS.brochurePdf, "_blank");
        } else {
          console.error("Brochure PDF URL is missing from constants.");
        }

        // Auto-close modal after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", mobile: "" });
          onClose();
        }, 3000);
      } else {
        console.error("❌ Brochure form API rejected the payload:", data.error);
        alert("Failed to unlock brochure. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("❌ Fatal network error during brochure submission:", error);
      alert("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // UI RENDER
  // ==========================================
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#161917] rounded-[2rem] shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          type="button" 
          aria-label="Close Brochure Modal"
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 p-2 bg-gray-100 hover:bg-gray-200 rounded-full z-50 dark:bg-[#111412] dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          // ==============================
          // SUCCESS STATE UI
          // ==============================
          <div className="p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner transition-colors">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">Brochure Unlocked!</h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium">The PDF is opening securely in a new tab.</p>
          </div>
        ) : (
          // ==============================
          // INTERACTIVE FORM UI
          // ==============================
          <div className="p-8 md:p-10">
            <div className="w-14 h-14 bg-brand-accent/10 dark:bg-brand-accentDark/20 text-brand-accent dark:text-brand-accentDark rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm">
              <FileText size={26} />
            </div>
            
            <h3 className="text-2xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">Download Floor Plans</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-light">
              Enter your details to instantly unlock the official brochure and pricing details for <strong className="text-gray-800 dark:text-gray-200">{projectName}</strong>.
            </p>
            
            <form onSubmit={handleManualSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors">
                  Your Name *
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

              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full py-6 text-base font-extrabold shadow-xl shadow-brand-primary/20 transition-all duration-300" 
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Unlocking PDF..." : "Unlock Brochure Now"}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <ShieldCheck size={12} /> 100% Secure. Zero Spam.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};