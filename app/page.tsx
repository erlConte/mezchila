import { Hero } from "@/components/home/Hero";
import { ChiSiamo } from "@/components/home/ChiSiamo";
import { BussolaSection } from "@/components/home/BussolaSection";
import { BusinessAreaSection } from "@/components/home/BusinessAreaSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { ManifestSection } from "@/components/home/ManifestSection";
import { StorieTeaser } from "@/components/home/StorieTeaser";
import { CTASection } from "@/components/home/CTASection";
import { MarqueeBand } from "@/components/ui/MarqueeBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <ChiSiamo />
      <BussolaSection />
      <BusinessAreaSection />
      <EcosystemSection />
      <ManifestSection />
      <MarqueeBand inverted />
      <StorieTeaser />
      <CTASection />
    </>
  );
}
