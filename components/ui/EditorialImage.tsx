"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EditorialImageProps {
  src: string;
  alt: string;
  /** Didascalia mostrata in basso a sinistra sull'immagine */
  caption?: string;
  /** Proporzioni dell'immagine (default: portrait 4/5) */
  aspect?: "portrait" | "landscape" | "square";
  /** Priority loading (true per hero) */
  priority?: boolean;
  /** sizes per Next/Image */
  sizes?: string;
  /** Classe aggiuntiva sul wrapper */
  className?: string;
  /** Disabilita animazione di entrata (es. quando già dentro un motion parent) */
  noAnimate?: boolean;
}

/**
 * Trattamento immagine ricorrente del sito.
 * Anatomia:
 *   - Cornice con proporzione fissa
 *   - Overlay charcoal sottile per legare alla palette
 *   - Linea olive verticale a sinistra (filo conduttore con SectionHeader)
 *   - Didascalia opzionale in basso a sinistra (linea olive + testo uppercase)
 */
export function EditorialImage({
  src,
  alt,
  caption,
  aspect = "portrait",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 40vw",
  className = "",
  noAnimate = false,
}: EditorialImageProps) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[4/5]"
      : aspect === "landscape"
      ? "aspect-[16/10]"
      : "aspect-square";

  const inner = (
    <div
      className={`relative ${aspectClass} w-full overflow-hidden ${className}`}
    >
      {/* Linea olive verticale lungo il bordo sinistro: 
          collega visivamente l'immagine al resto del sistema */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-olive z-20 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
        aria-hidden
      />

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />

      {/* Overlay charcoal sottile per integrare la foto nella palette */}
      <div
        className="absolute inset-0 bg-charcoal/15 z-10"
        aria-hidden
      />
      {/* Sfumatura dal basso per leggibilità della didascalia */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/55 to-transparent z-10"
        aria-hidden
      />

      {caption && (
        <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center gap-3 text-ivory">
          <div className="w-6 h-[1px] bg-olive/70 shrink-0" />
          <p className="text-[11px] font-medium uppercase tracking-[0.25em]">
            {caption}
          </p>
        </div>
      )}
    </div>
  );

  if (noAnimate) return inner;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {inner}
    </motion.div>
  );
}
