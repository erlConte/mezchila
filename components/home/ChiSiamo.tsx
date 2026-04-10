"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { chiSiamoContent } from "@/lib/content/home";

export function ChiSiamo() {
  return (
    <Section id="chi-siamo" className="bg-ivory-dark/30">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-start">
        {/* Left: narrative — more editorial, less heavy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-4">
              {chiSiamoContent.title}
            </p>
            <h2
              id="chi-siamo-heading"
              className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl mb-6"
            >
              Piattaforma di connessione, non solo consulenza
            </h2>
            <p className="text-charcoal-soft leading-relaxed text-lg mb-6">
              {chiSiamoContent.intro}
            </p>
            <p className="text-charcoal-soft leading-relaxed">
              {chiSiamoContent.narrative}
            </p>
          </Reveal>
        </div>

        {/* Right: pillars + why — compact, visual hierarchy */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal delay={0.08}>
            <div className="rounded-xl border border-ivory-dark bg-white/60 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-wider text-olive mb-4">
                I nostri pilastri
              </p>
              <ul className="space-y-3" role="list">
                {chiSiamoContent.pillars.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-charcoal-soft text-sm sm:text-base"
                  >
                    <span className="text-olive mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="border-l-2 border-olive/40 pl-6">
              <p className="text-xs font-medium uppercase tracking-wider text-charcoal/70 mb-3">
                Perché con noi
              </p>
              <ul className="space-y-2.5" role="list">
                {chiSiamoContent.whyPoints.map((point) => (
                  <li
                    key={point}
                    className="text-charcoal-soft text-sm leading-relaxed"
                  >
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
