// components/ui/Input.tsx
import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-brand-text dark:text-brand-textDark mb-1.5 transition-colors duration-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full h-11 px-4 rounded-xl border bg-brand-bg/50 dark:bg-brand-bgDark/50 focus:bg-white dark:focus:bg-[#161917] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-primaryDark/20 focus:border-brand-primary dark:focus:border-brand-primaryDark placeholder:text-gray-400 dark:placeholder:text-gray-500 text-brand-text dark:text-brand-textDark
            ${error ? "border-brand-alert dark:border-brand-alertDark focus:border-brand-alert dark:focus:border-brand-alertDark focus:ring-brand-alert/20 dark:focus:ring-brand-alertDark/20" : "border-gray-200 dark:border-gray-800"} 
            ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-brand-alert dark:text-brand-alertDark">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";