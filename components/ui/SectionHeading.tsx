interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = true, 
  className = "" 
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${centered ? "text-center items-center" : "text-left items-start"} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}