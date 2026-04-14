"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Aree di business", href: "/#aree-di-business" },
  { label: "Ecosistema", href: "/#ecosistema" },
  { label: "Contatti", href: "/contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm border-b border-ivory-dark"
          : "bg-ivory"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
        aria-label="Navigazione principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg font-semibold text-charcoal hover:text-olive transition-colors min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center border border-charcoal/20 font-serif text-sm font-semibold text-charcoal"
            aria-hidden
          >
            M
          </span>
          <span className="truncate">{siteConfig.companyName}</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.href === "/contatti" ? (
                <Link
                  href="/contatti"
                  className="inline-flex items-center text-sm font-medium text-charcoal border border-charcoal/25 px-4 py-1.5 hover:border-olive hover:text-olive transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-olive"
                  onClick={() => setOpen(false)}
                >
                  Contatti
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-charcoal/70 hover:text-olive transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 rounded px-1 py-0.5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2.5 text-charcoal hover:text-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-olive rounded shrink-0"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu di navigazione"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-ivory-dark bg-ivory"
          >
            <ul className="flex flex-col px-4 py-5 gap-0.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3.5 text-charcoal font-medium hover:text-olive transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olive rounded px-2 -mx-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
