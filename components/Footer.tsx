import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
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
      className="bg-charcoal/95 text-ivory mt-auto border-t border-ivory/10"
      aria-label="Piè di pagina"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <p className="font-serif text-lg font-semibold text-ivory">
              {siteConfig.companyName}
            </p>
            <p className="mt-2 text-sm text-ivory/75 leading-relaxed">
              Ponte tra Italia e America Latina
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ivory/60">
              Navigazione
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/85 hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ivory/60">
              Contatti
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-2.5 text-ivory/85 hover:text-ivory transition-colors"
                >
                  <Mail size={16} aria-hidden className="shrink-0" />
                  <span className="break-all">{contactData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactData.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-ivory/85 hover:text-ivory transition-colors"
                >
                  <Phone size={16} aria-hidden className="shrink-0" />
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ivory/85">
                <MapPin size={16} aria-hidden className="shrink-0" />
                {contactData.location}
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-ivory/60">
              Legal
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/85 hover:text-ivory transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-ivory/15 text-center text-sm text-ivory/60">
          © {new Date().getFullYear()} {siteConfig.companyName}. Tutti i diritti
          riservati.
        </div>
      </div>
    </footer>
  );
}
