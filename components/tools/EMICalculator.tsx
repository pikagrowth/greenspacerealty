// components/tools/EMICalculator.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

export function EMICalculator() {
  const [principal, setPrincipal] = useState<number>(5000000);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    if (principal > 0 && tenureYears > 0 && interestRate > 0) {
      const p = principal;
      const r = interestRate / 12 / 100;
      const n = tenureYears * 12;
      
      const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPay = emiCalc * n;
      const totalInt = totalPay - p;

      setEmi(Math.round(emiCalc));
      setTotalPayment(Math.round(totalPay));
      setTotalInterest(Math.round(totalInt));
    } else {
      setEmi(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [principal, tenureYears, interestRate]);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div id="emi" className="bg-white dark:bg-[#161917] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden mb-12 scroll-mt-24 transition-colors duration-300">
      <div className="bg-brand-primary dark:bg-[#0c100e] border-b border-transparent dark:border-gray-800 p-6 text-white flex items-center gap-3 transition-colors">
        <Calculator className="w-6 h-6 text-brand-accent dark:text-brand-accentDark" />
        <h2 className="text-xl font-bold">Home Loan EMI Calculator</h2>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-12">
        {/* Inputs */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Loan Amount (₹)</label>
            <input 
              type="number" 
              value={principal} 
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
            />
            <input 
              type="range" min="100000" max="50000000" step="100000" 
              value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full mt-4 accent-brand-primary dark:accent-brand-primaryDark" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Loan Tenure (Years)</label>
            <input 
              type="number" 
              value={tenureYears} 
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
            />
            <input 
              type="range" min="1" max="30" step="1" 
              value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full mt-4 accent-brand-primary dark:accent-brand-primaryDark" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">Interest Rate (% p.a.)</label>
            <input 
              type="number" step="0.1"
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-3 bg-transparent dark:bg-[#111412] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-primaryDark focus:border-brand-primary dark:focus:border-brand-primaryDark outline-none transition-all"
            />
            <input 
              type="range" min="5" max="15" step="0.1" 
              value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-4 accent-brand-primary dark:accent-brand-primaryDark" 
            />
          </div>
        </div>

        {/* Outputs */}
        <div className="flex-1 bg-gray-50 dark:bg-[#111412] rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 flex flex-col justify-center transition-colors">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Monthly EMI</p>
            <p className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-brand-primaryDark transition-colors">{formatCurrency(emi)}</p>
          </div>
          <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6 mb-8 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 transition-colors">Principal Amount</span>
              <span className="font-semibold text-gray-900 dark:text-white transition-colors">{formatCurrency(principal)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400 transition-colors">Total Interest</span>
              <span className="font-semibold text-gray-900 dark:text-white transition-colors">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors">
              <span className="font-semibold text-gray-900 dark:text-white transition-colors">Total Amount Payable</span>
              <span className="font-bold text-brand-primary dark:text-brand-primaryDark transition-colors">{formatCurrency(totalPayment)}</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center mb-4 leading-relaxed transition-colors">
            *Indicative estimates only. Not a loan approval or financial advice.
          </p>
          
          <Link href="/contact#enquire" className="w-full inline-flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white dark:bg-brand-primaryDark dark:hover:bg-brand-primaryDark/90 dark:text-brand-bgDark font-medium py-3 px-6 rounded-lg transition-colors">
            Talk to an Advisor <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}