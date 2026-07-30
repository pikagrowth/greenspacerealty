// components/forms/ThankYouRedirect.tsx
"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ThankYouRedirect = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-[#161917] rounded-3xl p-8 md:p-12 shadow-xl text-center border border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="w-20 h-20 bg-brand-success/10 dark:bg-brand-successDark/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
          <CheckCircle2 className="w-10 h-10 text-brand-success dark:text-brand-successDark transition-colors duration-300" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Thank You!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
          We have received your details. Our advisor will reach out to you shortly to discuss your specific requirements.
        </p>
        
        <Link href="/">
          <Button variant="outline" className="w-full gap-2">
            <ArrowLeft size={18} /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};