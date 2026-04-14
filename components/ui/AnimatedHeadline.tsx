"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
  id?: string;
  staggerMs?: number;
  startDelay?: number;
}

export function AnimatedHeadline({
  text,
  className = "",
  tag: Tag = "h1",
  id,
  staggerMs = 60,
  startDelay = 100,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  const words = text.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      id={id}
      className={className}
      aria-label={text}
      suppressHydrationWarning
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block mr-[0.25em]"
            animate={{
              opacity: mounted ? 1 : 0,
              y: mounted ? 0 : 16,
              filter: mounted ? "blur(0px)" : "blur(4px)",
            }}
            style={{ willChange: "opacity, transform" }}
            transition={{
              duration: 0.55,
              delay: (i * staggerMs) / 1000,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
