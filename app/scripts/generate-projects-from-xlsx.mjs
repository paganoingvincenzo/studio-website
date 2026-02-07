import fs from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";

// Se metti l'xlsx in app/src/data/lavori.xlsx:
const INPUT = path.resolve("src/data/lavori.xlsx");
// File TS usato dal sito:
const OUTPUT = path.resolve("src/data/projects.ts");

const wb = XLSX.readFile(INPUT);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws);

// Colonne attese nell'xlsx:
// id, data, precisione_data, titolo, cliente, località, descrizione, persone, fonte, tag

const projects = rows.map((row, index) => {
  const id = row.id ?? index + 1;

  const rawPeople = (row.persone ?? "").toString();
  const people = rawPeople
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const rawTags = (row.tag ?? "").toString();
  const tags = rawTags
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    id: String(id),
    title: String(row.titolo ?? ""),
    client: row.cliente || undefined,
    location: row["località"] || undefined,
    description: row.descrizione || undefined,
    date: String(row.data ?? ""),
    datePrecision: row.precisione_data || "year",
    people,
    source: row.fonte || undefined,
    tags: tags.length ? tags : undefined,
  };
});

const typeDef = `export type Project = {
  id: string;
  title: string;
  client?: string;
  location?: string;
  description?: string;
  date: string;
  datePrecision?: "day" | "month" | "year";
  people: string[];
  source?: string;
  tags?: string[];
};`;

const body =
  typeDef +
  "\n\nexport const projects: Project[] = " +
  JSON.stringify(projects, null, 2) +
  ";\n";

fs.writeFileSync(OUTPUT, body, "utf8");
console.log("Generato", OUTPUT, "da", INPUT);

