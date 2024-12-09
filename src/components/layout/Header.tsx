import React, { useState, useEffect } from 'react';
import { BeakerIcon, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <BeakerIcon className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Brainbox Ecom Lab</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
            <NavLink onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
            <NavLink onClick={() => scrollToSection('testimonials')}>Success Stories</NavLink>
            <NavLink onClick={() => scrollToSection('forum')}>Forum</NavLink>
            <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://calendly.com/brainbox-ecom/call_session"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200"
            >
              Book a Call
            </a>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-3">
              <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
              <NavLink onClick={() => scrollToSection('pricing')}>Pricing</NavLink>
              <NavLink onClick={() => scrollToSection('testimonials')}>Success Stories</NavLink>
              <NavLink onClick={() => scrollToSection('forum')}>Forum</NavLink>
              <NavLink onClick={() => scrollToSection('faq')}>FAQ</NavLink>
              <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
              <a
                href="https://calendly.com/brainbox-ecom/call_session"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}