// components/tools/DownPaymentCalculator.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, PiggyBank } from "lucide-react";

export function DownPaymentCalculator() {
  const [propertyPrice, setPropertyPrice] = useState<number>(6000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);

  const [downPaymentAmount, setDownPaymentAmount] = useState<number>(0);
  const [loanAmount, setLoanAmount] = useState<number>(0);

  useEffect(() => {
    if (propertyPrice > 0 && downPaymentPercent >= 0 && downPaymentPercent <= 100) {
      const dp = propertyPrice * (downPaymentPercent / 100);
      const loan = propertyPrice - dp;

      setDownPaymentAmount(Math.round(dp));
      setLoanAmount(Math.round(loan));
    } else {
      setDownPaymentAmount(0);
      setLoanAmount(0);
    }
  }, [propertyPrice, downPaymentPercent]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div id="down-payment" className="bg-white dark:bg-[#161917] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden mb-12 scroll-mt-24 transition-colors duration-300">
      <div className="bg-brand-primary dark:bg-[#0c100e] border-b border-transparent dark:border-gray-800 p-6 text-white flex items-center gap-3 transition-colors">
        <PiggyBank className="w-6 h-6 text-brand-accent dark:text-brand-accentDark" />
        <h2 className="text-xl font-bold">Down Payment Calculator</h2>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-12">
        {/* Inputs */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Property Price (₹)</label>
            <input 
              type="number" 
              value={propertyPrice} 
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Down Payment (%)</label>
            <div className="flex items-center gap-4">
              <input 
                type="range" min="10" max="90" step="5" 
                value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-brand-primary dark:accent-brand-primaryDark" 
              />
              <span className="font-bold text-brand-primary dark:text-brand-primaryDark min-w-[3rem] text-right transition-colors">{downPaymentPercent}%</span>
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="flex-1 bg-gray-50 dark:bg-[#111412] rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 flex flex-col justify-center transition-colors">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Upfront Down Payment</p>
            <p className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-brand-primaryDark transition-colors">{formatCurrency(downPaymentAmount)}</p>
          </div>
          <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6 mb-8 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 transition-colors">Required Loan Amount</span>
              <span className="font-bold text-gray-900 dark:text-white transition-colors">{formatCurrency(loanAmount)}</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center mb-4 leading-relaxed transition-colors">
            *Indicative estimates only. Stamp duty and registration fees are additional upfront costs not included here.
          </p>
          
          <Link href="/contact#enquire" className="w-full inline-flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white dark:bg-brand-primaryDark dark:hover:bg-brand-primaryDark/90 dark:text-brand-bgDark font-medium py-3 px-6 rounded-lg transition-colors">
            Talk to an Advisor <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}