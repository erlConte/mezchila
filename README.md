# Mezchila Srls — Sito corporate

Sito istituzionale per Mezchila Srls: ponte tra Italia e America Latina (B2B, internazionalizzazione, produzione locale, partnership).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animazioni leggere)
- Lucide React (icone)

## Avvio in locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build per produzione

```bash
npm run build
npm start
```

## Dati da completare prima della pubblicazione

- **Contatti** (`lib/content/contact.ts`): email (`info@mezchila.com`), telefono e numero WhatsApp da confermare, sede (`Roma, Italia`).
- **Config** (`lib/config.ts`): `baseUrl` con l’URL reale del sito.
- **Pagine legali**: verificare periodicamente i testi in `lib/content/legal.ts` con un professionista.
- **Form contatti**: l’invio è solo front-end (messaggio di successo). Per invio reale va integrato un backend (API route, servizio email, form third-party).

## Sezione Spirits (nascosta di default)

La sezione sul progetto spirits è in codice ma nascosta. Per mostrarla: in `lib/config.ts` impostare `showSpiritsProject: true`.

## Struttura principali cartelle

- `app/` — pagine (/, /contatti, /privacy, /cookie-policy)
- `components/` — Navbar, Footer, sezioni homepage (Hero, ChiSiamo, BussolaSection, BusinessAreaSection, EcosystemSection, ManifestSection, StorieTeaser, CTASection), layout, form, ui
- `lib/config.ts` — flag di configurazione (es. spirits)
- `lib/content/` — contenuti (home, contact, legal, types)
- `lib/content/types.ts` — tipi per partnership, storie/testimonianze (pronto per i18n)

## Homepage — struttura attuale

1. Hero (ponte Italia–LatAm)
2. Chi siamo (con pilastri e perché con noi)
3. La nostra bussola (missione, visione, valori)
4. Aree di business (export, produzione locale, spirits se attivo)
5. Ecosistema e opportunità (rete istituzionale + strumenti/finanziamenti)
6. Manifesto (blocco identità)
7. Storie teaser (minimale in assenza di casi pubblicati)
8. CTA finale + contatti integrati

## Contenuti e evoluzione

- **Lingua**: contenuti in italiano; struttura pronta per estensione multilingue (it, es, en) tramite `currentLang` e chiavi in `lib/content/`.
- **Storie e collaborazioni**: teaser minimale quando non ci sono ancora casi pubblicati; `storieContent.items` per voci reali. Sostituire `StorieTeaser` con sezione completa quando disponibili storie.
- **Partner/clienti/testimonianze**: tipi `TestimonialPlaceholder` e `PartnerStoryPlaceholder` in `types.ts`; evitare dati inventati.
- **Spirits**: sezione in codice con narrativa aggiornata (agave, sensibilità italiana, progetto in sviluppo); nascosta da `showSpiritsProject: false`.
