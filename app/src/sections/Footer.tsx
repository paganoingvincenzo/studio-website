import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { scrollToSection } from '@/lib/scrollTo';
import logoImg from '../assets/logo-new.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Chi Siamo', href: '#chi-siamo' },
  { name: 'Servizi', href: '#servizi' },
  { name: 'Contatti', href: '#contatti' },
];

const services = [
  'Impianti Fotovoltaici',
  'Efficienza Energetica',
  'Detrazioni Fiscali',
  'Sicurezza sul Lavoro',
  'Pratiche GSE & Enel',
  'Consulenza Tecnica',
  'Impianti Termici',
];

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImg}
                alt="Logo Studio Costanzo-Pagano"
                className="w-auto h-20 md:h-24 min-h-[80px] rounded-lg object-contain"
              />

              <div>
                <h3 className="font-bold text-lg leading-tight">
                  Studio Costanzo-Pagano
                </h3>
                <p className="text-sm text-blue-200">Ingegneria &amp; Consulenza</p>
              </div>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Professionisti dell&apos;ingegneria specializzati in
              energie rinnovabili, efficienza energetica e sicurezza sul lavoro.
            </p>

            <div className="flex items-center gap-2 text-sm text-blue-200">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Iscritti all&apos;Albo degli Ingegneri di Caserta
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Link Rapidi</h4>
            <nav aria-label="Link rapidi footer">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-100 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ExternalLink
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Servizi</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-blue-100 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Via+IV+Novembre+137%2C+81038+Trentola-Ducenta+CE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors"
                  aria-label="Apri indirizzo su Google Maps"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">
                    Via IV Novembre 137
                    <br />
                    81038 Trentola-Ducenta (CE)
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+393319284991"
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">331 928 4991 (Costanzo)</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+393388920421"
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">338 892 0421 (Pagano)</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:giovannicostanzo@libero.it"
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">giovannicostanzo@libero.it</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:vpagano@libero.it"
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">vpagano@libero.it</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-200 text-center md:text-left">
              &copy; {new Date().getFullYear()} Studio Costanzo-Pagano. Tutti i diritti riservati.
            </p>

            <div className="flex items-center gap-4 text-sm text-blue-200">
              <button
                onClick={() => scrollToSection('#contatti')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                onClick={() => scrollToSection('#contatti')}
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
