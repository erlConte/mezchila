import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  title: {
    default: "Mezchila — Ponte tra Italia e America Latina",
    template: "%s | Mezchila",
  },
  description:
    "Mezchila connette imprese italiane e latinoamericane attraverso export, produzione locale e partnership strategiche. Roma, Italia.",
  keywords: [
    "export Italia",
    "America Latina",
    "B2B",
    "internazionalizzazione",
    "partnership",
    "Mezchila",
  ],
  authors: [{ name: "Mezchila Srls" }],
  metadataBase: new URL("https://www.mezchila.it"),
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.mezchila.it",
    siteName: "Mezchila",
    title: "Mezchila — Ponte tra Italia e America Latina",
    description:
      "Connettendo imprese italiane e latinoamericane attraverso export, produzione locale e partnership strategiche.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mezchila — Ponte tra Italia e America Latina",
    description: "Connettendo imprese italiane e latinoamericane.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
