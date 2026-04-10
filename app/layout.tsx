import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/config";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.companyName} | Ponte tra Italia e America Latina`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "Mezchila Srls: internazionalizzazione, produzione locale e visione interculturale per connettere aziende e mercati tra Italia e America Latina.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.companyName,
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${serif.variable} ${sans.variable}`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
