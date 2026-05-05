"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ecosystemContent } from "@/lib/content/home";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EcosystemSection() {
  const { ecosystem, instruments } = ecosystemContent;

  return (
    <Section id="ecosistema" className="bg-ivory-dark/40">

      <SectionHeader
        number="05"
        label="Ecosistema"
        kicker={ecosystemContent.subtitle}
        title={ecosystemContent.title}
        description={ecosystemContent.intro}
        titleId="ecosistema-heading"
      />

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
              <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
                <Link
                  href="/ecosistema"
                  className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
                >
                  Esplora tutto l'ecosistema
                  <ArrowRight size={14} aria-hidden />
                </Link>
                <span className="text-charcoal/20">·</span>
                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-soft hover:text-olive transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
                >
                  Valutiamo insieme le opportunità
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
