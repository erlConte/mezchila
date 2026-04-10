import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
