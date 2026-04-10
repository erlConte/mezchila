"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { bussolaContent } from "@/lib/content/home";

export function BussolaSection() {
  return (
    <Section id="bussola">
      <div className="max-w-4xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-2">
            {bussolaContent.subtitle}
          </p>
          <h2
            id="bussola-heading"
            className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl mb-12"
          >
            {bussolaContent.title}
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
          <Reveal delay={0.06}>
            <div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                Missione
              </h3>
              <p className="text-charcoal-soft leading-relaxed text-sm sm:text-base">
                {bussolaContent.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                Visione
              </h3>
              <p className="text-charcoal-soft leading-relaxed text-sm sm:text-base">
                {bussolaContent.vision}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-12 pt-10 border-t border-ivory-dark">
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-4">
              Valori
            </h3>
            <p className="text-charcoal-soft text-sm sm:text-base mb-6">
              Eccellenza, integrità, interculturalità, sostenibilità, visione
              condivisa, capacità di unire mondi diversi.
            </p>
            <div className="flex flex-wrap gap-2">
              {bussolaContent.values.map((v) => (
                <span
                  key={v}
                  className="inline-flex rounded-md border border-ivory-dark bg-white/50 px-3 py-1.5 text-xs font-medium text-charcoal-soft"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
