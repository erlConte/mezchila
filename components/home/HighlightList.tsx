import { Check } from "lucide-react";

interface HighlightListProps {
  items: readonly string[];
  className?: string;
}

export function HighlightList({ items, className = "" }: HighlightListProps) {
  return (
    <ul className={`space-y-3 ${className}`} role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-olive/15 text-olive"
            aria-hidden
          >
            <Check size={12} strokeWidth={2.5} />
          </span>
          <span className="text-charcoal-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
