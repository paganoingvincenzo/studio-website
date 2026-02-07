import lavori from "../data/lavori.json";

export default function Projects() {
  // Ordina per anno decrescente
  const sorted = [...lavori].sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });

  const formatDate = (
    date: string,
    precision: "day" | "month" | "year" = "year"
  ) => {
    if (precision === "year") return date;
    return date;
  };

  return (
    <section
      style={{
        maxWidth: 1100,
        margin: "80px auto 0",
        padding: "40px 16px",
      }}
    >
      <h1>Lavori</h1>

      <p style={{ opacity: 0.8 }}>
        Elenco delle principali attività professionali
      </p>

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gap: 14,
        }}
      >
        {sorted.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <strong>{p.title}</strong>

              <span style={{ opacity: 0.7 }}>
                {formatDate(p.date, "year")}
              </span>
            </div>

            {p.client && (
              <div style={{ marginTop: 6, opacity: 0.85 }}>
                Committente: {p.client}
                {p.location && ` · ${p.location}`}
              </div>
            )}

            {p.description && (
              <div style={{ marginTop: 8 }}>{p.description}</div>
            )}

            {/* RIMOSSO: niente più tags, niente più nomi dei professionisti */}
          </div>
        ))}

        {sorted.length === 0 && (
          <div style={{ opacity: 0.7 }}>Nessun lavoro presente.</div>
        )}
      </div>
    </section>
  );
}



