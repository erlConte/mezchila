"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DecorativeNumber } from "@/components/ui/DecorativeNumber";
import { chiSiamoContent } from "@/lib/content/home";

export function ChiSiamo() {
  return (
    <Section id="chi-siamo" className="bg-ivory-dark/40">
      <DecorativeNumber position="bottom-right">02</DecorativeNumber>

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-start">
        <div className="lg:col-span-7">
          <SectionLabel number="02" label="Chi siamo" />

          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-4">
              {chiSiamoContent.title}
            </p>
          </Reveal>

          <RevealOnScroll>
            <h2
              id="chi-siamo-heading"
              className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl lg:text-4xl mb-6"
            >
              Piattaforma di connessione, non solo consulenza
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-charcoal-soft leading-relaxed text-lg mb-6 max-w-xl">
              {chiSiamoContent.intro}
            </p>
          </RevealOnScroll>

          <Reveal delay={0.15}>
            <p className="text-charcoal-soft/80 leading-relaxed text-sm sm:text-base">
              {chiSiamoContent.narrative}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 space-y-10 lg:pt-2">
          <Reveal delay={0.08}>
            <div>
              <div className="w-8 h-[2px] bg-gold/50 mb-5" />
              <p className="text-xs font-medium uppercase tracking-wider text-olive mb-5">
                I nostri pilastri
              </p>
              <ul className="space-y-4" role="list">
                {chiSiamoContent.pillars.map((item, i) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="font-serif text-[10px] text-olive/50 mt-1 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-charcoal-soft text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="pt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-charcoal/50 mb-5">
                Perché con noi
              </p>
              <ul className="space-y-3" role="list">
                {chiSiamoContent.whyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-charcoal-soft text-sm leading-relaxed"
                  >
                    <span className="text-olive/60 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
