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
    <div id="emi" className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12 scroll-mt-24">
      <div className="bg-brand-primary p-6 text-white flex items-center gap-3">
        <Calculator className="w-6 h-6 text-brand-accent" />
        <h2 className="text-xl font-bold">Home Loan EMI Calculator</h2>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col md:flex-row gap-12">
        {/* Inputs */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
            <input 
              type="number" 
              value={principal} 
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
            />
            <input 
              type="range" min="100000" max="50000000" step="100000" 
              value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full mt-4 accent-brand-primary" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Loan Tenure (Years)</label>
            <input 
              type="number" 
              value={tenureYears} 
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
            />
            <input 
              type="range" min="1" max="30" step="1" 
              value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full mt-4 accent-brand-primary" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (% p.a.)</label>
            <input 
              type="number" step="0.1"
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all"
            />
            <input 
              type="range" min="5" max="15" step="0.1" 
              value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-4 accent-brand-primary" 
            />
          </div>
        </div>

        {/* Outputs */}
        <div className="flex-1 bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 flex flex-col justify-center">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Monthly EMI</p>
            <p className="text-4xl md:text-5xl font-bold text-brand-primary">{formatCurrency(emi)}</p>
          </div>
          <div className="space-y-4 border-t border-gray-200 pt-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Principal Amount</span>
              <span className="font-semibold text-gray-900">{formatCurrency(principal)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Interest</span>
              <span className="font-semibold text-gray-900">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="font-semibold text-gray-900">Total Amount Payable</span>
              <span className="font-bold text-brand-primary">{formatCurrency(totalPayment)}</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 text-center mb-4 leading-relaxed">
            *Indicative estimates only. Not a loan approval or financial advice.
          </p>
          
          <Link href="/contact#enquire" className="w-full inline-flex items-center justify-center bg-brand-primary hover:bg-brand-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Talk to an Advisor <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}