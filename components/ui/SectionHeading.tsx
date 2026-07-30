// components/ui/SectionHeading.tsx
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = "left",
  className = "",
  as: Component = "h2",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-block px-3 py-1 bg-brand-accent/10 dark:bg-brand-accentDark/20 border border-brand-accent/20 dark:border-brand-accentDark/30 text-brand-accent dark:text-brand-accentDark rounded-full text-xs font-bold tracking-wider uppercase mb-4 transition-colors duration-300">
          {badge}
        </div>
      )}
      <Component className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary dark:text-brand-primaryDark leading-tight mb-4 transition-colors duration-300">
        {title}
      </Component>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};