"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Home, Wallet, TrendingUp, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

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
      <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 text-center animate-in fade-in zoom-in duration-500 h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-brand-success rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Request Received</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Thank you for reaching out. Our property advisor has received your requirements and will contact you shortly with the best matching options.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-brand-primary dark:text-brand-accent uppercase tracking-wider">
            Step {step} of 3
          </span>
          <span className="text-xs font-medium text-gray-400">
            {step === 1 ? "Intent" : step === 2 ? "Requirements" : "Contact"}
          </span>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-brand-primary dark:bg-brand-accent h-full transition-all duration-500 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        
        {/* STEP 1: ENQUIRY TYPE */}
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">How can we help you?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Select the option that best describes your goal.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { id: "buy", title: "Buy a Property", icon: <Home size={20} />, desc: "Looking for a new or resale home" },
                { id: "invest", title: "Investment", icon: <TrendingUp size={20} />, desc: "Looking for high-ROI opportunities" },
                { id: "sell", title: "Sell a Property", icon: <Wallet size={20} />, desc: "Want to list my property or land" }
              ].map((opt) => (
                <label 
                  key={opt.id} 
                  className={`flex items-start p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.enquiryType === opt.id 
                      ? "border-brand-primary dark:border-brand-accent bg-brand-primary/5 dark:bg-brand-accent/10 shadow-sm" 
                      : "border-gray-200 dark:border-gray-700 hover:border-brand-primary/50 dark:hover:border-brand-accent/50"
                  }`}
                >
                  <input 
                    type="radio" 
                    name="enquiryType" 
                    value={opt.id} 
                    className="mt-1 sr-only"
                    checked={formData.enquiryType === opt.id}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    required
                  />
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 ${
                    formData.enquiryType === opt.id ? "bg-brand-primary dark:bg-brand-accent text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                  }`}>
                    {opt.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-base ${formData.enquiryType === opt.id ? "text-brand-primary dark:text-brand-accent" : "text-gray-900 dark:text-gray-200"}`}>
                      {opt.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </div>
            
            <div className="pt-4">
              <Button type="button" onClick={nextStep} disabled={!formData.enquiryType} className="w-full py-4">
                Continue <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: PROPERTY REQUIREMENTS (CRITICAL FOR SCORING) */}
        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tell us about your requirements</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">This helps us find the exact match for you.</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Property Type *</label>
                <select 
                  required
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:border-brand-primary dark:focus:border-brand-accent focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled>Select unit type</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK+">3 BHK+</option>
                  <option value="Villa / Bungalow">Villa / Bungalow</option>
                  <option value="Land / Plot">Land / Plot</option>
                  <option value="Commercial">Commercial Shop / Office</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Budget Range *</label>
                <select 
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:border-brand-primary dark:focus:border-brand-accent focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled>Select your budget</option>
                  <option value="Under 50 Lakhs">Under 50 Lakhs</option>
                  <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                  <option value="1 Crore - 2 Crores">1 Crore - 2 Crores</option>
                  <option value="2 Crores+">2 Crores+</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Timeline *</label>
                <select 
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:border-brand-primary dark:focus:border-brand-accent focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled>When do you plan to transact?</option>
                  <option value="Immediate (Hot)">Immediate (Within 30 Days)</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Just Exploring">Just Exploring (6+ Months)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Button type="button" onClick={prevStep} variant="outline" className="px-6 border-gray-200 dark:border-gray-700">
                <ArrowLeft size={18} />
              </Button>
              <Button type="button" onClick={nextStep} disabled={!formData.unitType || !formData.budget || !formData.timeline} className="flex-1 py-4">
                Continue <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT INFO */}
        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Almost there!</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Where should we send the property options?</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Your Name *</label>
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

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
                <Input
                  type="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Button type="button" onClick={prevStep} variant="outline" className="px-6 border-gray-200 dark:border-gray-700">
                <ArrowLeft size={18} />
              </Button>
              <Button type="submit" isLoading={isSubmitting} className="flex-1 py-4">
                Get Callback
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};