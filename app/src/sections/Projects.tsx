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
    <section id="projects" className="mt-24 space-y-6">
      <div className="max-w-3xl mx-auto space-y-6 px-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">Lavori</h2>
          <p className="text-sm text-muted-foreground">
            Elenco delle principali attività professionali
          </p>
        </div>

        <div className="space-y-3">
          {sorted.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border px-4 py-3 text-sm sm:text-base"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(p.date, "year")}
                </div>
              </div>

              {p.location && (
                <div className="mt-1 text-xs text-muted-foreground">
                  Sito: {p.location}
                </div>
              )}

              {p.description && (
                <div className="mt-1 text-xs text-muted-foreground">
                  {p.description}
                </div>
              )}

              {/* RIMOSSO: niente più tags, niente più nomi dei professionisti */}
            </div>
          ))}

          {sorted.length === 0 && (
            <div className="text-sm text-muted-foreground">
              Nessun lavoro presente.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
