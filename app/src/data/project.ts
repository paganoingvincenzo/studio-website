// app/src/data/projects.ts

export type DatePrecision = "day" | "month" | "year";

export type Project = {
  id: string;
  date: string; // formato ISO: YYYY-MM-DD
  datePrecision: DatePrecision;

  title: string;
  client?: string;
  location?: string;
  description?: string;

  tags?: string[];

  people: ("Vincenzo Pagano" | "Giovanni Costanzo")[];

  source: "CV Pagano" | "CV Costanzo";
};

export const projects: Project[] = [

  {
    id: "pagano-2025-relazione-legge10",
    date: "2025-06-06",
    datePrecision: "day",

    title: "Relazione tecnica ex D.Lgs 192/2005",
    location: "Casagiove (CE)",

    tags: ["Legge 10", "Prestazione energetica"],

    people: ["Vincenzo Pagano"],

    source: "CV Pagano"
  },

  {
    id: "costanzo-2025-termopulitalia",
    date: "2025-01-01",
    datePrecision: "year",

    title: "Progettazione linea Samsung DVN Chiller",
    client: "Termopulitalia Soc. Coop.",
    location: "Napoli",

    tags: ["Impianti termici", "Chiller"],

    people: ["Giovanni Costanzo"],

    source: "CV Costanzo"
  }

];

