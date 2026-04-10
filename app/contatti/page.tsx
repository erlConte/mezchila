import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { contactPageContent, contactData } from "@/lib/content/contact";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Mezchila Srls per informazioni su internazionalizzazione, produzione locale e partnership tra Italia e America Latina.",
};

const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}`;

const directItems: Array<{
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}> = [
  {
    href: `mailto:${contactData.email}`,
    icon: Mail,
    label: contactPageContent.direct.email,
    value: contactData.email,
  },
  {
    href: `tel:${contactData.phone.replace(/\s/g, "")}`,
    icon: Phone,
    label: contactPageContent.direct.phone,
    value: contactData.phone,
  },
  {
    href: whatsappUrl,
    icon: MessageCircle,
    label: contactPageContent.direct.whatsapp,
    value: "WhatsApp",
    external: true,
  },
  {
    icon: MapPin,
    label: contactPageContent.direct.location,
    value: contactData.location,
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          title={contactPageContent.title}
          intro={contactPageContent.intro}
          className="mb-12"
        />
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2 space-y-5">
            <h3 className="font-serif text-lg font-semibold text-charcoal">
              {contactPageContent.direct.title}
            </h3>
            {directItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon
                    size={20}
                    className="text-olive shrink-0"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-charcoal/70">{item.label}</p>
                    <p className="font-medium text-charcoal truncate">
                      {item.value}
                    </p>
                  </div>
                </>
              );
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    {...(item.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex items-center gap-3 rounded-lg border border-ivory-dark bg-white/50 p-4 hover:border-olive/25 hover:shadow-card transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2"
                  >
                    {content}
                  </a>
                );
              }
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-ivory-dark bg-white/50 p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
