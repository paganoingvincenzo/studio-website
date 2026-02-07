import { useState } from 'react';
import { Award, X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Esempio di come configurare gli attestati con immagini
// Dopo aver caricato le immagini nella cartella app/src/assets/certifications/
// decommenta e modifica questo array

/*
import cert1 from '../assets/certifications/cert1.webp';
import cert2 from '../assets/certifications/cert2.webp';
import cert3 from '../assets/certifications/cert3.webp';

const certifications = [
  {
    title: 'Certificazione E.G.E.',
    image: cert1,
    holder: 'Ing. Vincenzo Pagano',
    date: '2018',
  },
  {
    title: 'Iscrizione Albo Ingegneri',
    image: cert2,
    holder: 'Ing. Giovanni Costanzo',
    date: 'N. 3919 - Sez. A',
  },
  // Aggiungi altri attestati...
];
*/

// Array temporaneo con immagini placeholder
const certifications = [
  {
    title: 'Certificazione Esperto in Gestione dell\'Energia (E.G.E.)',
    image: null, // Sostituisci con l'import dell'immagine reale
    holder: 'Ing. Vincenzo Pagano',
    date: '2018',
    description: 'Certificazione professionale secondo la norma UNI CEI 11339',
  },
  {
    title: 'Iscrizione Albo Ingegneri Caserta',
    image: null,
    holder: 'Ing. Giovanni Costanzo',
    date: 'N. 3919 - Sez. A',
    description: 'Iscrizione Albo degli Ingegneri della Provincia di Caserta',
  },
  {
    title: 'Iscrizione Albo Ingegneri Caserta',
    image: null,
    holder: 'Ing. Vincenzo Pagano',
    date: 'N. 3449 - Sez. A',
    description: 'Iscrizione Albo degli Ingegneri della Provincia di Caserta',
  },
  {
    title: 'Consulente Tecnico d\'Ufficio',
    image: null,
    holder: 'Ing. Giovanni Costanzo',
    date: '2015',
    description: 'Tribunale di Napoli Nord',
  },
  {
    title: 'Abilitazione Progettazione Fotovoltaica',
    image: null,
    holder: 'Studio Costanzo-Pagano',
    date: '2010',
    description: 'Progettazione impianti fotovoltaici',
  },
  {
    title: 'Certificazione UNI 11558',
    image: null,
    holder: 'Studio Costanzo-Pagano',
    date: '2019',
    description: 'Efficienza Energetica',
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => cert.image && setSelectedImage(cert.image)}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {cert.image ? (
                    <>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Zoom Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </>
                  ) : (
                    /* Placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <Award className="w-16 h-16 mb-4" />
                      <p className="text-sm font-medium">Immagine non disponibile</p>
                      <p className="text-xs mt-1">Carica l'attestato</p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-[#1e3a5f] mb-1">
                    {cert.holder}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">{cert.date}</p>
                  {cert.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
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
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Attestato ingrandito"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
