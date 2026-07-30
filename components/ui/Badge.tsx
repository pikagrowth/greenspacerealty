// components/ui/Badge.tsx
import React, { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "alert" | "accent" | "outline";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-300";
    
    const variants = {
      default: "bg-brand-primary/10 text-brand-primary dark:bg-brand-primaryDark/20 dark:text-brand-primaryDark",
      success: "bg-brand-success/10 text-brand-success dark:bg-brand-successDark/20 dark:text-brand-successDark",
      alert: "bg-brand-alert/10 text-brand-alert dark:bg-brand-alertDark/20 dark:text-brand-alertDark",
      accent: "bg-brand-accent/10 text-brand-accent dark:bg-brand-accentDark/20 dark:text-brand-accentDark",
      outline: "border border-gray-200 text-gray-800 dark:border-gray-700 dark:text-gray-200",
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";