import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Indirizzo',
      content: 'Via IV Novembre 137',
      subContent: '81038 Trentola-Ducenta (CE)',
    },
    {
      icon: Phone,
      title: 'Telefono',
      content: '331 928 4991 (Ing. Costanzo) · 338 892 0421 (Ing. Pagano)',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'giovannicostanzo@libero.it',
      subContent: 'vpagano@libero.it',
      href: 'mailto:giovannicostanzo@libero.it',
    },
    {
      icon: Clock,
      title: 'Orari',
      content: 'Lunedì - Venerdì',
      subContent: '09:00 - 18:00',
    },
  ];

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* LAYOUT A COLONNA UNICA */}
        <div className="max-w-3xl mx-auto space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Contatti</h2>
            <p className="text-gray-600 mt-2">
              Puoi contattarci tramite i recapiti riportati di seguito oppure tramite WhatsApp.
            </p>
          </div>

          {/* BLOCCO CONTATTI */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-[#1e3a5f] transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                  {item.subContent && (
                    <p className="text-sm text-gray-500">{item.subContent}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WHATSAPP */}
            <a
              href="https://chat.whatsapp.com/BSFyvZPGS3I4ox0RXNmWK9?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-0.5">WhatsApp</h4>
                <p className="text-sm text-gray-500">
                  Scrivici su WhatsApp per una risposta rapida
                </p>
              </div>
            </a>

            {/* MAPPA */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                title="Posizione Studio Costanzo-Pagano su Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.978564632836!2d14.175514676550796!3d40.93809697136052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b083c7069733d%3A0x1d0b006c642289c0!2sVia%20IV%20Novembre%2C%20137%2C%2081038%20Trentola-Ducenta%20CE!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* ZONA DI OPERATIVITÀ */}
            <div className="p-6 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-2xl text-white">
              <h4 className="font-semibold mb-2">Zona di Operatività</h4>
              <p className="text-sm text-blue-100 mb-4">
                Operiamo principalmente nelle province di Caserta e Napoli e
                in tutta la Campania, con disponibilità a spostamenti su
                tutto il territorio nazionale per progetti di rilevanza.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Campania, Lazio e tutta Italia</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
