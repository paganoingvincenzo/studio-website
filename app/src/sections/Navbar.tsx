import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollTo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Chi Siamo', href: '#chi-siamo' },
  { name: 'Servizi', href: '#servizi' },
  { name: 'Strumenti', href: '#strumenti' },
  { name: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content - Accessibilità */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-[#1e3a5f] focus:font-semibold"
      >
        Vai al contenuto principale
      </a>

      <nav
        role="navigation"
        aria-label="Navigazione principale"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg" aria-hidden="true">CP</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-[#1e3a5f] leading-tight">
                  Studio Costanzo-Pagano
                </p>
                <p className="text-xs text-gray-500">Ingegneria &amp; Consulenza</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1e3a5f] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+390818113194" aria-label="Chiama lo studio al numero 081 811 3194">
                <Button className="bg-[#1e3a5f] hover:bg-[#152d4a] text-white gap-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden lg:inline">Chiamaci</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <a href="tel:+390818113194" className="block w-full">
                <Button className="w-full bg-[#1e3a5f] hover:bg-[#152d4a] text-white gap-2 mt-2">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Chiamaci
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
