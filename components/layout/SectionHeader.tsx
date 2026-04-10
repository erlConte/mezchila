import { ReactNode } from "react";

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  intro?: string | ReactNode;
  className?: string;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  intro,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {subtitle && (
        <p className="text-xs font-medium uppercase tracking-wider text-olive mb-2">
          {subtitle}
        </p>
      )}
      <h2
        id={id ? `${id}-heading` : undefined}
        className="font-serif text-2xl font-semibold text-charcoal leading-tight text-balance sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-charcoal-soft leading-relaxed text-sm sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}
