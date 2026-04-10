"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { businessAreasContent } from "@/lib/content/home";
import { siteConfig } from "@/lib/config";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function BusinessAreaSection() {
  const { exportPositioning, localManufacturing, spirits } =
    businessAreasContent;

  return (
    <Section id="aree-di-business" className="bg-ivory-dark/30">
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
        {/* Export — asymmetric: text left, outcomes right */}
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
                className="font-serif text-xl font-semibold text-charcoal sm:text-2xl"
              >
                {exportPositioning.title}
              </h3>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                {exportPositioning.intro}
              </p>
              <ul className="mt-6 space-y-2.5 text-charcoal-soft text-sm sm:text-base" role="list">
                {exportPositioning.cosaFacciamo.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-olive/80">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-charcoal-soft/80 text-sm">
                + compliance documentale, gestione ordini, logistica e analisi dati
              </p>
            </div>
            <div className="lg:col-span-5 lg:pl-4">
              <div className="rounded-xl border-l-2 border-olive/40 bg-white/50 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-charcoal/70 mb-4">
                  Perché scegliere noi
                </p>
                <ul className="space-y-3" role="list">
                  {exportPositioning.percheScegliereNoi.map((item) => (
                    <li key={item} className="text-charcoal-soft text-sm flex gap-2">
                      <ArrowRight size={14} className="text-olive shrink-0 mt-1" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Local Manufacturing — reversed: visual left (countries), content right */}
        <Reveal>
          <article
            className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start"
            aria-labelledby="area-manufacturing-title"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl border border-ivory-dark bg-white/60 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-olive mb-4 flex items-center gap-2">
                  <MapPin size={14} aria-hidden />
                  Paesi
                </p>
                <div className="flex flex-wrap gap-2">
                  {localManufacturing.paesi.map((country) => (
                    <span
                      key={country}
                      className="inline-flex rounded-md border border-olive/20 bg-olive/5 px-3 py-1.5 text-sm font-medium text-charcoal"
                    >
                      {country}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-charcoal/70 mb-3">
                  Risultati attesi
                </p>
                <ul className="space-y-2 text-charcoal-soft text-sm" role="list">
                  {localManufacturing.risultatiAttesi.map((r) => (
                    <li key={r}>• {r}</li>
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
                className="font-serif text-xl font-semibold text-charcoal sm:text-2xl"
              >
                {localManufacturing.title}
              </h3>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                {localManufacturing.intro}
              </p>
              <ul className="mt-6 space-y-2.5 text-charcoal-soft text-sm sm:text-base" role="list">
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

        {/* Spirits — hidden by default */}
        {siteConfig.showSpiritsProject && (
          <Reveal>
            <article
              className="rounded-xl border border-olive/20 bg-olive/5 p-6 sm:p-8 lg:p-10"
              aria-labelledby="area-spirits-title"
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-olive mb-2">
                    Progetto in sviluppo
                  </p>
                  <h3
                    id="area-spirits-title"
                    className="font-serif text-xl font-semibold text-charcoal sm:text-2xl"
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
                    <div key={linea.name} className="rounded-lg border border-olive/20 bg-white/30 p-4">
                      <p className="text-sm font-medium text-charcoal mb-2">
                        {linea.name}
                      </p>
                      <ul className="space-y-1 text-charcoal-soft text-sm">
                        {linea.items.map((item) => (
                          <li key={item}>• {item}</li>
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
        </div>
      </Reveal>
    </Section>
  );
}
