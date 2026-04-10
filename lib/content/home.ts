import type { PartnershipGroup, PartnerStoryPlaceholder } from "./types";

/** Current UI language; content is structured for future it / es / en */
export const currentLang = "it" as const;

// ——— HERO ———
export const heroContent = {
  headline: "Il ponte tra eccellenza italiana e visione latinoamericana.",
  supporting:
    "Mezchila connette aziende, culture, competenze e opportunità tra Italia e America Latina, trasformando la diversità in valore economico, produttivo e identitario.",
  ctaPrimary: "Contattaci",
  ctaSecondary: "Scopri le aree di business",
  eyeline: "Italia · America Latina",
} as const;

// ——— CHI SIAMO (with absorbed "why Mezchila" points) ———
export const chiSiamoContent = {
  title: "Chi siamo",
  intro:
    "Mezchila non è solo consulenza: è una piattaforma di connessione. Uniamo know-how industriale, accesso ai mercati, produzione locale, intelligence culturale e visione di prodotto in un unico ecosistema.",
  narrative:
    "Siamo un punto di connessione tra persone, culture, tradizioni e sapori. Valorizziamo le differenze non come distanza ma come ricchezza: percorsi di vita diversi e competenze complementari che generano valore insieme.",
  pillars: [
    "Know-how industriale e accesso ai mercati",
    "Produzione locale e capacità operativa",
    "Intelligence culturale Italia–LatAm",
    "Visione di prodotto e identità interculturale",
  ],
  whyPoints: [
    "Conosciamo a fondo sia il mercato italiano che quello latinoamericano",
    "Rete istituzionale e commerciale consolidata",
    "Capacità di operare su più livelli: export, produzione, brand building",
    "Unione tra culture, generazioni, competenze e filiere",
  ],
} as const;

// ——— LA NOSTRA BUSSOLA (reframed mission / vision / values) ———
export const bussolaContent = {
  title: "La nostra bussola",
  subtitle: "Missione, visione e valori",
  mission:
    "Diffondere l'eccellenza italiana nei mercati latinoamericani attraverso connessioni strategiche, soluzioni produttive locali e progetti interculturali ad alto valore.",
  vision:
    "Diventare un riferimento tra Italia e America Latina per chi vuole trasformare differenze culturali, industriali e di mercato in opportunità concrete.",
  values: [
    "Eccellenza",
    "Integrità e trasparenza",
    "Interculturalità",
    "Sostenibilità produttiva e sociale",
    "Visione condivisa",
    "Capacità di unire mondi diversi",
  ],
} as const;

// ——— BUSINESS AREAS ———
export const businessAreasContent = {
  title: "Le nostre aree di business",
  exportPositioning: {
    title: "Export Positioning — Italia → America Latina",
    intro:
      "Posizioniamo aziende italiane di eccellenza nei mercati latinoamericani con un approccio strutturato, analitico e orientato ai risultati.",
    cosaFacciamo: [
      "Scouting di aziende italiane ad alto potenziale",
      "Analisi di mercato per Colombia, Messico, Cile, Perù, Brasile",
      "Matchmaking con i principali importatori e distributori latinoamericani",
      "Supporto commerciale e definizione listini export",
      "Compliance documentale e regolatoria",
      "Gestione ordini, logistica, forecast e analisi dati",
    ],
    percheScegliereNoi: [
      "Rete consolidata e conoscenza profonda del contesto LatAm",
      "Approccio personalizzato e orientato all'esecuzione",
      "Know-how interculturale Italia–LatAm",
    ],
  },
  localManufacturing: {
    title: "Produzione locale in America Latina",
    intro:
      "Accompagniamo aziende italiane nell'avviare produzioni locali in America Latina per ridurre costi, tempi e dazi e accelerare l'espansione regionale.",
    paesi: ["Colombia", "Messico", "Cile", "Perù", "Brasile"],
    cosaOffriamo: [
      "Studi di fattibilità tecnico-economica",
      "Business case e analisi ROI",
      "Selezione di partner industriali e siti produttivi",
      "Registrazioni sanitarie e regolatorie",
      "Assistenza per contratti, QA, SOP e avvio produzione",
      "Follow-up operativo e scaling della produzione",
    ],
    risultatiAttesi: [
      "Riduzione dei tempi di importazione",
      "Aumento della competitività locale",
      "Possibilità di espansione regionale",
    ],
  },
  spirits: {
    title: "Mezchila — il distillato che unisce due mondi",
    intro:
      "Un progetto in sviluppo che unisce agave latinoamericana e sensibilità italiana: metodologie mezcal/tequila in dialogo con erbe e approccio amaro, in una bottiglia e un design di impronta italiana.",
    concept:
      "Progetto simbolico dell'unione interculturale: due tradizioni, due mercati e una visione di prodotto che rafforza l'identità di Mezchila come ponte tra culture.",
    linee: [
      {
        name: "Linea commerciale",
        items: [
          "38–40% vol",
          "Gusto morbido e contemporaneo",
          "Ideale per cocktail e mixology",
        ],
      },
      {
        name: "Linea premium",
        items: [
          "42–45% vol",
          "Blend superiore con affinamenti dedicati",
          "Packaging iconico e lotti numerati",
        ],
      },
    ],
    disclaimer:
      "Progetto in fase di sviluppo concettuale e strategico. Non costituisce offerta commerciale né claim regolatori.",
  },
} as const;

