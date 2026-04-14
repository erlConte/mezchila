"use client";

import { Reveal } from "@/components/ui/Reveal";
import { storieContent } from "@/lib/content/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StorieTeaser() {
  const hasRealStories = storieContent.items.some((i) => !i.isPlaceholder);
  if (hasRealStories) return null;

  return (
    <section
      id="storie"
      className="relative py-16 sm:py-20 bg-ivory-dark/30 overflow-hidden"
      aria-labelledby="storie-teaser-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-charcoal/10 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-serif text-[11px] text-olive/60 tabular-nums">
              07
            </span>
            <div className="w-6 h-[1px] bg-olive/25" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/35">
              {storieContent.title}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2
                id="storie-teaser-heading"
                className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl mb-4"
              >
                Storie in arrivo
              </h2>
              <p className="text-charcoal-soft leading-relaxed text-sm sm:text-base mb-8">
                {storieContent.teaserText}
              </p>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
              >
                {storieContent.ctaLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>

            <div className="hidden lg:flex flex-col gap-3" aria-hidden>
              {["Export Italia → Colombia", "Partnership strategica", "Produzione locale Perù"].map(
                (label, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 border border-charcoal/8 px-5 py-4"
                    style={{ opacity: 1 - i * 0.25 }}
                  >
                    <span className="font-serif text-[10px] text-olive/50 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-4 h-[1px] bg-charcoal/15 shrink-0" />
                    <span className="text-xs text-charcoal/50 font-medium">{label}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
