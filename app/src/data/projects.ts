// app/src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  client?: string;
  location?: string;
  description?: string;
  date: string; // formato "YYYY-MM-DD" oppure "YYYY-MM" oppure "YYYY"
  datePrecision?: "day" | "month" | "year";
  people: string[];
  source?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Progettazione impianto fotovoltaico 50 kWp su capannone agricolo",
    client: "Azienda Agricola Rossi",
    location: "Giugliano in Campania (NA)",
    description:
      "Progettazione elettrica impianto FV da 50 kWp su copertura, pratiche di connessione E-Distribuzione, verifica TICA e relazione tecnica.",
    date: "2024-03-15",
    datePrecision: "day",
    people: ["Vincenzo Pagano"],
    source: "Archivio Studio",
    tags: ["fotovoltaico", "agricolo", "connessione"],
  },
  {
    id: "2",
    title: "Pratica Superbonus 110% - Condominio residenziale",
    client: "Condominio Via Roma",
    location: "Napoli (NA)",
    description:
      "Progettazione energetica degli interventi trainanti e trainati, relazione ex Legge 10, APE ante e post operam, supporto alla pratica ENEA.",
    date: "2024-02",
    datePrecision: "month",
    people: ["Vincenzo Pagano", "Giovanni Costanzo"],
    source: "Archivio Studio",
    tags: ["superbonus", "riqualificazione", "termico", "ape"],
  },
  {
    id: "3",
    title: "Diagnosi energetica e APE edificio industriale",
    client: "Industria XYZ S.r.l.",
    location: "Caserta (CE)",
    description:
      "Diagnosi energetica secondo UNI 16247-1 con analisi dei consumi elettrici e termici, individuazione interventi di efficientamento e redazione APE.",
    date: "2023",
    datePrecision: "year",
    people: ["Vincenzo Pagano"],
    source: "Archivio Studio",
    tags: ["diagnosi energetica", "ape", "industriale"],
  },
  {
    id: "4",
    title: "Bando GSE Agrisolare - Impianto fotovoltaico 100 kWp",
    client: "Azienda Agricola Bianchi",
    location: "Aversa (CE)",
    description:
      "Progettazione preliminare e definitiva per bando Agrisolare, studio di producibilità, domanda di connessione e supporto alla domanda di incentivo.",
    date: "2023-11-20",
    datePrecision: "day",
    people: ["Vincenzo Pagano", "Giovanni Costanzo"],
    source: "Archivio Studio",
    tags: ["fotovoltaico", "agrisolare", "bando GSE"],
  },
  {
    id: "5",
    title: "Ampliamento impianto elettrico e cabina MT/BT",
    client: "F.M. S.p.A.",
    location: "Giugliano in Campania (NA)",
    description:
      "Progettazione ampliamento quadri MT/BT, verifica protezioni secondo CEI 0-16, adeguamento cabina di trasformazione esistente.",
    date: "2022-06",
    datePrecision: "month",
    people: ["Vincenzo Pagano"],
    source: "Archivio Studio",
    tags: ["impianti elettrici", "media tensione", "industriale"],
  },
  {
    id: "6",
    title: "Progettazione impianto fotovoltaico condominiale 20 kWp",
    client: "Condominio Parco Verde",
    location: "Pozzuoli (NA)",
    description:
      "Dimensionamento impianto FV a servizio parti comuni, studio ripartizione benefici tra i condomini e pratica di connessione.",
    date: "2022-10-05",
    datePrecision: "day",
    people: ["Vincenzo Pagano"],
    source: "Archivio Studio",
    tags: ["fotovoltaico", "condominio", "autoconsumo"],
  },
  {
    id: "7",
    title: "Sostituzione generatore e riqualificazione impianto termico",
    client: "Condominio Via Manzoni",
    location: "Napoli (NA)",
    description:
      "Studio tecnico-economico per sostituzione caldaia centralizzata con pompa di calore ibrida, verifica dei rendimenti e valutazione incentivi.",
    date: "2021-12",
    datePrecision: "month",
    people: ["Vincenzo Pagano"],
    source: "Archivio Studio",
    tags: ["impianto termico", "pompa di calore", "efficienza energetica"],
  },
  {
    id: "8",
    title: "APE per unità immobiliari residenziali",
    client: "Privati vari",
    location: "Provincia di Napoli",
    description:
      "Redazione di Attestati di Prestazione Energetica per compravendita e locazione, rilievo in sito e inserimento dati nel software di calcolo.",
    date: "2021",
    datePrecision: "year",
    people: ["Vincenzo Pagano"],
    source: "Archivio Studio",
    tags: ["ape", "residenziale"],
  },
];
