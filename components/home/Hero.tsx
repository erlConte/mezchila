"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/content/home";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";

export function Hero() {
  return (
    <section
      className="relative min-h-screen lg:min-h-screen flex flex-col justify-center overflow-hidden bg-ivory pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Background: bridge gradient + editorial details */}
      <div
        className="absolute inset-0 pointer-events-none bg-bridge-gradient"
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-0 right-0 top-[60%] h-[1px] bg-olive/20" />
        <div className="absolute -bottom-12 right-0 font-serif text-[18rem] leading-none text-charcoal/[0.04] select-none pointer-events-none z-0">
          01
        </div>
      </div>

      {/* Two-worlds visual: editorial axis composition */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-2xl h-[70%] max-h-[28rem] hidden lg:block pointer-events-none"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-3/4 w-full flex items-center justify-center">
            <div className="w-[1px] h-3/4 bg-gradient-to-b from-transparent via-olive/30 to-transparent" />
            <p className="absolute right-1/2 mr-5 -rotate-90 text-[11px] tracking-[0.3em] uppercase text-olive/50">
              ITALIA
            </p>
            <p className="absolute left-1/2 ml-5 rotate-90 text-[11px] tracking-[0.3em] uppercase text-olive/50">
              AMÉRICA LATINA
            </p>
          </div>
          <div className="mt-6 h-[8px] w-[8px] rotate-45 bg-olive/40" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl">
          <div className="w-8 h-[2px] bg-olive mb-4" />
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.25em] text-olive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {heroContent.eyeline}
          </motion.p>
          <AnimatedHeadline
            id="hero-heading"
            text={heroContent.headline}
            tag="h1"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.12] text-charcoal sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]"
          />
          <motion.p
            className="mt-6 text-base leading-relaxed text-charcoal-soft sm:text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroContent.supporting}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 rounded-md bg-charcoal px-6 py-3 text-sm font-medium text-ivory shadow-card hover:bg-charcoal-soft hover:shadow-card-hover transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              {heroContent.ctaPrimary}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/#aree-di-business"
              className="inline-flex items-center rounded-md border border-charcoal/25 px-6 py-3 text-sm font-medium text-charcoal hover:border-olive hover:text-olive transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2"
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
                <p className="text-xl font-serif font-semibold text-charcoal">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-charcoal/45 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
