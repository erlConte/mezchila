import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ecosistema — Mezchila",
  description:
    "Rete istituzionale e strumenti di internazionalizzazione tra Italia e America Latina: ICE, SACE, SIMEST, ProColombia, ProChile, ApexBrasil e bandi regionali.",
};

const reteItalia = [
  "Ambasciate e Consolati",
  "ICE – Agenzia per l'Internazionalizzazione",
  "SACE e SIMEST",
  "Camere di Commercio italiane e italiane all'estero",
  "Confindustria e Unindustria",
  "Regioni italiane (Lazio, Lombardia, Emilia-Romagna)",
];

const reteLatam = [
  "ProColombia",
  "ProChile",
  "PromPerú",
  "ApexBrasil",
  "Camere di Commercio locali",
  "Associazioni Horeca, spirits e settore F&B",
];

const reteMultilaterali = ["ALADI", "Mercosur", "Alianza del Pacífico"];

const strumenti = [
  {
    nome: "SIMEST – Fondo 394",
    voci: [
      "Fiere internazionali",
      "Inserimento mercati esteri",
      "Temporary manager",
      "E-commerce e marketplace",
      "Certificazioni e consulenze",
      "Misure speciali America Latina",
    ],
  },
  {
    nome: "SACE",
    voci: [
      "Garanzie finanziarie",
      "Assicurazione crediti export",
      "Strumenti di protezione del rischio paese",
    ],
  },
  {
    nome: "Bandi Regionali",
    voci: [
      "Lazio – Voucher Internazionalizzazione",
      "Lombardia – Verso Nuovi Mercati",
      "Emilia-Romagna – Bandi per Fiere e Internazionalizzazione",
    ],
  },
];

function Card({
  title,
  items,
  accent = "olive",
}: {
  title: string;
  items: readonly string[];
  accent?: "olive" | "gold";
}) {
  const dashColor = accent === "gold" ? "text-gold/60" : "text-olive/60";
  const lineColor = accent === "gold" ? "bg-gold/50" : "bg-olive/40";
  return (
    <article className="bg-ivory border border-charcoal/8 p-8">
      <div className={`w-6 h-[1px] ${lineColor} mb-5`} />
      <h3 className="font-serif text-lg font-semibold text-charcoal mb-6">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm text-charcoal-soft" role="list">
        {items.map((v) => (
          <li key={v} className="flex gap-3">
            <span className={`${dashColor} shrink-0`}>—</span>
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function EcosistemaPage() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Link
          href="/#ecosistema"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50 hover:text-olive transition-colors"
        >
          <ArrowLeft size={14} aria-hidden />
          Torna alla home
        </Link>

        <div className="mt-12 flex items-center gap-3">
          <span className="font-serif text-[11px] text-olive/60 tabular-nums">
            05
          </span>
          <div className="w-6 h-[1px] bg-olive/40" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-olive">
            Ecosistema
          </span>
        </div>

        <h1 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] text-charcoal">
          Rete istituzionale e strumenti
          <span className="block text-charcoal/50">
            di internazionalizzazione
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-charcoal-soft leading-relaxed">
          Una mappa completa dei nostri riferimenti operativi tra Italia e
          America Latina.
        </p>
      </section>

      <section className="bg-ivory-dark/40 border-y border-charcoal/8 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive mb-10">
            Rete istituzionale
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card title="In Italia" items={reteItalia} />
            <Card title="In America Latina" items={reteLatam} />
            <Card title="Multilaterali" items={reteMultilaterali} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-10">
          Strumenti e finanziamenti
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {strumenti.map((s) => (
            <Card key={s.nome} title={s.nome} items={s.voci} accent="gold" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32">
        <Link
          href="/contatti"
          className="inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3 text-sm font-medium text-ivory hover:bg-olive-muted transition-colors"
        >
          Valutiamo insieme le opportunità
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>
    </main>
  );
}