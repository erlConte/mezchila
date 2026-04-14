"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { finalCtaContent } from "@/lib/content/home";
import { contactData } from "@/lib/content/contact";

const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}`;
const hasPhoneNumber = /^\+?\d[\d\s]+$/.test(contactData.phone);
const hasWhatsappNumber = /^\d{7,}$/.test(contactData.whatsappNumber);

const contactItems = [
  {
    href: `mailto:${contactData.email}`,
    icon: Mail,
    label: "Email",
    value: contactData.email,
  },
  {
    href: hasPhoneNumber ? `tel:${contactData.phone.replace(/\s/g, "")}` : null,
    icon: Phone,
    label: "Telefono",
    value: contactData.phone,
  },
  {
    href: hasWhatsappNumber ? whatsappUrl : null,
    icon: MessageCircle,
    label: "WhatsApp",
    value: hasWhatsappNumber ? "WhatsApp" : "Disponibile su richiesta via email",
    external: hasWhatsappNumber,
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
      className="bg-ivory text-charcoal relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute -bottom-16 -right-8 font-serif text-[clamp(6rem,20vw,14rem)] leading-none text-charcoal/[0.03] select-none pointer-events-none"
        aria-hidden
      >
        07
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
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
            className="mt-4 text-charcoal-soft leading-relaxed text-sm sm:text-base"
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
              className="inline-flex items-center gap-2 rounded-md bg-olive px-6 py-3 text-sm font-medium text-ivory hover:bg-olive-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
            >
              {finalCtaContent.ctaPrimary}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/#aree-di-business"
              className="inline-flex items-center rounded-md border border-charcoal/25 px-6 py-3 text-sm font-medium text-charcoal hover:border-olive hover:text-olive transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
            >
              {finalCtaContent.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 pt-12 border-t border-charcoal/10">
          <p className="text-xs font-medium uppercase tracking-wider text-charcoal/50 mb-6">
            Contatti diretti
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon size={18} className="text-olive shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-xs text-charcoal/50">{item.label}</p>
                    <p className="text-sm font-medium text-charcoal truncate">
                      {item.value}
                    </p>
                  </div>
                </>
              );
              const className =
                "flex items-center gap-3 rounded-lg border border-charcoal/10 bg-charcoal/[0.02] p-4 hover:bg-charcoal/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";
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
            className="mt-6 inline-block text-sm font-medium text-olive hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-ivory rounded"
          >
            Vai alla pagina Contatti →
          </Link>
        </div>
      </div>
    </section>
  );
}
