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
    
