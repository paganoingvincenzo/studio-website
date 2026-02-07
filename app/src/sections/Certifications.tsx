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

/* Nuovi certificati */
import apdf1 from '../assets/certifications/apdf1_page1.webp';
import apdf2 from '../assets/certifications/apdf2_page1.webp';
import apdf3 from '../assets/certifications/apdf3_page1.webp';
import apdf5 from '../assets/certifications/apdf5_page1.webp';
import apdf6 from '../assets/certifications/apdf6_page1.webp';
import apdf7 from '../assets/certifications/apdf7_page1.webp';
import apdf8 from '../assets/certifications/apdf8_page1.webp';
import apdf9 from '../assets/certifications/apdf9_page1.webp';
import apdf10 from '../assets/certifications/apdf10_page1.webp';
import apdf11 from '../assets/certifications/apdf11_page1.webp';
import apdf12 from '../assets/certifications/apdf12_page1.webp';
import apdf13 from '../assets/certifications/apdf13_page1.webp';
import apdf14 from '../assets/certifications/apdf14_page1.webp';
import apdf15 from '../assets/certifications/apdf15_page1.webp';
import apdf16 from '../assets/certifications/apdf16_page1.webp';
import apdf17 from '../assets/certifications/apdf17_page1.webp';
import apdf18 from '../assets/certifications/apdf18_page1.webp';
import apdf19 from '../assets/certifications/apdf19_page1.webp';
import apdf20 from '../assets/certifications/apdf20_page1.webp';

/* Array SOLO IMMAGINI */
const certifications = [
  pdf21, pdf22, pdf23,
  pdf4, pdf1, pdf2,
  pdf9, pdf3, pdf8, pdf10,
  pdf7, pdf5, pdf6,
  pdf11, pdf12, pdf13, pdf14, pdf15, pdf16, pdf17, pdf18, pdf19, pdf20,
  apdf1, apdf2, apdf3, apdf5, apdf6, apdf7, apdf8, apdf9, apdf10,
  apdf11, apdf12, apdf13, apdf14, apdf15, apdf16, apdf17, apdf18, apdf19, apdf20
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="attestati" className="pt-40 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Attestati Professionali</h2>
          <p className="text-gray-600">Galleria certificati</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((img, i) => (
            <Card
              key={i}
              className="cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => setSelectedImage(img)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] bg-gray-200">
                  <img
                    src={img}
                    alt={`Certificato ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/30 flex items-center justify-center transition">
                    <ZoomIn className="text-white opacity-0 hover:opacity-100" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

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
