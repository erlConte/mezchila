"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/content/home";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { EditorialImage } from "@/components/ui/EditorialImage";

/* Stesso pattern visivo dei SectionHeader (numero + linea + label),
   inline qui perché l'hero ha un layout speciale (non usa SectionHeader
   che è ottimizzato per le sezioni intermedie). */
function HeroSectionMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="font-serif text-[11px] text-olive/60 tabular-nums">
        01
      </span>
      <div className="w-6 h-[1px] bg-olive/40" />
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/45">
        Apertura
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-ivory pt-24 pb-16 lg:pt-28 lg:pb-20"
      aria-labelledby="hero-heading"
    >
      {/* Sfondo: bridge gradient + linea orizzontale a 60% (heritage del design originale) */}
      <div
        className="absolute inset-0 pointer-events-none bg-bridge-gradient"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* COLONNA TESTO */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSectionMark />
            </motion.div>

            <motion.p
              className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-olive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              {heroContent.eyeline}
            </motion.p>

            <AnimatedHeadline
              id="hero-heading"
              text={heroContent.headline}
              tag="h1"
              className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-semibold leading-[1.12] text-charcoal"
            />

            <motion.p
              className="mt-6 text-base sm:text-lg leading-relaxed text-charcoal-soft max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroContent.supporting}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 rounded-md bg-charcoal px-7 py-3.5 text-sm font-medium text-ivory shadow-card hover:bg-charcoal-soft hover:shadow-card-hover transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                {heroContent.ctaPrimary}
                <ArrowRight size={18} aria-hidden />
              </Link>
              <Link
                href="/#aree-di-business"
                className="inline-flex items-center rounded-md border border-charcoal/25 px-7 py-3.5 text-sm font-medium text-charcoal hover:border-olive hover:text-olive transition-colors duration-200"
              >
                {heroContent.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "2", label: "Continenti" },
                { value: "B2B", label: "Focus" },
                { value: "IT · ES · EN", label: "Mercati" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-serif font-semibold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal/45 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* COLONNA IMMAGINE — usa EditorialImage per il trattamento ricorrente */}
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/hero-mezchila.jpg"
              alt="Eccellenza enogastronomica italiana"
              caption="Italia · America Latina"
              aspect="portrait"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
