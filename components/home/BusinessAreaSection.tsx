"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DecorativeNumber } from "@/components/ui/DecorativeNumber";
import { businessAreasContent } from "@/lib/content/home";
import { siteConfig } from "@/lib/config";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BusinessAreaSection() {
  const { exportPositioning, localManufacturing, spirits } =
    businessAreasContent;

  return (
    <Section id="aree-di-business" className="bg-ivory-dark/30">
      <DecorativeNumber position="top-right">04</DecorativeNumber>
      <SectionLabel number="04" label="Aree di business" />
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-2">
          Cosa facciamo
        </p>
        <h2
          id="aree-di-business-heading"
          className="font-serif text-2xl font-semibold text-charcoal leading-tight sm:text-3xl max-w-2xl"
        >
          {businessAreasContent.title}
        </h2>
      </Reveal>

      <div className="mt-14 lg:mt-18 space-y-20 lg:space-y-28">
        <Reveal>
          <article
            className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start"
            aria-labelledby="area-export-title"
          >
            <div className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-wider text-olive mb-2">
                Export
              </p>
              <h3
                id="area-export-title"
                className="font-serif text-xl font-semibold text-charcoal sm:text-2xl lg:text-3xl"
              >
                {exportPositioning.title}
              </h3>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                {exportPositioning.intro}
              </p>
              <ul
                className="mt-6 space-y-2.5 text-charcoal-soft text-sm sm:text-base"
                role="list"
              >
                {exportPositioning.cosaFacciamo.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-olive/80">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-charcoal-soft/80 text-sm">
                + compliance documentale, gestione ordini, logistica e analisi
                dati
              </p>
            </div>
            <div className="lg:col-span-5 lg:pl-4">
              <div className="pl-0 py-2">
                <p className="text-xs font-medium uppercase tracking-wider text-charcoal/70 mb-4">
                  Perché scegliere noi
                </p>
                <ul className="space-y-3" role="list">
                  {exportPositioning.percheScegliereNoi.map((item) => (
                    <li
                      key={item}
                      className="text-charcoal-soft text-sm flex gap-2"
                    >
                      <span className="text-olive/60 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article
            className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start"
            aria-labelledby="area-manufacturing-title"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="pt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-olive mb-4 flex items-center gap-2">
                  <MapPin size={14} aria-hidden />
                  Paesi
                </p>
                <div className="flex flex-wrap gap-2">
                  {localManufacturing.paesi.map((country) => (
                    <span
                      key={country}
                      className="inline-flex border border-charcoal/15 px-3 py-1.5 text-xs font-medium text-charcoal-soft tracking-wide"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-charcoal/70 mb-3">
                  Risultati attesi
                </p>
                <ul
                  className="space-y-2 text-charcoal-soft text-sm"
                  role="list"
                >
                  {localManufacturing.risultatiAttesi.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-olive/60">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <p className="text-xs font-medium uppercase tracking-wider text-olive mb-2">
                Produzione locale
              </p>
              <h3
                id="area-manufacturing-title"
                className="font-serif text-xl font-semibold text-charcoal sm:text-2xl lg:text-3xl"
              >
                {localManufacturing.title}
              </h3>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                {localManufacturing.intro}
              </p>
              <ul
                className="mt-6 space-y-2.5 text-charcoal-soft text-sm sm:text-base"
                role="list"
              >
                {localManufacturing.cosaOffriamo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-olive/80">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        {siteConfig.showSpiritsProject && (
          <Reveal>
            <article
              className="pt-8 lg:pt-10"
              aria-labelledby="area-spirits-title"
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-olive mb-2">
                    Progetto in sviluppo
                  </p>
                  <h3
                    id="area-spirits-title"
                    className="font-serif text-xl font-semibold text-charcoal sm:text-2xl lg:text-3xl"
                  >
                    {spirits.title}
                  </h3>
                  <p className="mt-4 text-charcoal-soft leading-relaxed">
                    {spirits.intro}
                  </p>
                  <p className="mt-4 text-charcoal-soft leading-relaxed">
                    {spirits.concept}
                  </p>
                  {spirits.disclaimer && (
                    <p className="mt-6 text-xs text-charcoal-soft/90 italic">
                      {spirits.disclaimer}
                    </p>
                  )}
                </div>
                <div className="space-y-4">
                  {spirits.linee.map((linea) => (
                    <div
                      key={linea.name}
                      className="border border-charcoal/10 px-5 py-4"
                    >
                      <p className="text-sm font-medium text-charcoal mb-2">
                        {linea.name}
                      </p>
                      <ul className="space-y-1 text-charcoal-soft text-sm">
                        {linea.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-olive/60 shrink-0">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        )}
      </div>

      <Reveal>
        <div className="mt-14 text-center">
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
          >
            Parliamone
            <ArrowRight size={16} aria-hidden />
          </Link>
          <div className="mt-4 w-12 h-[1px] bg-olive/30 mx-auto" />
        </div>
      </Reveal>
    </Section>
  );
}
