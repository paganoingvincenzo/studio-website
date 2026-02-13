import {
  Sun,
  Zap,
  Shield,
  FileCheck,
  Building2,
  ClipboardCheck,
  TrendingUp,
  Leaf,
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { scrollToSection } from '@/lib/scrollTo';

const services = [
  {
    icon: Sun,
    title: 'Impianti Fotovoltaici',
    description:
      'Progettazione completa di impianti fotovoltaici residenziali, commerciali e industriali. Gestione pratiche GSE, E-Distribuzione, GAUDÌ e Agenzia delle Dogane.',
    features: [
      'Sopralluoghi tecnici',
      'Progettazione esecutiva',
      'Pratiche autorizzative',
      'Gestione incentivi',
    ],
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Zap,
    title: 'Efficienza Energetica',
    description:
      'Consulenza per il miglioramento dell’efficienza energetica di edifici residenziali e industriali. Diagnosi energetiche conformi alla UNI CEI EN 16247 e piani di intervento ottimizzati.',
    features: [
      'Certificazione energetica APE',
      'Diagnosi energetica',
      'Energy Management (EGE)',
      'Piani di riqualificazione',
    ],
    color: 'from-green-400 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Building2,
    title: 'Detrazioni Fiscali Energetiche',
    description:
      'Assistenza completa per l’accesso alle detrazioni fiscali per riqualificazione energetica: Ecobonus, Bonus Casa e Conto Termico 3.0. Progettazione, asseverazioni e pratiche ENEA.',
    features: [
      'Ecobonus e Bonus Casa',
      'Conto Termico 3.0',
      'Asseverazione tecnica',
      'APE ante/post operam',
    ],
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Sicurezza sul Lavoro',
    description:
      'Consulenza per la prevenzione e sicurezza sui luoghi di lavoro ai sensi del D.Lgs. 81/2008. Formazione e aggiornamento del personale.',
    features: [
      'Valutazione rischi (DVR)',
      'Piano sicurezza (PSC/POS)',
      'Formazione lavoratori',
      'Coordinamento sicurezza',
    ],
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: FileCheck,
    title: 'Pratiche Tecniche',
    description:
      'Gestione completa delle pratiche tecniche necessarie per impianti e interventi edilizi. Rapporti con enti e distributori.',
    features: [
      'Domande di connessione E-Distribuzione',
      'Pratiche GSE',
      'Registrazione GAUDÌ - Terna',
      'Autorizzazioni urbanistiche',
    ],
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: ClipboardCheck,
    title: 'Consulenza Tecnica Legale',
    description:
      'Perizie tecniche, consulenze d’ufficio e di parte. Supporto tecnico in controversie legali relative a impianti e interventi edilizi.',
    features: [
      'Perizie tecniche',
      'CTU e CTP',
      'Consulenza di parte',
      'Arbitrati tecnici',
    ],
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: TrendingUp,
    title: 'Bando Agrisolare',
    description:
      'Assistenza per la partecipazione al bando Parco Agrisolare del PNRR per impianti fotovoltaici su strutture agricole. Progettazione e gestione della domanda.',
    features: [
      'Progettazione impianti',
      'Domanda di connessione',
      'Pratiche GSE',
      'Consulenza bando PNRR',
    ],
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Leaf,
    title: 'Impianti Termici',
    description:
      'Progettazione e dimensionamento di impianti termici, pompe di calore e sistemi VRF/VRV. Soluzioni per riscaldamento e raffrescamento ad alta efficienza.',
    features: [
      'Progettazione VRF/VRV',
      'Pompe di calore',
      'Impianti HVAC',
      'Sistemi BACS classe A',
    ],
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];

export default function Services() {
  return (
    <section id="servizi" aria-label="I nostri servizi" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
            I Nostri Servizi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluzioni Complete per la Transizione Energetica
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Offriamo servizi di ingegneria per supportare privati, aziende ed enti pubblici nel raggiungimento degli obiettivi di efficienza energetica e sostenibilità ambientale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/70 transition-all duration-300 overflow-hidden bg-white"
            >
              <CardHeader className={`${service.bgColor} p-6 pb-4`}>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </CardHeader>

              <CardContent className="p-6 pt-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2" aria-label={`Dettagli ${service.title}`}>
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Hai bisogno di un servizio personalizzato? Contattaci per una consulenza gratuita.
          </p>
          <button
            onClick={() => scrollToSection('#contatti')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#152d4a] text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-900/20"
          >
            Richiedi Informazioni
          </button>
        </div>

      </div>
    </section>
  );
}
