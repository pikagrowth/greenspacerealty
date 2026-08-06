"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Home, Wallet, TrendingUp, CheckCircle2, Building2 } from "lucide-react";

export const StepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    enquiryType: "", unitType: "", budget: "", timeline: "", name: "", mobile: "", email: "", message: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleManualSubmit = async () => {
    // Manual validation
    if (!formData.name || formData.name.trim() === "") {
      alert("Your Name is required.");
      return;
    }
    if (!formData.mobile || formData.mobile.length < 10) {
      alert("A valid Mobile Number is required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        enquiryType: formData.enquiryType || "buy",
        unitType: formData.unitType || "Any",
        budget: formData.budget || "Any",
        timeline: formData.timeline || "Any",
        message: formData.message,
        source: "website-step-form",
        leadPriority: "High Intent"
      };

      console.log("Submitting Step Form:", payload);

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        console.error("Step form failed:", data.error);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-[#111412] p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 text-center min-h-[500px] flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-brand-success/10 text-brand-success rounded-full flex items-center justify-center mb-8"><CheckCircle2 size={48} /></div>
        <h3 className="text-4xl font-extrabold mb-4 dark:text-white">Request Received</h3>
        <p className="text-gray-500 text-lg">Our property advisor will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#111412] p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-bl-full pointer-events-none -z-0"></div>

      <div className="relative z-10">
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-brand-primary uppercase">Step 0{step} / 03</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-brand-primary h-full transition-all duration-700" style={{ width: `${(step / 3) * 100}%` }}></div>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in">
              <h3 className="text-3xl font-extrabold mb-2 dark:text-white">How can we help you?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "buy", title: "Buy a Home", icon: <Home size={24} />, desc: "Primary or 2nd home" },
                  { id: "invest", title: "Land Investment", icon: <TrendingUp size={24} />, desc: "High-yield assets" },
                  { id: "sell", title: "Sell Property", icon: <Wallet size={24} />, desc: "List your property" },
                  { id: "builder", title: "Builder Mandate", icon: <Building2 size={24} />, desc: "B2B Sales Engine" }
                ].map((opt) => (
                  <div key={opt.id} onClick={() => setFormData({ ...formData, enquiryType: opt.id })} className={`flex flex-col items-start p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.enquiryType === opt.id ? "border-brand-primary bg-brand-primary/5" : "border-gray-100 hover:border-brand-primary/40 dark:border-gray-800 dark:bg-[#161917]"}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${formData.enquiryType === opt.id ? "bg-brand-primary text-white" : "bg-white text-gray-400 border dark:bg-[#111]"}`}>{opt.icon}</div>
                    <div><h4 className="font-extrabold text-lg mb-1 dark:text-white">{opt.title}</h4></div>
                  </div>
                ))}
              </div>
              <button onClick={nextStep} disabled={!formData.enquiryType} className="w-full py-4 bg-brand-primary text-white font-extrabold rounded-xl disabled:opacity-50 flex items-center justify-center text-lg">
                Continue <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in">
              <h3 className="text-3xl font-extrabold mb-2 dark:text-white">Tell us your criteria</h3>
              <div className="space-y-5">
                <select value={formData.unitType} onChange={(e) => setFormData({ ...formData, unitType: e.target.value })} className="w-full rounded-xl border bg-gray-50 px-5 py-4 font-semibold outline-none dark:bg-[#161917] dark:text-white dark:border-gray-800">
                  <option value="" disabled>Select property type</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="Commercial">Commercial</option>
                </select>
                <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full rounded-xl border bg-gray-50 px-5 py-4 font-semibold outline-none dark:bg-[#161917] dark:text-white dark:border-gray-800">
                  <option value="" disabled>Select your budget</option>
                  <option value="Under 50 Lakhs">Under 50 Lakhs</option>
                  <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                </select>
                <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className="w-full rounded-xl border bg-gray-50 px-5 py-4 font-semibold outline-none dark:bg-[#161917] dark:text-white dark:border-gray-800">
                  <option value="" disabled>When do you want to close?</option>
                  <option value="Immediate">Immediate</option>
                  <option value="1-3 Months">1 to 3 Months</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="px-6 py-4 rounded-xl border-2 text-gray-500 flex items-center justify-center dark:border-gray-800"><ArrowLeft size={20} /></button>
                <button onClick={nextStep} disabled={!formData.unitType || !formData.budget || !formData.timeline} className="flex-1 py-4 bg-brand-primary text-white font-extrabold rounded-xl disabled:opacity-50 flex items-center justify-center text-lg">
                  Next Step <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-8 fade-in">
              <h3 className="text-3xl font-extrabold mb-2 dark:text-white">Where to send details?</h3>
              <div className="space-y-5">
                <input placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none font-semibold dark:bg-[#161917] dark:border-gray-800 dark:text-white" />
                <input type="tel" placeholder="Mobile Number *" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none font-semibold dark:bg-[#161917] dark:border-gray-800 dark:text-white" />
                <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none font-semibold dark:bg-[#161917] dark:border-gray-800 dark:text-white" />
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="px-6 py-4 rounded-xl border-2 text-gray-500 flex items-center justify-center dark:border-gray-800"><ArrowLeft size={20} /></button>
                <button onClick={handleManualSubmit} disabled={isSubmitting} className="flex-1 py-4 bg-brand-primary text-white font-extrabold rounded-xl disabled:opacity-70 flex items-center justify-center text-lg">
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};