export const contactPageContent = {
  title: "Contatti",
  intro:
    "Per export, produzione locale, partnership o sviluppo di progetto tra Italia e America Latina: scrivici o contattaci direttamente. Siamo un interlocutore di livello per il ponte interculturale tra i due mercati.",
  form: {
    nome: "Nome",
    email: "Email",
    azienda: "Azienda",
    messaggio: "Messaggio",
    invia: "Invia messaggio",
    success: "Messaggio inviato. Ti risponderemo al più presto.",
    error: "Si è verificato un errore. Riprova o contattaci via email.",
  },
  direct: {
    title: "Contatto diretto",
    email: "Email",
    phone: "Telefono",
    whatsapp: "WhatsApp",
    location: "Sede",
  },
} as const;

export const contactData = {
  email: "info@mezchila.com",
  // TODO: inserire numero di telefono reale
  phone: "Contatto telefonico su richiesta via email",
  // TODO: inserire numero WhatsApp reale con prefisso internazionale, solo cifre
  whatsappNumber: "",
  location: "Roma, Italia",
} as const;

export const privacySections = [
  // TODO: inserire P.IVA reale
  {
    title: "Titolare del trattamento",
    content:
      "Il titolare del trattamento dei dati personali è Mezchila S.r.l.s., con sede legale in Roma, Italia (P.IVA disponibile su richiesta). Per comunicazioni relative ai dati personali: info@mezchila.com.",
  },
  {
    title: "Dati raccolti e finalità",
    content:
      "Raccogliamo esclusivamente i dati forniti volontariamente tramite il modulo di contatto: nome, email, nome dell'azienda (opzionale) e testo del messaggio. Trattati al solo scopo di rispondere alle richieste. Non raccogliamo dati sensibili né effettuiamo profilazione.",
  },
  {
    title: "Base giuridica",
    content:
      "Il trattamento si basa sul consenso dell'interessato (art. 6, par. 1, lett. a, GDPR), espresso tramite invio volontario del modulo. Il conferimento di nome ed email è necessario per dare riscontro alla richiesta.",
  },
  {
    title: "Conservazione dei dati",
    content:
      "I dati sono conservati per il tempo necessario a gestire la richiesta e, ove si instauri un rapporto commerciale, per il periodo previsto dalle normative fiscali (generalmente 10 anni). In assenza di seguito commerciale, i dati sono cancellati entro 12 mesi dalla ricezione.",
  },
  {
    title: "Misure di sicurezza",
    content:
      "Adottiamo misure tecniche e organizzative adeguate ai sensi dell'art. 32 GDPR. Il sito utilizza protocollo HTTPS con cifratura TLS. Le email transazionali sono gestite tramite provider certificati.",
  },
  {
    title: "Condivisione dei dati",
    content:
      "I dati non sono ceduti, venduti o comunicati a terzi per finalità proprie di questi ultimi. Possono essere trattati da responsabili del trattamento (art. 28 GDPR) quali fornitori di servizi tecnici (hosting, piattaforme email), operanti nel rispetto delle normative applicabili.",
  },
  {
    title: "Diritti dell'interessato",
    content:
      "L'interessato ha il diritto di: accedere ai propri dati (art. 15), chiederne rettifica (art. 16) o cancellazione (art. 17), richiedere limitazione (art. 18) o opposizione (art. 21), esercitare la portabilità (art. 20) e revocare il consenso in qualsiasi momento (art. 7). Richieste a: info@mezchila.com. È possibile presentare reclamo al Garante Privacy (www.garanteprivacy.it).",
  },
  {
    title: "Aggiornamenti",
    content:
      "Questa informativa può essere aggiornata in caso di modifiche normative o variazioni nel trattamento. La versione vigente è sempre consultabile su questa pagina con l'indicazione della data di ultimo aggiornamento.",
  },
] as const;

export const cookieSections = [
  {
    title: "Cosa sono i cookie",
    content:
      "I cookie sono piccoli file di testo salvati sul dispositivo dell'utente durante la navigazione. Permettono al sito di ricordare preferenze e migliorare l'esperienza d'uso.",
  },
  {
    title: "Cookie utilizzati su questo sito",
    content:
      "Questo sito utilizza esclusivamente cookie tecnici, necessari al corretto funzionamento della navigazione. Non utilizziamo cookie di profilazione né cookie di tracciamento pubblicitario. Non è richiesto il consenso per il loro utilizzo ai sensi delle Linee guida cookie del Garante 2021.",
  },
  {
    title: "Cookie tecnici",
    content:
      "I cookie tecnici presenti includono: cookie di sessione (temporanei, eliminati alla chiusura del browser) necessari per la navigazione; cookie funzionali che memorizzano preferenze di base. Nessuno di questi raccoglie dati personali identificativi.",
  },
  {
    title: "Cookie di terze parti",
    content:
      "Al momento il sito non integra servizi di terze parti che installano cookie di analisi o profilazione. Qualora in futuro venissero attivati, questa policy sarà aggiornata e sarà richiesto il consenso ove necessario.",
  },
  {
    title: "Gestione e disattivazione",
    content:
      "L'utente può gestire o disattivare i cookie dal proprio browser. Istruzioni: Chrome (support.google.com/chrome/answer/95647), Firefox (support.mozilla.org), Safari (support.apple.com), Edge (support.microsoft.com). La disattivazione dei cookie tecnici potrebbe compromettere il funzionamento di alcune parti del sito.",
  },
  {
    title: "Aggiornamenti",
    content:
      "Questa cookie policy può essere modificata in caso di aggiornamenti normativi o variazioni nei servizi. La versione aggiornata è sempre disponibile su questa pagina con la data di ultimo aggiornamento.",
  },
] as const;
