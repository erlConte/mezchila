"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { finalCtaContent } from "@/lib/content/home";
import { contactData } from "@/lib/content/contact";

const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}`;

const contactItems = [
  {
    href: `mailto:${contactData.email}`,
    icon: Mail,
    label: "Email",
    value: contactData.email,
  },
  {
    href: `tel:${contactData.phone.replace(/\s/g, "")}`,
    icon: Phone,
    label: "Telefono",
    value: contactData.phone,
  },
  {
    href: whatsappUrl,
    icon: MessageCircle,
    label: "WhatsApp",
    value: "WhatsApp",
    external: true,
  },
  {
    href: null,
    icon: MapPin,
    label: "Sede",
    value: contactData.location,
  },
] as const;

export function CTASection() {
  return (
    <section
      className="bg-charcoal text-ivory"
      aria-labelledby="cta-heading"
    >
      {/* Main CTA block */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <motion.h2
            id="cta-heading"
            className="font-serif text-2xl font-semibold leading-tight text-balance sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {finalCtaContent.title}
          </motion.h2>
          <motion.p
            className="mt-4 text-ivory/90 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            {finalCtaContent.text}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <Link
              href="/contatti"
              className="inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3 text-sm font-medium text-ivory hover:bg-olive-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              {finalCtaContent.ctaPrimary}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/#aree-di-business"
              className="inline-flex items-center rounded-md border border-ivory/40 px-6 py-3 text-sm font-medium text-ivory hover:bg-ivory/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              {finalCtaContent.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Integrated contact strip */}
        <div className="mt-16 pt-12 border-t border-ivory/15">
          <p className="text-xs font-medium uppercase tracking-wider text-ivory/60 mb-6">
            Contatti diretti
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon size={18} className="text-olive shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-xs text-ivory/60">{item.label}</p>
                    <p className="text-sm font-medium text-ivory truncate">
                      {item.value}
                    </p>
                  </div>
                </>
              );
              const className =
                "flex items-center gap-3 rounded-lg border border-ivory/10 bg-ivory/5 p-4 hover:bg-ivory/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal";
              if (item.href && (item as { external?: boolean }).external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                );
              }
              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className={className}>
                    {content}
                  </a>
                );
              }
              return (
                <div key={item.label} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
          <Link
            href="/contatti"
            className="mt-6 inline-block text-sm font-medium text-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded"
          >
            Vai alla pagina Contatti →
          </Link>
        </div>
      </div>
    </section>
  );
}
