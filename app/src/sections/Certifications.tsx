import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/* Import immagini attestati */
import pdf1 from '../assets/certifications/pdf1_page1.webp';
import pdf2 from '../assets/certifications/pdf2_page1.webp';
import pdf3 from '../assets/certifications/pdf3_page1.webp';
import pdf4 from '../assets/certifications/pdf4_page1.webp';
import pdf5 from '../assets/certifications/pdf5_page1.webp';
import pdf6 from '../assets/certifications/pdf6_page1.webp';
import pdf7 from '../assets/certifications/pdf7_page1.webp';
import pdf8 from '../assets/certifications/pdf8_page1.webp';
import pdf9 from '../assets/certifications/pdf9_page1.webp';
import pdf10 from '../assets/certifications/pdf10_page1.webp';

import pdf11 from '../assets/certifications/pdf11_page1.webp';
import pdf12 from '../assets/certifications/pdf12_page1.webp';
import pdf13 from '../assets/certifications/pdf13_page1.webp';
import pdf14 from '../assets/certifications/pdf14_page1.webp';
import pdf15 from '../assets/certifications/pdf15_page1.webp';
import pdf16 from '../assets/certifications/pdf16_page1.webp';
import pdf17 from '../assets/certifications/pdf17_page1.webp';
import pdf18 from '../assets/certifications/pdf18_page1.webp';
import pdf19 from '../assets/certifications/pdf19_page1.webp';
import pdf20 from '../assets/certifications/pdf20_page1.webp';

import pdf21 from '../assets/certifications/pdf21_page1.webp';
import pdf22 from '../assets/certifications/pdf22_page1.webp';
import pdf23 from '../assets/certifications/pdf23_page1.webp';

/* Elenco attestati */
const certifications = [
  {
    title: 'RSPP – Modulo B Macrosettore 7 (60 ore)',
    image: pdf21,
    holder: 'Ing. Giovanni Costanzo',
    date: '2009',
    description: 'CLAAI Caserta – D.Lgs. 81/08 – 23/10/2009',
  },
  {
    title: 'RSPP – Modulo B Macrosettore Ateco 9 (8 ore)',
    image: pdf22,
    holder: 'Ing. Giovanni Costanzo',
    date: '2009',
    description: 'CLAAI Caserta – Ateco 9 – 23/10/2009',
  },
  {
    title: 'RSPP – Modulo C (24 ore)',
    image: pdf23,
    holder: 'Ing. Giovanni Costanzo',
    date: '2009',
    description: 'CLAAI Caserta – D.Lgs. 195/2003 – 30/10/2009',
  },

  {
    title: 'Energy Manager – Esperto in Gestione dell’Energia',
    image: pdf4,
    holder: 'Ing. Giovanni Costanzo',
    date: '2016',
    description: 'ISO 17024 – 30 ore – Crediti CNI',
  },
  {
    title: 'Academy Tour – Fotovoltaico (Fronius / Q-Cells / Delpaso)',
    image: pdf1,
    holder: 'Ing. Giovanni Costanzo',
    date: '2019',
    description: 'Energia Italia – Nola',
  },
  {
    title: 'Academy Tour – Fotovoltaico (SolarEdge / Winaico)',
    image: pdf2,
    holder: 'Ing. Giovanni Costanzo',
    date: '2019',
    description: 'Energia Italia – Mercato San Severino',
  },

  {
    title: 'Legge di Bilancio 2022 – Bonus Edilizi',
    image: pdf9,
    holder: 'Ing. Giovanni Costanzo',
    date: '2022',
    description: 'Beta Formazione',
  },

  {
    title: 'Aggiornamento RSPP – Tutti i Macrosettori',
    image: pdf3,
    holder: 'Ing. Giovanni Costanzo',
    date: '2023',
    description: '40 ore – D.Lgs. 81/08',
  },
  {
    title: 'Bonus Fiscali – Sicurezza in Cantiere',
    image: pdf8,
    holder: 'Ing. Giovanni Costanzo',
    date: '2023',
    description: 'Beta Formazione',
  },
  {
    title: 'Consulente Tecnico d’Ufficio (CTU)',
    image: pdf10,
    holder: 'Ing. Giovanni Costanzo',
    date: '2023',
    description: 'Tribunale – 12 ore',
  },

  {
    title: 'Gestione Gruppi di Lavoro',
    image: pdf7,
    holder: 'Ing. Giovanni Costanzo',
    date: '2024',
    description: 'Problem Solving',
  },
  {
    title: 'Aggiornamento Operatori FER',
    image: pdf5,
    holder: 'Ing. Giovanni Costanzo',
    date: '2024',
    description: 'D.Lgs. 28/2011',
  },

  {
    title: 'Excel 365 – Livello Base',
    image: pdf6,
    holder: 'Ing. Giovanni Costanzo',
    date: '2025',
    description: 'Beta Formazione',
  },

  /* Altri attestati generici */
  { title: 'Attestato Professionale', image: pdf11, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf12, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf13, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf14, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf15, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf16, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf17, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf18, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf19, holder: 'Ing. Giovanni Costanzo', date: '—' },
  { title: 'Attestato Professionale', image: pdf20, holder: 'Ing. Giovanni Costanzo', date: '—' },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="attestati" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Attestati Professionali</h2>
          <p className="text-gray-600">
            Certificazioni e qualifiche professionali
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((cert, i) => (
            <Card
              key={i}
              className="cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => setSelectedImage(cert.image)}
            >
              <CardContent className="p-0">

                <div className="relative aspect-[3/4] bg-gray-200">

                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center transition">
                    <ZoomIn className="text-white opacity-0 hover:opacity-100" />
                  </div>

                </div>

                <div className="p-4">
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-sm text-blue-900">{cert.holder}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>

                  {cert.description && (
                    <p className="text-sm text-gray-600 mt-2">
                      {cert.description}
                    </p>
                  )}
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

