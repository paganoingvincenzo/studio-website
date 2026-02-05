import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Tools from './sections/Tools';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostra il banner solo se non già accettato
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl shadow-gray-900/20 p-4 sm:p-6"
      role="dialog"
      aria-label="Consenso cookie"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Questo sito utilizza cookie tecnici per garantire il corretto funzionamento.
          Continuando la navigazione accetti l&apos;utilizzo dei cookie in conformità
          al Regolamento UE 2016/679 (GDPR).
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="px-6 py-2 text-sm font-semibold bg-[#1e3a5f] hover:bg-[#152d4a] text-white rounded-lg transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white text-gray-800 text-sm px-4 py-2 rounded-lg shadow-lg border border-gray-100 whitespace-nowrap">
          Scrivici su WhatsApp
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="ml-2 text-gray-400 hover:text-gray-600"
            aria-label="Chiudi tooltip"
          >
            <X className="w-3 h-3 inline" />
          </button>
        </div>
      )}
      <a
        href="https://wa.me/393319284991?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20vostri%20servizi."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

export default App;
