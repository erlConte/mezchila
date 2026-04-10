"use client";

import { motion } from "framer-motion";
import { manifestContent } from "@/lib/content/home";

export function ManifestSection() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 bg-charcoal text-ivory overflow-hidden"
      aria-labelledby="manifest-quote"
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-olive/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-terracotta-muted/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote
          id="manifest-quote"
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.25] text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;{manifestContent.quote}&rdquo;
        </motion.blockquote>
        <motion.p
          className="mt-8 text-ivory/75 text-sm sm:text-base font-medium tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {manifestContent.tagline}
        </motion.p>
      </div>
    </section>
  );
}
