// components/tools/AffordabilityCalculator.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Wallet } from "lucide-react";

export function AffordabilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(150000);
  const [existingObligations, setExistingObligations] = useState<number>(20000);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const [affordableLoan, setAffordableLoan] = useState<number>(0);
  const [propertyBudget, setPropertyBudget] = useState<number>(0);

  useEffect(() => {
    if (monthlyIncome > 0 && tenureYears > 0 && interestRate > 0) {
      // Banks typically consider up to 50% of income for total EMIs
      const maxEmiCapacity = (monthlyIncome * 0.5) - existingObligations;
      
      if (maxEmiCapacity > 0) {
        const r = interestRate / 12 / 100;
        const n = tenureYears * 12;
        
        // Reverse EMI formula: P = (EMI * ((1+r)^n - 1)) / (r * (1+r)^n)
        const loan = (maxEmiCapacity * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
        
        // Assume loan covers 80% of property cost
        const budget = loan / 0.8;

        setAffordableLoan(Math.round(loan));
        setPropertyBudget(Math.round(budget));
      } else {
        setAffordableLoan(0);
        setPropertyBudget(0);
      }
    } else {
      setAffordableLoan(0);
      setPropertyBudget(0);
    }
  }, [monthlyIncome, existingObligations, tenureYears, interestRate]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div id="affordability" className="bg-white dark:bg-[#161917] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden mb-12 scroll-mt-24 transition-colors duration-300">
      <div className="bg-brand-primary dark:bg-[#0c100e] border-b border-transparent dark:border-gray-800 p-6 text-white flex items-center gap-3 transition-colors">
        <Wallet className="w-6 h-6 text-brand-accent dark:text-brand-accentDark" />
        <h2 className="text-xl font-bold">Home Affordability Calculator</h2>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-12">
        {/* Inputs */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Net Monthly Income (₹)</label>
            <input 
              type="number" 
              value={monthlyIncome} 
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Existing EMIs / Obligations (₹/month)</label>
            <input 
              type="number" 
              value={existingObligations} 
              onChange={(e) => setExistingObligations(Number(e.target.value))}
              className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Tenure (Years)</label>
              <input 
                type="number" 
                value={tenureYears} 
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Rate (% p.a.)</label>
              <input 
                type="number" step="0.1"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Outputs */}
        <div className="flex-1 bg-gray-50 dark:bg-[#111412] rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 flex flex-col justify-center transition-colors">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Estimated Property Budget</p>
            <p className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-brand-primaryDark transition-colors">{formatCurrency(propertyBudget)}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 transition-colors">Assuming ~20% Down Payment</p>
          </div>
          <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6 mb-8 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 transition-colors">Estimated Loan Amount</span>
              <span className="font-bold text-gray-900 dark:text-white transition-colors">{formatCurrency(affordableLoan)}</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center mb-4 leading-relaxed transition-colors">
            *Indicative estimates only. Assumes banks allow 50% FOIR (Fixed Obligation to Income Ratio). Not financial advice.
          </p>
          
          <Link href="/contact#enquire" className="w-full inline-flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white dark:bg-brand-primaryDark dark:hover:bg-brand-primaryDark/90 dark:text-brand-bgDark font-medium py-3 px-6 rounded-lg transition-colors">
            Talk to an Advisor <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}