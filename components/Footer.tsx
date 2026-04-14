import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { contactData } from "@/lib/content/contact";
import { siteConfig } from "@/lib/config";

const navLinks = [
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Aree di business", href: "/#aree-di-business" },
  { label: "Ecosistema", href: "/#ecosistema" },
  { label: "Contatti", href: "/contatti" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-charcoal text-ivory border-t border-ivory/8"
      aria-label="Piè di pagina"
    >
      <div className="h-[1px] bg-gradient-to-r from-transparent via-olive/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-8 pb-12 border-b border-ivory/8 flex-wrap">
          <div>
            <p className="font-serif text-2xl font-semibold text-ivory tracking-tight">
              {siteConfig.companyName}
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.25em] text-ivory/35 font-medium">
              Italia · América Latina
            </p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 border border-ivory/20 px-5 py-2.5 text-sm font-medium text-ivory/80 hover:bg-ivory/5 hover:text-ivory transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-olive"
          >
            Scrivici
          </Link>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:gap-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/35 mb-4">
              Navigazione
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/35 mb-4">
              Contatti
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-2.5 text-ivory/60 hover:text-ivory transition-colors"
                >
                  <Mail size={14} aria-hidden className="shrink-0 text-olive/60" />
                  {contactData.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ivory/60">
                <MapPin size={14} aria-hidden className="shrink-0 text-olive/60" />
                {contactData.location}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/35 mb-4">
              Legale
            </p>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/60 hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ivory/8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-ivory/30">
            © {new Date().getFullYear()} {siteConfig.companyName}. Tutti i diritti
            riservati.
          </p>
          <p className="text-xs text-ivory/20 font-serif italic">Roma · Italia</p>
        </div>
      </div>
    </footer>
  );
}
