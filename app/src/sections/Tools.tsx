import { Wrench, Layers3, ThermometerSun, Volume2, PlugZap, ReceiptText, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const tools = [
  {
    icon: Layers3,
    name: 'Autodesk AutoCAD',
    note: 'CAD 2D/3D per elaborati grafici e dettagli costruttivi.',
  },
  {
    icon: Wrench,
    name: 'Trimble SketchUp',
    note: 'Modellazione 3D e presentazioni di progetto (modelli e viste).',
  },
  {
    icon: ThermometerSun,
    name: 'Namirial Termo',
    note: 'Termotecnica, APE, Legge 10 e prestazioni energetiche.',
  },
  {
    icon: Volume2,
    name: 'Namirial Acustica',
    note: 'Verifica requisiti acustici passivi e classificazione acustica.',
  },
  {
    icon: PlugZap,
    name: 'ACCA Impiantus (Impiantus‑ELETTRICO)',
    note: 'Progettazione e verifiche impianti elettrici BT secondo norme CEI.',
  },
  {
    icon: ReceiptText,
    name: 'ACCA Praticus‑CT 3.0',
    note: 'Calcolo incentivi e gestione documentazione per Conto Termico 3.0.',
  },
  {
    icon: Cloud,
    name: 'TuttoNormel – TNE CLOUD',
    note: 'Consultazione e strumenti tecnici online per normativa e applicativi.',
  },
];

export default function Tools() {
  return (
    <section id="strumenti" aria-label="Strumenti e Software" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-white text-[#1e3a5f] rounded-full text-sm font-semibold mb-4 shadow-sm">
            Workflow e strumenti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Software utilizzati in studio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Utilizziamo strumenti professionali per garantire coerenza tra modellazione, calcoli, verifiche e documentazione
            da consegnare a clienti, enti e gestori.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t) => (
            <Card key={t.name} className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">
                    <t.icon className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{t.name}</h3>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 leading-relaxed">{t.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-10 leading-relaxed">
          Nota: i marchi e i nomi dei software appartengono ai rispettivi proprietari e vengono citati a fini descrittivi.
        </p>
      </div>
    </section>
  );
}
