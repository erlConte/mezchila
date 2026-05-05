import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Export Positioning Italia → America Latina — Mezchila",
  description:
    "Posizioniamo aziende italiane di eccellenza nei mercati latinoamericani: scouting, analisi di mercato, matchmaking con importatori, supporto commerciale.",
};

const cosaFacciamo = [
  "Scouting di aziende italiane ad alto potenziale",
  "Analisi di mercato per Colombia, Messico, Cile, Perù, Brasile",
  "Matchmaking con i principali importatori e distributori latinoamericani",
  "Supporto commerciale e definizione listini export",
  "Compliance documentale e certificazioni",
  "Gestione ordini, logistica e analisi dati",
];

const perchePromos = [
  "Rete consolidata e conoscenza profonda del contesto LatAm",
  "Approccio personalizzato e orientato all'esecuzione",
  "Know-how interculturale Italia–LatAm",
];

const risultati = [
  "Riduzione dei tempi di importazione",
  "Aumento della competitività locale",
  "Possibilità di espansione regionale",
];

const paesi = ["Colombia", "Messico", "Cile", "Perù", "Brasile"];

export default function ExportPositioningPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Link
          href="/#aree-di-business"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50 hover:text-olive transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Torna alla home
        </Link>

        <div className="mt-12 flex items-center gap-3">
          <span className="font-serif text-[11px] text-olive/60 tabular-nums">
            04
          </span>
          <div className="w-6 h-[1px] bg-olive/40" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-olive">
            Servizio — Export
          </span>
        </div>

        <h1 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-charcoal">
          Export Positioning
          <span className="block text-charcoal/50">Italia → America Latina</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-charcoal-soft leading-relaxed">
          Posizioniamo aziende italiane di eccellenza nei mercati
          latinoamericani con un approccio strutturato, analitico e orientato
          ai risultati.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-10">
          Cosa facciamo
        </p>
        <ul
          className="grid sm:grid-cols-2 gap-x-12"
          role="list"
        >
          {cosaFacciamo.map((v) => (
            <li
              key={v}
              className="flex gap-4 py-4 border-b border-charcoal/8 text-charcoal-soft text-sm sm:text-base"
            >
              <span className="text-olive/60 shrink-0">—</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ivory-dark/40 border-y border-charcoal/8 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-8">
              Perché Mezchila
            </p>
            <ul className="space-y-4 text-charcoal-soft text-sm sm:text-base" role="list">
              {perchePromos.map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="text-olive/60 shrink-0">—</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50 mb-8">
              Risultati attesi
            </p>
            <ul className="space-y-4 text-charcoal-soft text-sm sm:text-base" role="list">
              {risultati.map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="text-gold/60 shrink-0">—</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-10">
          Mercati di riferimento
        </p>
        <div className="flex flex-wrap gap-2.5">
          {paesi.map((p) => (
            <span
              key={p}
              className="inline-flex border border-charcoal/12 px-4 py-2 font-serif text-base text-charcoal"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3 text-sm font-medium text-ivory hover:bg-olive-muted transition-colors"
        >
          Parliamone
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>
    </main>
  );
}