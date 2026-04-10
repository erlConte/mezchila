"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/content/home";

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-ivory pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Background: bridge gradient + ambient blurs */}
      <div
        className="absolute inset-0 pointer-events-none bg-bridge-gradient"
        aria-hidden
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-20 w-[32rem] h-[32rem] rounded-full bg-olive/[0.06] blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[28rem] h-[28rem] rounded-full bg-terracotta-muted/[0.06] blur-3xl" />
      </div>

      {/* Two-worlds visual: abstract bridge composition */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-2xl h-[70%] max-h-[28rem] hidden lg:block pointer-events-none"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left circle: Italy / olive */}
          <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full bg-olive/[0.08] border border-olive/15" />
          {/* Right circle: LatAm / terracotta */}
          <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full bg-terracotta-muted/[0.08] border border-terracotta-muted/15" />
          {/* Overlap / bridge zone */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-charcoal/[0.04] border border-charcoal/10" />
          {/* Connecting arc - subtle line */}
          <svg
            className="absolute left-[22%] top-1/2 w-[56%] -translate-y-1/2 opacity-30"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 10 30 Q 100 0 190 30"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="text-olive"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-xl">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.25em] text-olive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {heroContent.eyeline}
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.12] text-charcoal sm:text-4xl lg:text-[2.6rem] lg:leading-[1.18]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroContent.headline}
          </motion.h1>
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
        </div>
      </div>
    </section>
  );
}
