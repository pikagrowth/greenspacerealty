"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Home, Wallet, TrendingUp, CheckCircle2, Building2 } from "lucide-react";

export const StepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    enquiryType: "",
    unitType: "",
    budget: "",
    timeline: "",
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "website-step-form"
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
      <div className="bg-white dark:bg-[#111412] p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 text-center animate-in zoom-in-95 duration-500 h-full flex flex-col items-center justify-center min-h-[500px] transition-colors">
        <div className="w-24 h-24 bg-brand-success/10 dark:bg-brand-successDark/20 text-brand-success dark:text-brand-successDark rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Request Received</h3>
        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light max-w-md mx-auto">
          Thank you for reaching out. Our property advisor is curating a list of options that match your exact goals and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#111412] p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors duration-300 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-bl-full pointer-events-none -z-0"></div>

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

        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
          
          {/* STEP 1: ENQUIRY TYPE */}
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">How can we help you?</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base font-light">Select the option that best describes your real estate goal.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "buy", title: "Buy a Home", icon: <Home size={24} />, desc: "Primary or 2nd home" },
                  { id: "invest", title: "Land Investment", icon: <TrendingUp size={24} />, desc: "High-yield assets" },
                  { id: "sell", title: "Sell Property", icon: <Wallet size={24} />, desc: "List your property" },
                  { id: "builder", title: "Builder Mandate", icon: <Building2 size={24} />, desc: "B2B Sales Engine" }
                ].map((opt) => (
                  <label 
                    key={opt.id} 
                    className={`flex flex-col items-start p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                      formData.enquiryType === opt.id 
                        ? "border-brand-primary dark:border-brand-primaryDark bg-brand-primary/5 dark:bg-brand-primaryDark/10 shadow-md" 
                        : "border-gray-100 dark:border-gray-800 hover:border-brand-primary/40 bg-gray-50 dark:bg-[#161917]"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="enquiryType" 
                      value={opt.id} 
                      className="sr-only"
                      checked={formData.enquiryType === opt.id}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      required
                    />
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      formData.enquiryType === opt.id ? "bg-brand-primary text-white" : "bg-white dark:bg-[#111] text-gray-400 border border-gray-200 dark:border-gray-700"
                    }`}>
                      {opt.icon}
                    </div>
                    <div>
                      <h4 className={`font-extrabold text-lg mb-1 transition-colors ${formData.enquiryType === opt.id ? "text-brand-primary dark:text-brand-primaryDark" : "text-gray-900 dark:text-gray-100"}`}>
                        {opt.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">{opt.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
              
              <div className="pt-2">
                <button type="button" onClick={nextStep} disabled={!formData.enquiryType} className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-primary/20 flex items-center justify-center text-lg">
                  Continue <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PROPERTY REQUIREMENTS */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Tell us your criteria</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base font-light">We use this to filter out the noise and find exact matches.</p>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Property Type *</label>
                  <select 
                    required
                    value={formData.unitType}
                    onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#161917] px-5 py-4 text-gray-900 dark:text-white font-semibold focus:border-brand-primary focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select property type</option>
                    <option value="1 BHK">1 BHK Apartment</option>
                    <option value="2 BHK">2 BHK Apartment</option>
                    <option value="3 BHK+">3 BHK+ Apartment</option>
                    <option value="Villa / Bungalow">Villa / Independent House</option>
                    <option value="Land / Plot">Land / Plot</option>
                    <option value="Commercial">Commercial (Shop / Office)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Budget Range *</label>
                  <select 
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#161917] px-5 py-4 text-gray-900 dark:text-white font-semibold focus:border-brand-primary focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none cursor-pointer"
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
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#161917] px-5 py-4 text-gray-900 dark:text-white font-semibold focus:border-brand-primary focus:ring-2 focus:ring-brand-primary outline-none transition-all appearance-none cursor-pointer"
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
                <button type="button" onClick={prevStep} className="px-6 py-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-[#161917] hover:text-brand-primary transition-all flex items-center justify-center">
                  <ArrowLeft size={20} />
                </button>
                <button type="button" onClick={nextStep} disabled={!formData.unitType || !formData.budget || !formData.timeline} className="flex-1 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg shadow-brand-primary/20 flex items-center justify-center text-lg">
                  Next Step <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT INFO */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in duration-500">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Where to send details?</h3>
                <p className="text-gray-500 dark:text-gray-400 text-base font-light">Your information is strictly confidential. No spam.</p>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Your Full Name *</label>
                  <input 
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold placeholder-gray-400" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Mobile Number *</label>
                  <input 
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="10-digit number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold placeholder-gray-400" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email"
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#161917] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all text-gray-900 dark:text-white font-semibold placeholder-gray-400" 
                  />
                </div>
              </div>

              <div className="pt-2 flex gap-4">
                <button type="button" onClick={prevStep} className="px-6 py-4 rounded-xl border-2 border-gray-100 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-[#161917] hover:text-brand-primary transition-all flex items-center justify-center">
                  <ArrowLeft size={20} />
                </button>
                <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold rounded-xl transition-all duration-300 shadow-xl shadow-brand-primary/30 flex items-center justify-center disabled:opacity-70 text-lg">
                  {isSubmitting ? "Processing..." : "View Matches Now"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};