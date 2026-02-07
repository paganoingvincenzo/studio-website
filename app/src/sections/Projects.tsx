import lavori from "../data/lavori.json";

export default function Projects() {
  // Ordina per data decrescente
  const sorted = [...lavori].sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });

  // Formattazione data
  const formatDate = (
    date: string,
    precision: "day" | "month" | "year" = "day"
  ) => {
    const y = date.slice(0, 4);
    const m = date.slice(5, 7);
    const d = date.slice(8, 10);

    if (precision === "year") return y;
    if (precision === "month") return `${m}/${y}`;
    return `${d}/${m}/${y}`;
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
                {formatDate(p.date, p.datePrecision ?? "day")}
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

            {p.tags && (
              <div
                style={{
                  marginTop: 8,
                  opacity: 0.7,
                  fontSize: "0.85rem",
                }}
              >
                {p.tags}
              </div>
            )}
          </div>
        ))}

        {sorted.length === 0 && (
          <div style={{ opacity: 0.7 }}>Nessun lavoro presente.</div>
        )}
      </div>
    </section>
  );
}

