interface Props {
  number: string;
  label: string;
  inverted?: boolean;
}

export function SectionLabel({ number, label, inverted = false }: Props) {
  const mutedText = inverted ? "text-ivory/30" : "text-charcoal/35";
  const accentText = inverted ? "text-gold/70" : "text-olive/60";
  const lineColor = inverted ? "bg-ivory/20" : "bg-olive/25";

  return (
    <div className="flex items-center gap-3 mb-8 sm:mb-10">
      <span className={`font-serif text-[11px] tabular-nums ${accentText}`}>
        {number}
      </span>
      <div className={`w-6 h-[1px] ${lineColor}`} />
      <span
        className={`text-[11px] font-medium uppercase tracking-[0.2em] ${mutedText}`}
      >
        {label}
      </span>
    </div>
  );
}
