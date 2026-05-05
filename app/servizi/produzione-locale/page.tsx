import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Produzione locale in America Latina — Mezchila",
  description:
    "Accompagniamo aziende italiane nell'avviare produzioni locali in America Latina: studi di fattibilità, partner industriali, registrazioni sanitarie, scaling.",
};

const cosaFacciamo = [
  "Studi di fattibilità tecnico-economica",
  "Business case e analisi ROI",
  "Selezione di partner industriali e siti produttivi",
  "Registrazioni sanitarie e regolatorie",
  "Assistenza per contratti, QA, SOP e avvio produzione",
  "Follow-up operativo e scaling della produzione",
];

const benefici = [
  "Riduzione costi e dazi",
  "Tempi di go-to-market più rapidi",
  "Espansione regionale facilitata",
];

export default function ProduzioneLocalePage() {
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
            Servizio — Produzione
          </span>
        </div>

        <h1 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-charcoal">
          Produzione locale
          <span className="block text-charcoal/50">in America Latina</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-charcoal-soft leading-relaxed">
          Accompagniamo aziende italiane nell'avviare produzioni locali in
          America Latina per ridurre costi, tempi e dazi e accelerare
          l'espansione regionale.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-10">
          Cosa facciamo
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-12" role="list">
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-10">
            Benefici per la tua azienda
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {benefici.map((b, i) => (
              <div key={b} className="border-l-2 border-olive/40 pl-6">
                <span className="font-serif text-[11px] text-olive/60 tabular-nums">
                  0{i + 1}
                </span>
                <p className="mt-3 font-serif text-xl font-semibold text-charcoal leading-tight">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32">
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