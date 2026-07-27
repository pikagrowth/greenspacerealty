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
          <label className="block text-sm font-medium text-brand-text mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full h-11 px-4 rounded-xl border bg-brand-bg/50 focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary placeholder:text-gray-400 text-brand-text
            ${error ? "border-brand-alert focus:border-brand-alert focus:ring-brand-alert/20" : "border-gray-200"} 
            ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-brand-alert">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";