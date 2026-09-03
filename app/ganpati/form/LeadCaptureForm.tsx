"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { BUDGET_RANGES } from "../lib/constants";

export function LeadCaptureForm({ firstOffer, secondaryOffer, onSuccess }: { firstOffer: string, secondaryOffer: string, onSuccess: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const combinedOffers = `${firstOffer} AND ${secondaryOffer}`; 

    const payload = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      email: formData.get("email") || "Not Provided", // Handles empty email safely
      budget: formData.get("budget"),
      configuration: formData.get("configuration"),
      wonOffer: combinedOffers
    };

    try {
      const response = await fetch("/ganpati/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to claim offer. Please check your details.");
      
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" name="name" required placeholder="Full Name" 
        className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all placeholder:text-gray-400 text-gray-800" />
      
      <input type="tel" name="mobile" required pattern="[0-9]{10}" placeholder="Mobile Number (10 digits)" 
        className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all placeholder:text-gray-400 text-gray-800" />
      
      {/* EMAIL IS NOW OPTIONAL */}
      <input type="email" name="email" placeholder="Email Address (Optional)" 
        className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all placeholder:text-gray-400 text-gray-800" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select name="configuration" required className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none text-gray-700">
          <option value="">Configuration</option>
          <option value="1 BHK">1 BHK (Premium)</option>
          <option value="2 BHK">2 BHK (Luxury)</option>
          <option value="3 BHK">3 BHK (Ultra Luxury)</option>
          <option value="Commercial">Commercial</option>
        </select>

        <select name="budget" required className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D4AF37] outline-none text-gray-700">
          <option value="">Budget Range</option>
          {BUDGET_RANGES.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

      <button type="submit" disabled={isLoading} className="mt-2 w-full bg-[#5C1615] hover:bg-[#4a1211] text-[#D4AF37] font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 disabled:opacity-70 active:scale-95">
        {isLoading ? <Loader2 className="animate-spin" /> : "Generate My Voucher"}
      </button>
    </form>
  );
}