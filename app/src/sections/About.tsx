import { Award, GraduationCap,  Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const engineers = [
  {
    name: 'Ing. Giovanni Costanzo',
    role: 'Co-fondatore',
    image: ''/team/giovanni-costanzo.jpg'',
    albo: 'N. 3919 - Sez. A Albo Ingegneri Caserta',
    ctu: 'Consulente Tecnico d\'Ufficio - Tribunale Napoli Nord',
    specialization: [
      'Impianti Fotovoltaici',
      'Sicurezza sui Luoghi di Lavoro',
      'Consulenza Tecnica Legale',
    ],
    education: 'Laurea in Ingegneria Elettronica - Seconda Università di Napoli',
        experience: '',
    email: 'giovannicostanzo@libero.it',
    phone: '331 928 4991',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Ing. Vincenzo Pagano',
    role: 'Co-fondatore',
    image: ''/team/vincenzo-pagano.jpg'',
    albo: 'Sez. A Albo Ingegneri di Caserta',
    ctu: 'Esperto in Gestione dell\'Energia (E.G.E.) certificato',
    specialization: [
      'Efficienza Energetica',
      'Riqualificazione Energetica',
      'Certificazione Energetica',
      'Impianti Elettrici',
    ],
    education: 'Laurea in Ingegneria Elettronica - Seconda Università di Napoli',
        experience: '',
  
    email: 'vpagano@libero.it',
    phone: '338 892 0421',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function About() {
  return (
    <section id="chi-siamo" aria-label="Chi Siamo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#1e3a5f] rounded-full text-sm font-semibold mb-4">
            Il Nostro Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Chi Siamo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Studio Costanzo-Pagano nasce dall&apos;incontro di due professionisti
            con oltre 15 anni di esperienza nel settore dell&apos;ingegneria
            elettronica e delle energie rinnovabili. La nostra missione è
            fornire soluzioni tecniche innovative e sostenibili.
          </p>
        </div>

        {/* Engineers Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {engineers.map((engineer, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                {/* Header with Gradient */}
                <div
                  className={`h-32 bg-gradient-to-r ${engineer.color} relative overflow-hidden`}
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
                </div>

                {/* Content */}
                <div className="px-8 pb-8 -mt-12 relative">
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 border-4 border-white">
                <img
                  src={engineer.image}
                  alt={engineer.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                  </div>

                  {/* Info */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {engineer.name}
                    </h3>
                    <p className="text-[#1e3a5f] font-medium mb-2">
                      {engineer.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Award className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{engineer.albo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Award className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      <span>{engineer.ctu}</span>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      Aree di Competenza
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {engineer.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-600">
                        {engineer.education}
                      </span>
                    </div>
                  
                  </div>

                  {/* Contact */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`mailto:${engineer.email}`}
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700"
                        aria-label={`Invia email a ${engineer.name}`}
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        {engineer.email}
                      </a>
                      <a
                        href={`tel:+39${engineer.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700"
                        aria-label={`Chiama ${engineer.name} al ${engineer.phone}`}
                      >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        {engineer.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '15+', label: 'Anni di Esperienza' },
            { value: '500+', label: 'Progetti Completati' },
            { value: '100%', label: 'Clienti Soddisfatti' },
            { value: '24h', label: 'Supporto Tecnico' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
