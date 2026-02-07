# Cartella Attestati / Certifications

Questa cartella contiene le immagini degli attestati professionali da mostrare sul sito web.

## Come aggiungere le immagini degli attestati

### 1. Formato consigliato
- **Formato primario**: WebP (migliore compressione)
- **Formato alternativo**: JPEG/JPG (85-90% qualità)
- **Risoluzione**: 1200-1600px larghezza
- **Dimensione**: < 200-300 KB per immagine
- **Aspect ratio**: 3:4 (verticale, formato documento)

### 2. Nomenclatura file
Utilizza nomi file descrittivi:
- `cert-ege-pagano.webp` - Certificazione E.G.E. Ing. Pagano
- `albo-ingegneri-costanzo.webp` - Iscrizione Albo Costanzo
- `albo-ingegneri-pagano.webp` - Iscrizione Albo Pagano
- `ctu-costanzo.webp` - CTU Costanzo
- `abilitazione-fotovoltaico.webp`
- `cert-uni-11558.webp`

### 3. Ottimizzazione immagini

#### Conversione in WebP (raccomandato)
**Online:**
- https://squoosh.app/ (Google)
- https://cloudconvert.com/

**Da linea di comando:**
```bash
# Con cwebp (installare webp tools)
cwebp -q 85 input.jpg -o output.webp
```

#### Compressione JPEG
**Online:**
- https://tinyjpg.com/
- https://compressor.io/

### 4. Caricare le immagini

1. Carica i file in questa cartella (`app/src/assets/certifications/`)
2. Apri il file `app/src/sections/Certifications.tsx`
3. Aggiungi gli import all'inizio del file:

```typescript
import certEGE from '../assets/certifications/cert-ege-pagano.webp';
import alboIngCostanzo from '../assets/certifications/albo-ingegneri-costanzo.webp';
import alboIngPagano from '../assets/certifications/albo-ingegneri-pagano.webp';
// ... altri import
```

4. Trova il commento con l'array di esempio e sostituisci con:

```typescript
const certifications = [
  {
    title: 'Certificazione Esperto in Gestione dell\'Energia (E.G.E.)',
    image: certEGE,
    holder: 'Ing. Vincenzo Pagano',
    date: '2018',
    description: 'Certificazione professionale secondo la norma UNI CEI 11339',
  },
  {
    title: 'Iscrizione Albo Ingegneri Caserta',
    image: alboIngCostanzo,
    holder: 'Ing. Giovanni Costanzo',
    date: 'N. 3919 - Sez. A',
    description: 'Iscrizione Albo degli Ingegneri della Provincia di Caserta',
  },
  // ... altri attestati
];
```

### 5. Funzionalità implementate
- ✅ Visualizzazione immagini attestati in griglia responsive
- ✅ Lightbox per ingrandire l'immagine al click
- ✅ Effetto hover con icona zoom
- ✅ Placeholder per attestati senza immagine
- ✅ Layout ottimizzato per mobile e desktop

## Note
- Le immagini verranno ottimizzate automaticamente da Vite durante il build
- Formato WebP è supportato da tutti i browser moderni
- Per massima compatibilità, usa anche JPEG come fallback
