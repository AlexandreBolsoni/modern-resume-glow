
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Sobre Mim', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alexandre H. Bolsoni
          </h1>
          <p className="text-sm text-muted-foreground hidden md:block">
            Desenvolvedor Full-Stack
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="nav-link font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="nav-link font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
