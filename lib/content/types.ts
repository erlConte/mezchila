/**
 * Content types for Mezchila site.
 * Structure is ready for future i18n: Italian (it), Spanish (es), English (en).
 */
export type LangCode = "it" | "es" | "en";

export interface PartnershipGroup {
  id: string;
  title: string;
  items: string[];
}

export interface CountryItem {
  id: string;
  name: string;
}

export interface BusinessAreaItem {
  id: string;
  title: string;
  intro: string;
  items: string[];
}

/** Future: testimonials / recensioni (message or video) */
export interface TestimonialPlaceholder {
  id: string;
  type: "quote" | "video" | "case";
  title?: string;
  excerpt?: string;
  /** When real: company name or person, not invented */
  attribution?: string;
  /** For coming-soon or placeholder only */
  isPlaceholder?: boolean;
}

/** Future: partner / client cards for "Storie e collaborazioni" */
export interface PartnerStoryPlaceholder {
  id: string;
  title: string;
  excerpt: string;
  /** Sector or country for filtering */
  tag?: string;
  isPlaceholder?: boolean;
}
