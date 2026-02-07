import { Award, Download, ExternalLink, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: 'Certificazione Esperto in Gestione dell\'Energia (E.G.E.)',
    issuer: 'ICMQ - Istituto di Certificazione e Marchio di Qualità',
    holder: 'Ing. Vincenzo Pagano',
    date: '2018',
    description: 'Certificazione professionale secondo la norma UNI CEI 11339 per la figura di Esperto in Gestione dell\'Energia',
    type: 'Certificazione Professionale',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Iscrizione Albo Ingegneri Caserta',
    issuer: 'Ordine degli Ingegneri della Provincia di Caserta',
    holder: 'Ing. Giovanni Costanzo',
    date: 'N. 3919 - Sez. A',
    description: 'Iscrizione all\'Albo degli Ingegneri della Provincia di Caserta, Sezione A - Settore Industriale',
    type: 'Abilitazione Professionale',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Iscrizione Albo Ingegneri Caserta',
    issuer: 'Ordine degli Ingegneri della Provincia di Caserta',
    holder: 'Ing. Vincenzo Pagano',
    date: 'N. 3449 - Sez. A',
    description: 'Iscrizione all\'Albo degli Ingegneri della Provincia di Caserta, Sezione A - Settore Industriale',
    type: 'Abilitazione Professionale',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Consulente Tecnico d\'Ufficio',
    issuer: 'Tribunale di Napoli Nord',
    holder: 'Ing. Giovanni Costanzo',
    date: '2015',
    description: 'Iscrizione nell\'albo dei Consulenti Tecnici d\'Ufficio presso il Tribunale di Napoli Nord',
    type: 'Qualifica Professionale',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Abilitazione Progettazione Fotovoltaica',
    issuer: 'Ordine degli Ingegneri',
    holder: 'Studio Costanzo-Pagano',
    date: '2010',
    description: 'Abilitazione alla progettazione e direzione lavori di impianti fotovoltaici di qualsiasi potenza',
    type: 'Abilitazione Tecnica',
    color: 'from-green-500 to-green-700',
  },
  {
    title: 'Certificazione UNI 11558 - Efficienza Energetica',
    issuer: 'Ente di Certificazione Accreditato',
    holder: 'Studio Costanzo-Pagano',
    date: '2019',
    description: 'Certificazione secondo norma UNI 11558 per professionisti che operano nel campo dell\'efficienza energetica',
    type: 'Certificazione Tecnica',
    color: 'from-green-500 to-green-700',
  },
];

export default function Certifications() {
  return (
    <section id="attestati" aria-label="Attestati" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
            Qualifiche e Certificazioni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Attestati Professionali
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Le nostre certificazioni e abilitazioni professionali garantiscono
            competenza, qualità e conformità normativa in tutti i nostri servizi.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                {/* Header with Gradient */}
                <div
                  className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden`}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>
                  {/* Icon */}
                  <div className="absolute -bottom-6 left-6">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#1e3a5f]" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10">
                  {/* Type Badge */}
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-3">
                    {cert.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Holder */}
                  <p className="text-sm font-medium text-[#1e3a5f] mb-1">
                    {cert.holder}
                  </p>

                  {/* Issuer and Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FileCheck className="w-4 h-4" aria-hidden="true" />
                      {cert.issuer}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">{cert.date}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#1e3a5f]" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Richiedi Documentazione
            </h3>
            <p className="text-gray-600 mb-6">
              Hai bisogno di ricevere copie certificate dei nostri attestati?
              Contattaci per richiedere la documentazione ufficiale.
            </p>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white rounded-lg hover:bg-[#152d4a] transition-colors font-medium"
            >
              Contattaci
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
