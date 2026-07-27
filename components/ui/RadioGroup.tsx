import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  name: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, name, value, onChange, error }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-brand-text mb-2">{label}</label>}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center p-3 rounded-xl border cursor-pointer transition-colors
              ${value === option.value ? "border-brand-primary bg-brand-primary/5" : "border-gray-200 hover:border-brand-primary/50 bg-white"}`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-brand-primary border-gray-300 focus:ring-brand-primary"
            />
            <span className="ml-3 text-sm font-medium text-brand-text">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-brand-alert">{error}</p>}
    </div>
  );
};