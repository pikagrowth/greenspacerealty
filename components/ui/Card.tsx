// components/ui/Card.tsx
import React, { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white dark:bg-[#161917] rounded-2xl shadow-soft dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";