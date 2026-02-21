import {
  Wrench,
  Layers3,
  ThermometerSun,
  Volume2,
  PlugZap,
  ReceiptText,
  Cloud,
  Lightbulb,
  Sun, // 👉 aggiunto per PV*SOL
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const tools = [
  {
    icon: Layers3,
    name: 'Autodesk AutoCAD',
    note: 'Software CAD 2D/3D per la produzione di elaborati grafici, tavole tecniche e dettagli costruttivi.',
  },
  {
    icon: Wrench,
    name: 'Trimble SketchUp',
    note: 'Modellazione 3D per presentazioni, viste prospettiche e concept progettuali.',
  },
  {
    icon: ThermometerSun,
    name: 'Namirial Termo',
    note: 'Termotecnica, APE, Legge 10 e analisi delle prestazioni energetiche degli edifici.',
  },
  {
    icon: Volume2,
    name: 'Namirial Acustica',
    note: 'Verifica dei requisiti acustici passivi e classificazione acustica degli edifici.',
  },
  {
    icon: PlugZap,
    name: 'ACCA Impiantus ELETTRICO',
    note: 'Progettazione e verifiche di impianti elettrici BT secondo le norme CEI.',
  },
  {
    icon: ReceiptText,
    name: 'ACCA Praticus‑CT 3.0',
    note: 'Calcolo incentivi e gestione documentazione per il Conto Termico 3.0.',
  },
  {
    icon: Cloud,
    name: 'TuttoNormel – TNE CLOUD',
    note: 'Consultazione normativa tecnica e strumenti professionali online.',
  },

  {
    icon: Lightbulb,
    name: 'DIALux evo',
    note: 'Progettazione illuminotecnica professionale con simulazioni 3D, calcoli fotometrici e analisi dei livelli di illuminamento.',
  },

  // 👉 NUOVO SOFTWARE AGGIUNTO
  {
    icon: Sun,
    name: 'PV*SOL',
    note: 'Simulazione fotovoltaica avanzata con analisi energetiche, ombreggiamenti 3D e valutazione delle prestazioni degli impianti.',
  },
];
