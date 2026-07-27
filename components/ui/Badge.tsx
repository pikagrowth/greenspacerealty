import { ReactNode } from "react";

type BadgeVariant = "default" | "brand" | "urgent" | "outline" | "secondary";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide";
  
  const variants: Record<BadgeVariant, string> = {
    default: "bg-gray-100 text-gray-800",
    brand: "bg-emerald-900 text-white", // Safe fallback approximation of the primary brand color
    urgent: "bg-red-100 text-red-800 border border-red-200", // Used for "Fast Selling"
    outline: "border border-gray-300 text-gray-700 bg-white",
    secondary: "bg-amber-100 text-amber-900" // For secondary highlights
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}