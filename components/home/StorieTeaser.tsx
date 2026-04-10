"use client";

import { Reveal } from "@/components/ui/Reveal";
import { storieContent } from "@/lib/content/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Minimal teaser when stories are placeholder-only. Replace with full StorieSection when real content exists. */
export function StorieTeaser() {
  const hasRealStories = storieContent.items.some((i) => !i.isPlaceholder);
  if (hasRealStories) return null;

  return (
    <section
      id="storie"
      className="py-16 sm:py-20 border-t border-ivory-dark"
      aria-labelledby="storie-teaser-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-xl border border-dashed border-ivory-dark bg-white/40 p-8 sm:p-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-3">
              {storieContent.title}
            </p>
            <h2
              id="storie-teaser-heading"
              className="font-serif text-xl font-semibold text-charcoal sm:text-2xl mb-4"
            >
              Storie in arrivo
            </h2>
            <p className="text-charcoal-soft leading-relaxed text-sm sm:text-base max-w-xl mx-auto mb-6">
              {storieContent.teaserText}
            </p>
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
            >
              {storieContent.ctaLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
