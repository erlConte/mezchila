import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { cookieSections } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sui cookie del sito Mezchila Srls.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <article className="max-w-3xl">
          <h1 className="font-serif text-3xl font-semibold text-charcoal">
            Cookie Policy
          </h1>
          <p className="mt-4 text-charcoal-soft">
            Questa pagina contiene placeholder da sostituire con il testo
            legale definitivo redatto da un professionista.
          </p>
          <div className="mt-12 space-y-10">
            {cookieSections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-xl font-semibold text-charcoal">
                  {section.title}
                </h2>
                <p className="mt-3 text-charcoal-soft leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </article>
      </Container>
    </div>
  );
}
