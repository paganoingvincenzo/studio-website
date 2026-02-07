import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/scrollTo';
import logoImg from '../assets/logo-new.png';
import { Link } from 'react-router-dom';

const navLinks: Array<
  | { name: string; type: 'section'; href: `#${string}` }
  | { name: string; type: 'route'; to: `/${string}` }
> = [
  { name: 'Home', type: 'section', href: '#home' },
  { name: 'Chi Siamo', type: 'section', href: '#chi-siamo' },
  { name: 'Servizi', type: 'section', href: '#servizi' },

  { name: 'Lavori', type: 'route', to: '/lavori' },

  { name: 'Strumenti', type: 'section', href: '#strumenti' },
  { name: 'Contatti', type: 'section', href: '#contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.r
