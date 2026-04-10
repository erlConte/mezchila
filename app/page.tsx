import { Hero } from "@/components/home/Hero";
import { ChiSiamo } from "@/components/home/ChiSiamo";
import { BussolaSection } from "@/components/home/BussolaSection";
import { BusinessAreaSection } from "@/components/home/BusinessAreaSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { ManifestSection } from "@/components/home/ManifestSection";
import { StorieTeaser } from "@/components/home/StorieTeaser";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChiSiamo />
      <BussolaSection />
      <BusinessAreaSection />
      <EcosystemSection />
      <ManifestSection />
      <StorieTeaser />
      <CTASection />
    </>
  );
}
