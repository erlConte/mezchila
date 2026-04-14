"use client";

import { motion } from "framer-motion";

const items = [
  "Export · ",
  "Italia ·",
  "América Latina ·",
  "B2B ·",
  "Produzione locale ·",
  "Partnership ·",
  "Enogastronomia ·",
  "Internazionalizzazione ·",
];

export function MarqueeBand({ inverted = false }: { inverted?: boolean }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className={`relative overflow-hidden py-3 border-y ${
        inverted
          ? "bg-charcoal border-ivory/10 text-ivory/20"
          : "bg-ivory border-charcoal/8 text-charcoal/20"
      }`}
      aria-hidden
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-medium uppercase tracking-[0.25em] mx-4 shrink-0"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
