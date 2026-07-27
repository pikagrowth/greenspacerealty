"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { EnquiryType } from "@/lib/types";

export const StepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    enquiryType: "buyer" as EnquiryType,
    name: "",
    mobile: "",
    email: "",
    unitType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleNext = () => {
    if (!formData.name || !formData.mobile) {
      setError("Please fill in your name and mobile number.");
      return;
    }
    if (formData.mobile.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    
    // For consultation, we can skip specific budgets/units and just show a message box in step 2
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for Step 2 depending on enquiry type
    if (formData.enquiryType === 'buyer' && (!formData.unitType || !formData.budget || !formData.timeline)) {
      setError("Please select all options to proceed.");
      return;
    }
    if (formData.enquiryType === 'seller-builder' && !formData.message) {
      setError("Please provide your project details.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "step-form" }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepTwoFields = () => {
    switch (formData.enquiryType) {
      case "seller-builder":
        return (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Project Name & Location *</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                rows={2}
                placeholder="e.g., Greenspace Heights in Panvel"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <Input
              label="Configuration / Scope"
              placeholder="e.g., 80 Flats, 1 & 2 BHK"
              value={formData.unitType}
              onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
            />
            <RadioGroup
              label="Project Status *"
              name="timeline"
              value={formData.timeline}
              onChange={(val) => setFormData({ ...formData, timeline: val })}
              options={[
                { label: "Upcoming / Pre-launch", value: "Upcoming" },
                { label: "Ongoing Construction", value: "Ongoing" },
                { label: "Ready to Move", value: "Ready" },
              ]}
            />
          </>
        );

      case "land":
        return (
          <>
            <RadioGroup
              label="Investment Budget *"
              name="budget"
              value={formData.budget}
              onChange={(val) => setFormData({ ...formData, budget: val })}
              options={[
                { label: "Under ₹1 Crore", value: "Under 1Cr" },
                { label: "₹1 Crore - ₹5 Crores", value: "1Cr - 5Cr" },
                { label: "Above ₹5 Crores", value: "Above 5Cr" },
              ]}
            />
            <RadioGroup
              label="Timeline *"
              name="timeline"
              value={formData.timeline}
              onChange={(val) => setFormData({ ...formData, timeline: val })}
              options={[
                { label: "Immediate Investment", value: "Immediate" },
                { label: "Just exploring opportunities", value: "Just exploring" },
              ]}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Preferred Location or Details</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                rows={2}
                placeholder="e.g., Karanjade, NAINA, Old Panvel..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </>
        );

      case "consultation":
        return (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">What are you looking to achieve? *</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
                rows={4}
                placeholder="Tell us about your investment goals, preferred areas, or any specific questions you have..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
          </>
        );

      default: // buyer
        return (
          <>
            <RadioGroup
              label="What type of space are you looking for? *"
              name="unitType"
              value={formData.unitType}
              onChange={(val) => setFormData({ ...formData, unitType: val })}
              options={[
                { label: "1 BHK Flat", value: "1 BHK Flat" },
                { label: "2 BHK Flat", value: "2 BHK Flat" },
                { label: "Commercial / Shop", value: "Commercial" },
                { label: "2nd Home / Villa", value: "2nd Home" },
              ]}
            />
            <RadioGroup
              label="What is your budget range? *"
              name="budget"
              value={formData.budget}
              onChange={(val) => setFormData({ ...formData, budget: val })}
              options={[
                { label: "[PENDING-FROM-CLIENT: Under ₹45L]", value: "Under 45L" },
                { label: "[PENDING-FROM-CLIENT: ₹45L - ₹75L]", value: "45L - 75L" },
                { label: "[PENDING-FROM-CLIENT: ₹75L - ₹1Cr]", value: "75L - 1Cr" },
                { label: "[PENDING-FROM-CLIENT: Above ₹1Cr]", value: "Above 1Cr" },
              ]}
            />
            <RadioGroup
              label="When are you planning to buy? *"
              name="timeline"
              value={formData.timeline}
              onChange={(val) => setFormData({ ...formData, timeline: val })}
              options={[
                { label: "Ready to buy (1-3 months)", value: "Ready to buy" },
                { label: "More than 6 months", value: "More than 6 months" },
                { label: "Just exploring options", value: "Just exploring" },
              ]}
            />
          </>
        );
    }
  };

  return (
    <Card className="max-w-xl mx-auto p-6 md:p-8" id="enquire">
      <div className="mb-8">
        <h3 className="text-2xl font-heading font-bold text-brand-primary mb-2">
          {step === 1 ? "How can we help you?" : "Just a few more details"}
        </h3>
        <p className="text-gray-600">
          {step === 1 
            ? "Tell us what you're looking for and provide your contact details." 
            : "This helps our advisory team prepare the best options for you."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <RadioGroup
              label="I am looking to... *"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={(val) => setFormData({ ...formData, enquiryType: val as EnquiryType })}
              options={[
                { label: "Buy a Home / Resale", value: "buyer" },
                { label: "Sell / Market My Project (Builder)", value: "seller-builder" },
                { label: "Buy or Sell Land", value: "land" },
                { label: "Get Investment Advice", value: "consultation" },
              ]}
            />
            
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <Input
                label="Full Name *"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Mobile Number *"
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                required
              />
              <Input
                label="Email Address (Optional)"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            {error && <p className="text-brand-alert text-sm">{error}</p>}
            
            <Button 
              type="button" 
              className="w-full gap-2 mt-4" 
              onClick={handleNext}
            >
              Continue <ArrowRight size={18} />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            
            {renderStepTwoFields()}

            {error && <p className="text-brand-alert text-sm">{error}</p>}

            <div className="flex gap-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                className="px-4" 
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={18} />
              </Button>
              <Button 
                type="submit" 
                className="flex-1" 
                isLoading={isSubmitting}
              >
                Submit Enquiry
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};