"use client";

import { motion } from "framer-motion";
import { manifestContent } from "@/lib/content/home";

export function ManifestSection() {
  const words = `"${manifestContent.quote}"`.split(" ");

  return (
    <section
      className="relative py-28 sm:py-36 lg:py-44 bg-charcoal text-ivory overflow-hidden"
      aria-labelledby="manifest-quote"
    >
      <div
        className="absolute -bottom-12 -right-8 font-serif text-[22rem] leading-none text-ivory/[0.025] select-none pointer-events-none"
        aria-hidden
      >
        M
      </div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-olive/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-olive/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-serif text-[11px] text-olive/60 tabular-nums">06</span>
          <div className="w-6 h-[1px] bg-olive/40" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/30">Manifesto</span>
        </div>

        <h2
          id="manifest-quote"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.2] text-balance"
          aria-label={`"${manifestContent.quote}"`}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="mt-12 sm:mt-16 flex items-center gap-4 text-ivory/50 text-sm font-medium tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="w-12 h-[1px] bg-gold/50" />
          {manifestContent.tagline}
        </motion.p>
      </div>
    </section>
  );
}
