
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Blog', target: 'collection' }, // Pointing to collection for demo purposes
    { name: 'Collection', target: 'collection' },
    { name: 'Contact', target: 'contact' }
  ];

  const handleScrollTo = (targetId: string) => {
    setMobileMenuOpen(false);
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-8 flex justify-between items-center
      ${isScrolled ? 'bg-beige/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <div 
        className="cursor-pointer z-50" 
        onClick={() => handleScrollTo('hero')}
      >
        <svg width="42" height="28" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black fill-current">
            <path d="M0 0L8 25H14L18 12L22 25H28L36 0H29L25 15L20 0H16L11 15L7 0H0Z" />
        </svg>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <button 
            key={link.name} 
            onClick={() => handleScrollTo(link.target)}
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <Button variant="dark" onClick={() => handleScrollTo('collection')}>shop</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-black z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-beige flex flex-col justify-center items-center gap-8 z-40">
          {links.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleScrollTo(link.target)}
              className="text-2xl font-medium text-black"
            >
              {link.name}
            </button>
          ))}
          <div className="mt-4">
            <Button variant="dark" onClick={() => handleScrollTo('collection')}>shop collection</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
