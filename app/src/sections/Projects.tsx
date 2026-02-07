// app/src/sections/Projects.tsx

import { useMemo, useState } from "react";
import { projects, Project } from "../data/projects";


function formatDate(p: Project) {
  const [y, m, d] = p.date.split("-");

  if (p.datePrecision === "year") return y;
  if (p.datePrecision === "month") return `${m}/${y}`;

  return `${d}/${m}/${y}`;
}


function sortByDateDesc(a: Project, b: Project) {
  if (a.date > b.date) return -1;
  if (a.date < b.date) return 1;
  return 0;
}


export default function Projects() {

  const [filter, setFilter] =
    useState<"all" | "pagano" | "costanzo">("all");

  const [search, setSearch] = useState("");


  const filtered = useMemo(() => {

    const q = search.toLowerCase().trim();

    return projects
      .filter(p => {

        if (filter === "pagano" &&
            !p.people.includes("Vincenzo Pagano")) {
          return false;
        }

        if (filter === "costanzo" &&
            !p.people.includes("Giovanni Costanzo")) {
          return false;
        }

        if (!q) return true;

        const text = [
          p.title,
          p.client,
          p.location,
          p.description,
          p.tags?.join(" "),
          p.people.join(" ")
        ]
          .join(" ")
          .toLowerCase();

        return text.includes(q);
      })

      .slice()
      .sort(sortByDateDesc);

  }, [filter, search]);


  return (

    <section
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 16px"
      }}
    >

      <h1>Lavori</h1>

      <p style={{ opacity: 0.8 }}>
        Elenco delle principali attività professionali
      </p>


      {/* Filtri */}

      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 20,
          flexWrap: "wrap"
        }}
      >

        <select
          value={filter}
          onChange={e => setFilter(e.target.value as any)}
        >
          <option value="all">Tutti</option>
          <option value="pagano">Pagano</option>
          <option value="costanzo">Costanzo</option>
        </select>


        <input
          placeholder="Cerca..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 250 }}
        />

      </div>


      {/* Elenco */}

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gap: 14
        }}
      >

        {filtered.map(p => (

          <div
            key={p.id}
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 12,
              padding: 16
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10
              }}
            >

              <strong>{p.title}</strong>

              <span style={{ opacity: 0.7 }}>
                {formatDate(p)}
              </span>

            </div>


            {(p.client || p.location) && (

              <div style={{ marginTop: 6, opacity: 0.85 }}>

                {p.client && <>Committente: {p.client}</>}
                {p.client && p.location && " · "}
                {p.location}

              </div>
            )}


            {p.description && (

              <div style={{ marginTop: 8 }}>
                {p.description}
              </div>

            )}


            <div
              style={{
                marginTop: 10,
                fontSize: 14,
                opacity: 0.75
              }}
            >

              {p.people.join(" + ")} · {p.source}

              {p.tags && p.tags.length > 0 && (
                <> · {p.tags.join(", ")}</>
              )}

            </div>

          </div>

        ))}


        {filtered.length === 0 && (

          <div style={{ opacity: 0.7 }}>
            Nessun risultato
          </div>

        )}

      </div>

    </section>
  );
}

