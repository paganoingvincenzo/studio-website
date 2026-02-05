/**
 * Scroll fluido verso una sezione della pagina
 * @param href - Selettore CSS della sezione (es. '#contatti')
 */
export function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
