"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DecorativeNumber } from "@/components/ui/DecorativeNumber";
import { ecosystemContent } from "@/lib/content/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EcosystemSection() {
  const { ecosystem, instruments } = ecosystemContent;

  return (
    <Section id="ecosistema" className="bg-ivory-dark/40">
      <DecorativeNumber position="bottom-right">05</DecorativeNumber>

      <SectionLabel number="05" label="Ecosistema" />

      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-2">
          {ecosystemContent.subtitle}
        </p>
        <h2
          id="ecosistema-heading"
          className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl lg:text-4xl max-w-2xl mb-4"
        >
          {ecosystemContent.title}
        </h2>
        <p className="text-charcoal-soft leading-relaxed max-w-2xl text-sm sm:text-base">
          {ecosystemContent.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={0.06}>
          <div className="pb-12 lg:pb-0">
            <div className="w-6 h-[1px] bg-olive/40 mb-5" />
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-8">
              {ecosystem.title}
            </h3>
            <div className="space-y-8">
              {ecosystem.groups.map((group) => (
                <div key={group.id}>
                  <p className="text-xs font-medium uppercase tracking-wider text-olive mb-3">
                    {group.title}
                  </p>
                  <ul
                    className="space-y-2 text-charcoal-soft text-sm"
                    role="list"
                  >
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-olive/50 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="pt-12 lg:pt-0">
            <div className="w-6 h-[1px] bg-gold/50 mb-5" />
            <h3 className="font-serif text-lg font-semibold text-charcoal mb-8">
              {instruments.title}
            </h3>
            <div className="space-y-7">
              {instruments.groups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal/50 mb-2.5">
                    {group.title}
                  </p>
                  <ul
                    className="space-y-2 text-charcoal-soft text-sm"
                    role="list"
                  >
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-olive/50 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-charcoal/8">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
              >
                Valutiamo insieme le opportunità
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
