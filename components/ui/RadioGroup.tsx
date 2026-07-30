// components/ui/RadioGroup.tsx
import React, { InputHTMLAttributes, forwardRef } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  label?: string;
  error?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, value, onChange, name, label, error, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`w-full ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-brand-text dark:text-brand-textDark mb-2 transition-colors duration-300">
            {label}
          </label>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          {options.map((option) => (
            <label
              key={option.value}
              className={`flex-1 flex items-center p-3 border rounded-xl cursor-pointer transition-all duration-300
                ${value === option.value 
                  ? "border-brand-primary bg-brand-primary/5 dark:border-brand-primaryDark dark:bg-brand-primaryDark/10" 
                  : "border-gray-200 bg-white dark:border-gray-800 dark:bg-[#161917] hover:border-brand-primary/50 dark:hover:border-brand-primaryDark/50"}
              `}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-4 h-4 text-brand-primary dark:text-brand-primaryDark bg-gray-100 border-gray-300 focus:ring-brand-primary dark:focus:ring-brand-primaryDark dark:bg-gray-800 dark:border-gray-600 focus:ring-2"
                {...props}
              />
              <span className="ml-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {error && <p className="mt-1.5 text-sm text-brand-alert dark:text-brand-alertDark">{error}</p>}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";