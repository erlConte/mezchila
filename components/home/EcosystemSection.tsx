"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystemContent } from "@/lib/content/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EcosystemSection() {
  const { ecosystem, instruments } = ecosystemContent;

  return (
    <Section id="ecosistema" className="bg-ivory">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-2">
          {ecosystemContent.subtitle}
        </p>
        <h2
          id="ecosistema-heading"
          className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl max-w-2xl mb-4"
        >
          {ecosystemContent.title}
        </h2>
        <p className="text-charcoal-soft leading-relaxed max-w-2xl">
          {ecosystemContent.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        {/* Left: institutional ecosystem */}
        <Reveal delay={0.06}>
          <div className="rounded-xl border border-ivory-dark bg-white/60 p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-charcoal border-b border-olive/20 pb-3 mb-6">
              {ecosystem.title}
            </h3>
            <div className="space-y-8">
              {ecosystem.groups.map((group) => (
                <div key={group.id}>
                  <p className="text-xs font-medium uppercase tracking-wider text-olive mb-2">
                    {group.title}
                  </p>
                  <ul className="space-y-1.5 text-charcoal-soft text-sm" role="list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: instruments & funding */}
        <Reveal delay={0.1}>
          <div className="rounded-xl border border-ivory-dark bg-white/60 p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-charcoal border-b border-terracotta-muted/25 pb-3 mb-6">
              {instruments.title}
            </h3>
            <div className="space-y-6">
              {instruments.groups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-medium text-charcoal mb-2">
                    {group.title}
                  </p>
                  <ul className="space-y-1.5 text-charcoal-soft text-sm" role="list">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/contatti"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
            >
              Valutiamo insieme le opportunità
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
