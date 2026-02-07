import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Tools from './sections/Tools';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Certifications from './sections/Certifications';
import Projects from "./sections/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="text-sm">
          <p className="font-semibold mb-1">Questo sito utilizza cookie</p>
          <p className="text-gray-300">
            Utilizziamo cookie tecnici e, previo consenso, cookie di terze parti per migliorare l'esperienza. 
            Puoi accettare o rifiutare.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '393388920421';
  const message = encodeURIComponent('Buongiorno, vorrei maggiori informazioni sui vostri servizi.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl p-4 w-72 border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-semibold text-gray-900">Chatta con noi</h4>
              <p className="text-sm text-gray-600">Rispondiamo il prima possibile</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Chiudi chat"
            >
              <X size={18} />
            </button>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-md transition-colors font-medium"
          >
            Apri WhatsApp
          </a>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors flex items-center justify-center"
        aria-label="Apri chat WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      {/* RIMOSSO: <Certifications /> */}
      <Tools />
      <Contact />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main id="main-content">
      <Projects />
    </main>
  );
}

function CertificationsPage() {
  return (
    <main id="main-content">
      <Certifications />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lavori" element={<ProjectsPage />} />
          <Route path="/attestati" element={<CertificationsPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