// ——— ECOSISTEMA E OPPORTUNITÀ (merged partnership + funding) ———
export const ecosystemContent = {
  title: "Ecosistema e opportunità",
  subtitle: "Rete istituzionale e strumenti di internazionalizzazione",
  intro:
    "Mezchila opera in dialogo con istituzioni, enti e associazioni tra Italia e America Latina. Supportiamo le aziende nella valutazione e nella preparazione delle candidature ai principali programmi di finanziamento per l'internazionalizzazione.",
  ecosystem: {
    title: "Rete istituzionale",
    groups: [
      {
        id: "it",
        title: "In Italia",
        items: [
          "Ambasciate e Consolati",
          "ICE – Agenzia per l'Internazionalizzazione",
          "SACE e SIMEST",
          "Camere di Commercio italiane e italiane all'estero",
          "Confindustria e Unindustria",
          "Regioni italiane (Lazio, Lombardia, Emilia-Romagna)",
        ],
      },
      {
        id: "latam",
        title: "In America Latina",
        items: [
          "ProColombia",
          "ProChile",
          "PromPerú",
          "ApexBrasil",
          "Camere di Commercio locali",
          "Associazioni Horeca, spirits e settore F&B",
        ],
      },
      {
        id: "multilateral",
        title: "Organizzazioni multilaterali",
        items: ["ALADI", "Mercosur", "Alianza del Pacífico"],
      },
    ] as PartnershipGroup[],
  },
  instruments: {
    title: "Strumenti e finanziamenti",
    groups: [
      {
        title: "SIMEST – Fondo 394",
        items: [
          "Fiere internazionali",
          "Inserimento mercati esteri",
          "Temporary manager",
          "E-commerce e marketplace",
          "Certificazioni e consulenze",
          "Misure speciali America Latina",
        ],
      },
      {
        title: "SACE",
        items: [
          "Garanzie finanziarie",
          "Assicurazione crediti export",
          "Strumenti di protezione del rischio paese",
        ],
      },
      {
        title: "Bandi Regionali",
        items: [
          "Lazio – Voucher Internazionalizzazione",
          "Lombardia – Verso Nuovi Mercati",
          "Emilia-Romagna – Bandi per Fiere e Internazionalizzazione",
        ],
      },
    ],
  },
} as const;

// ——— MANIFESTO / BRAND MOMENT ———
export const manifestContent = {
  quote:
    "Le differenze non sono distanza. Sono il punto di incontro dove generiamo valore.",
  tagline: "Mezchila — dove culture, competenze e mercati si incontrano",
} as const;

// ——— STORIE TEASER (minimal when placeholder) ———
export const storieContent = {
  title: "Storie e collaborazioni",
  subtitle: "Partner e percorsi",
  intro:
    "Le collaborazioni che costruiamo con aziende e istituzioni raccontano la forza della connessione tra mondi diversi.",
  teaserText:
    "Storie di aziende e partner che hanno scelto Mezchila per export, produzione locale o sviluppo di progetto saranno pubblicate in questa sezione.",
  ctaLabel: "Raccontaci la tua",
  /** Add real entries when available; keep isPlaceholder: true for demo */
  items: [
    {
      id: "1",
      title: "Percorsi in definizione",
      excerpt:
        "Storie di aziende e partner che hanno scelto Mezchila per export, produzione locale o sviluppo di progetto saranno pubblicate in questa sezione.",
      tag: "In arrivo",
      isPlaceholder: true,
    },
    {
      id: "2",
      title: "Collaborazioni istituzionali",
      excerpt:
        "Dialoghi con enti, camere di commercio e programmi di internazionalizzazione che sostengono il ponte Italia–America Latina.",
      tag: "Ecosistema",
      isPlaceholder: true,
    },
    {
      id: "3",
      title: "Recensioni e testimonianze",
      excerpt:
        "Testimonianze e feedback da partner e clienti potranno essere condivisi su richiesta (testo o video).",
      tag: "Prossimamente",
      isPlaceholder: true,
    },
  ] as PartnerStoryPlaceholder[],
} as const;

// ——— CTA FINALE ———
export const finalCtaContent = {
  title: "Costruiamo insieme il prossimo ponte.",
  text: "Export, produzione locale, strumenti di internazionalizzazione o sviluppo strategico tra Italia e America Latina: parliamone.",
  ctaPrimary: "Contattaci",
  ctaSecondary: "Scopri le aree di business",
} as const;
