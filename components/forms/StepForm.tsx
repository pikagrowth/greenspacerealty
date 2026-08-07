"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  ArrowLeft, 
  Home, 
  Wallet, 
  TrendingUp, 
  CheckCircle2, 
  Building2,
  ShieldCheck
} from "lucide-react";

// Enterprise-grade type definitions for strict state management
interface StepFormData {
  enquiryType: string;
  unitType: string;
  budget: string;
  timeline: string;
  name: string;
  mobile: string;
  email: string;
  message: string;
}

export const StepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<StepFormData>({
    enquiryType: "", 
    unitType: "", 
    budget: "", 
    timeline: "", 
    name: "", 
    mobile: "", 
    email: "", 
    message: "",
  });

  // Smooth step navigation
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Robust manual validation and submission handler
  const handleManualSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 1. Strict Name Validation
    if (!formData.name || formData.name.trim().length < 2) {
      alert("Please enter a valid Full Name.");
      return;
    }

    // 2. Strict Mobile Number Validation (Exactly 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit Mobile Number without spaces or country codes.");
      return;
    }

    // 3. Optional Email Validation
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid Email Address.");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Standardized enterprise payload mapping
      const payload = {
        name: formData.name.trim(),
        mobile: formData.mobile.trim(),
        email: formData.email.trim() || "Not Provided",
        enquiryType: formData.enquiryType || "General Enquiry",
        unitType: formData.unitType || "Not Specified",
        budget: formData.budget || "Not Specified",
        timeline: formData.timeline || "Not Specified",
        message: formData.message || "N/A",
        source: "website-navbar-step-form",
        leadPriority: "High Intent"
      };

      console.log("🚀 Initiating Secure Step Form Submission:", payload);

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
        console.log("✅ Step Form Submission Successful");
        setIsSuccess(true);
      } else {
        console.error("❌ Step form API rejected the payload:", data.error);
        alert("Our servers are currently busy. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("❌ Fatal network error during submission:", error);
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
      <div className="bg-white dark:bg-[#111412] p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 text-center min-h-[500px] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500 transition-colors">
        <div className="w-24 h-24 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mb-8 shadow-inner">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">Request Received</h3>
        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md mx-auto">
          Thank you for choosing Greenspace Realty. Our senior property advisor will review your exact requirements and be in touch shortly.
        </p>
      </div>
    );
  }

  // ==========================================
  // INTERACTIVE MULTI-STEP UI
  // ==========================================
  return (
    <div className="bg-white dark:bg-[#111412] p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 min-h-[500px] flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
      
      {/* Premium Decorative Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 dark:bg-brand-primaryDark/10 rounded-bl-full pointer-events-none -z-0"></div>

      <div className="relative z-10">
        
        {/* Progress Indicator */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-brand-primary dark:text-brand-primaryDark uppercase tracking-widest">
              Step 0{step} / 03
            </span>
            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              {step === 1 ? "Your Goal" : step === 2 ? "Preferences" : "Contact Details"}
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-brand-primary dark:bg-brand-primaryDark h-full transition-all duration-700 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          
          {/* ==============================
              STEP 1: ENQUIRY TYPE 
          ============================== */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div>
                <h3 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">How can we help you?</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base font-light">Select the option that best describes your real estate goal.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "Buy a Home", title: "Buy a Home", icon: <Home size={24} />, desc: "Primary or 2nd home" },
                  { id: "Land Investment", title: "Land Investment", icon: <TrendingUp size={24} />, desc: "High-yield assets" },
                  { id: "Sell Property", title: "Sell Property", icon: <Wallet size={24} />, desc: "List your property" },
                  { id: "Developer Mandate", title: "Builder Mandate", icon: <Building2 size={24} />, desc: "B2B Sales Engine" }
                ].map((opt) => (
                  <div 
                    key={opt.id} 
                    onClick={() => setFormData({ ...formData, enquiryType: opt.id })} 
                    className={`flex flex-col items-start p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                      formData.enquiryType === opt.id 
                        ? "border-brand-primary dark:border-brand-primaryDark bg-brand-primary/5 dark:bg-brand-primaryDark/10 shadow-md" 
                        : "border-gray-100 dark:border-gray-800 hover:border-brand-primary/40 dark:hover:border-brand-primaryDark/40 bg-gray-50 dark:bg-[#161917]"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      formData.enquiryType === opt.id 
                        ? "bg-brand-primary dark:bg-brand-primaryDark text-white" 
                        : "bg-white dark:bg-[#111] text-gray-400 border border-gray-200 dark:border-gray-700 group-hover:text-brand-primary"
                    }`}>
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className={`font-extrabold text-lg mb-1 transition-colors ${
                        formData.enquiryType === opt.id ? "text-brand-primary dark:text-brand-primaryDark" : "text-gray-900 dark:text-white"
                      }`}>
                        {opt.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-2">
                <button 
                  type="button" 
                  onClick={nextStep} 
                  disabled={!formData.enquiryType} 
                  className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg shadow-brand-primary/20 transition-all duration-300"
                >
                  Continue <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* ==============================
              STEP 2: PREFERENCES 
          ============================== */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div>
                <h3 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">Tell us your criteria</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base font-light">We use this to filter out the noise and find exact matches.</p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Property Type *</label>
                  <select 
                    value={formData.unitType} 
                    onChange={(e) => setFormData({ ...formData, unitType: e.target.value })} 
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#161917] px-5 py-4 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Select property type</option>
                    <option value="1 BHK">1 BHK Apartment</option>
                    <option value="2 BHK">2 BHK Apartment</option>
                    <option value="3 BHK+">3 BHK+ Apartment</option>
                    <option value="Villa / Bungalow">Villa / Independent House</option>
                    <option value="Land / Plot">Land / Plot</option>
                    <option value="Commercial">Commercial Space</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Budget Range *</label>
                  <select 
                    value={formData.budget} 
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })} 
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#161917] px-5 py-4 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Select your budget</option>
                    <option value="Under 50 Lakhs">Under 50 Lakhs</option>
                    <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                    <option value="1 Crore - 2 Crores">1 Crore - 2 Crores</option>
                    <option value="2 Crores+">2 Crores+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Timeline *</label>
                  <select 
                    value={formData.timeline} 
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} 
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#161917] px-5 py-4 text-gray-900 dark:text-white font-semibold focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option value="" disabled>When do you want to close?</option>
                    <option value="Immediate (Hot)">Immediate (Ready to invest now)</option>
                    <option value="1-3 Months">1 to 3 Months</option>
                    <option value="3-6 Months">3 to 6 Months</option>
                    <option value="Just Exploring">Just exploring options</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex gap-4">
                <button 
                  type="button" 
                  onClick={prevStep} 
                  className="px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-[#161917] hover:text-brand-primary transition-all flex items-center justify-center group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  type="button" 
                  onClick={nextStep} 
                  disabled={!formData.unitType || !formData.budget || !formData.timeline} 
                  className="flex-1 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-lg shadow-brand-primary/20 transition-all duration-300"
                >
                  Next Step <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* ==============================
              STEP 3: CONTACT DETAILS 
          ============================== */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div>
                <h3 className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white tracking-tight">Where to send details?</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base font-light">Your information is strictly confidential. No spam.</p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Your Full Name *</label>
                  <input 
                    type="text"
                    placeholder="e.g. Rahul Sharma" 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold placeholder-gray-400" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Mobile Number *</label>
                  <input 
                    type="tel" 
                    placeholder="10-digit number" 
                    maxLength={10}
                    value={formData.mobile} 
                    onChange={(e) => {
                      // Only allow numeric input
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, mobile: val });
                    }} 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold placeholder-gray-400" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="rahul@example.com" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold placeholder-gray-400" 
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-4">
                <button 
                  type="button" 
                  onClick={prevStep} 
                  className="px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-[#161917] hover:text-brand-primary transition-all flex items-center justify-center group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  type="button" 
                  onClick={handleManualSubmit} 
                  disabled={isSubmitting || !formData.name || formData.mobile.length !== 10} 
                  className="flex-1 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl disabled:opacity-70 flex items-center justify-center text-lg shadow-xl shadow-brand-primary/30 transition-all duration-300"
                >
                  {isSubmitting ? "Securely Processing..." : "View Matches Now"}
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-1.5 mt-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <ShieldCheck size={14} /> 100% Secure. Zero Spam.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};