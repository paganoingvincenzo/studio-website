// app/src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  client?: string;
  location?: string;
  description?: string;
  date: string; // formato "YYYY-MM-DD"
  datePrecision?: "day" | "month" | "year";
  people: string[];
  source?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Progetto di esempio",
    client: "Cliente di esempio",
    location: "Napoli (NA)",
    description: "Breve descrizione del progetto.",
    date: "2024-01-15",
    datePrecision: "day",
    people: ["Vincenzo Pagano"],
    source: "Archivio interno",
    tags: ["fotovoltaico", "diagnosi energetica"],
  },
  // aggiungi qui tutti i tuoi progetti reali...
];
