"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const aree = [
  {
    tag: "Export",
    titolo: "Export Positioning",
    sottotitolo: "Italia → America Latina",
    descrizione:
      "Posizioniamo aziende italiane di eccellenza nei mercati latinoamericani con un approccio strutturato e orientato ai risultati.",
    bullet: [
      "Scouting aziende italiane ad alto potenziale",
      "Analisi mercato Colombia, Messico, Cile, Perù, Brasile",
      "Matchmaking con importatori e distributori",
      "Supporto commerciale e listini export",
    ],
    href: "/servizi/export-positioning",
  },
  {
    tag: "Produzione locale",
    titolo: "Produzione locale",
    sottotitolo: "in America Latina",
    descrizione:
      "Accompagniamo aziende italiane nell'avviare produzioni locali in America Latina per ridurre costi, tempi e dazi.",
    bullet: [
      "Studi di fattibilità tecnico-economica",
      "Selezione partner industriali e siti produttivi",
      "Registrazioni sanitarie e regolatorie",
      "Avvio produzione e scaling",
    ],
    href: "/servizi/produzione-locale",
  },
];

export function BusinessAreaSection() {
  return (
    <Section id="aree-di-business" className="bg-ivory">

      <SectionHeader
        number="04"
        label="Aree di Business"
        kicker="Cosa facciamo"
        title="Le nostre aree di business"
        titleId="aree-di-business-heading"
        className="mb-14"
      />

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {aree.map((a, i) => (
          <Reveal key={a.titolo} delay={0.06 + i * 0.04}>
            <article className="h-full bg-ivory-dark/40 border border-charcoal/8 p-8 sm:p-10 flex flex-col">
              <div className="w-6 h-[1px] bg-olive/40 mb-5" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-olive mb-3">
                {a.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal leading-tight">
                {a.titolo}
              </h3>
              <p className="font-serif text-lg sm:text-xl text-charcoal/55 mt-1">
                {a.sottotitolo}
              </p>
              <p className="mt-6 text-sm sm:text-base text-charcoal-soft leading-relaxed">
                {a.descrizione}
              </p>
              <ul
                className="mt-8 space-y-3 text-sm text-charcoal-soft flex-1"
                role="list"
              >
                {a.bullet.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-olive/60 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={a.href}
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
              >
                Approfondisci
                <ArrowRight size={14} aria-hidden />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
