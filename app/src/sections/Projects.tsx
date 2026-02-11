import lavori from "../data/lavori.json";

type Project = {
  id: string;
  title: string;
  location: string;
  date: string;
};

export default function Projects() {
  const sorted = [...(lavori as Project[])].sort((a, b) => {
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
    <section id="projects" className="space-y-6">
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
              <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 items-start w-full">
                <div className="font-medium break-words">{p.title}</div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">
                  {formatDate(p.date, "year")}
                </div>
              </div>

              {p.location && (
                <div className="mt-1 text-xs text-muted-foreground break-words">
                  Sito: {p.location}
                </div>
              )}
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
