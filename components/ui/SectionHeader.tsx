"use client";

import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  /** Numero progressivo della sezione, es. "04" */
  number: string;
  /** Etichetta breve della sezione, es. "Aree di Business" */
  label: string;
  /** Sopratitolo discreto, es. "Cosa facciamo" (opzionale) */
  kicker?: string;
  /** Titolo principale della sezione */
  title: string;
  /** Descrizione/lead opzionale sotto il titolo */
  description?: string;
  /** Classe extra per il container */
  className?: string;
  /** id da agganciare al titolo per aria-labelledby */
  titleId?: string;
  /** Variante "scuro" per sezioni con sfondo charcoal (es. Manifesto) */
  variant?: "light" | "dark";
}

/**
 * Header unificato per tutte le sezioni della home.
 * Anatomia:
 *   01 ─── Etichetta sezione
 *   Sopratitolo (opzionale)
 *   Titolo principale
 *   Descrizione (opzionale)
 */
export function SectionHeader({
  number,
  label,
  kicker,
  title,
  description,
  className = "",
  titleId,
  variant = "light",
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  const numberClass = isDark
    ? "text-olive/70 tabular-nums"
    : "text-olive/60 tabular-nums";
  const lineClass = isDark ? "bg-olive/40" : "bg-olive/40";
  const labelClass = isDark
    ? "text-ivory/35 uppercase tracking-[0.2em]"
    : "text-charcoal/45 uppercase tracking-[0.2em]";
  const kickerClass = isDark ? "text-olive/80" : "text-olive";
  const titleClass = isDark ? "text-ivory" : "text-charcoal";
  const descriptionClass = isDark
    ? "text-ivory/65"
    : "text-charcoal-soft";

  return (
    <header className={`max-w-3xl ${className}`}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className={`font-serif text-[11px] ${numberClass}`}>
            {number}
          </span>
          <div className={`w-6 h-[1px] ${lineClass}`} />
          <span className={`text-[11px] font-medium ${labelClass}`}>
            {label}
          </span>
        </div>
      </Reveal>

      {kicker && (
        <Reveal delay={0.04}>
          <p
            className={`mt-6 text-xs font-medium uppercase tracking-[0.2em] ${kickerClass}`}
          >
            {kicker}
          </p>
        </Reveal>
      )}

      <Reveal delay={kicker ? 0.08 : 0.06}>
        <h2
          id={titleId}
          className={`${kicker ? "mt-3" : "mt-6"} font-serif text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl ${titleClass}`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 text-sm sm:text-base leading-relaxed ${descriptionClass}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </header>
  );
}
