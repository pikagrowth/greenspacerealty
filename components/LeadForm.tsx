"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

type LeadFormProps = {
  onSuccess: (offer: string) => void;
};

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      bhk: formData.get("bhk"),
    };

    try {
      const response = await fetch("/api/reveal-modak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Something went wrong");

      // Pass the winning offer back to the parent page
      onSuccess(data.offer);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          name="name" 
          required 
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
        <input 
          type="tel" 
          name="mobile" 
          required 
          pattern="[0-9]{10}"
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
          placeholder="10-digit mobile number"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
        <input 
          type="email" 
          name="email" 
          required 
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
          placeholder="For your voucher code"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Looking For</label>
        <select 
          name="bhk" 
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all bg-white"
        >
          <option value="">Select Configuration</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
        </select>
      </div>

      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

      <button 
        type="submit" 
        disabled={isLoading}
        className="mt-2 w-full bg-[#5C1615] hover:bg-[#4a1211] text-[#D4AF37] font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : "Unlock My Modak"}
      </button>
    </form>
  );
}