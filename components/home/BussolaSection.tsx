"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DecorativeNumber } from "@/components/ui/DecorativeNumber";
import { bussolaContent } from "@/lib/content/home";

export function BussolaSection() {
  return (
    <Section id="bussola" className="bg-ivory">
      <DecorativeNumber position="bottom-left">03</DecorativeNumber>

      <div className="max-w-4xl">
        <SectionLabel number="03" label="La nostra bussola" />

        <RevealOnScroll>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-2">
            {bussolaContent.subtitle}
          </p>
          <h2
            id="bussola-heading"
            className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl lg:text-4xl mb-14"
          >
            {bussolaContent.title}
          </h2>
        </RevealOnScroll>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal delay={0.06}>
            <div className="pb-10 sm:pb-0">
              <div className="w-6 h-[1px] bg-olive/40 mb-4" />
              <h3 className="font-serif text-base font-semibold text-charcoal mb-3 uppercase tracking-wide text-[13px]">
                Missione
              </h3>
              <p className="text-charcoal-soft leading-relaxed text-sm sm:text-base">
                {bussolaContent.mission}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="pt-10 sm:pt-0">
              <div className="w-6 h-[1px] bg-olive/40 mb-4" />
              <h3 className="font-serif text-base font-semibold text-charcoal mb-3 uppercase tracking-wide text-[13px]">
                Visione
              </h3>
              <p className="text-charcoal-soft leading-relaxed text-sm sm:text-base">
                {bussolaContent.vision}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 pt-10 border-t border-charcoal/8">
            <div className="flex items-start gap-10 flex-wrap sm:flex-nowrap">
              <div className="shrink-0">
                <div className="w-6 h-[1px] bg-gold/50 mb-4" />
                <h3 className="font-serif text-base font-semibold text-charcoal uppercase tracking-wide text-[13px]">
                  Valori
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {bussolaContent.values.map((v) => (
                  <span
                    key={v}
                    className="inline-flex border border-charcoal/12 px-3 py-1.5 text-xs font-medium text-charcoal-soft tracking-wide"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
