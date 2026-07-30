// components/ui/Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-brand-bgDark disabled:opacity-50 disabled:pointer-events-none rounded-xl";
    
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary dark:bg-brand-primaryDark dark:text-white dark:hover:bg-brand-primaryDark/90 dark:focus:ring-brand-primaryDark",
      secondary: "bg-brand-accent text-white hover:bg-brand-accent/90 focus:ring-brand-accent dark:bg-brand-accentDark dark:text-brand-bgDark dark:hover:bg-brand-accentDark/90 dark:focus:ring-brand-accentDark",
      outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary dark:border-brand-primaryDark dark:text-brand-primaryDark dark:hover:bg-brand-primaryDark dark:hover:text-brand-bgDark dark:focus:ring-brand-primaryDark",
      ghost: "text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary dark:text-brand-primaryDark dark:hover:bg-brand-primaryDark/20 dark:focus:ring-brand-primaryDark",
      success: "bg-brand-success text-white hover:bg-brand-success/90 focus:ring-brand-success dark:bg-brand-successDark dark:text-white dark:hover:bg-brand-successDark/90 dark:focus:ring-brand-successDark",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";