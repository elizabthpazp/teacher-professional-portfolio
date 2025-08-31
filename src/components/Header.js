import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
 <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
}`}>
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-2xl font-bold text-slate-800 dark:text-white">
        <img src="/logo.png" alt="Logo" className="h-9 w-9 inline-block mr-2" />
        <span>IPD</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          About Me
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Portfolio
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('spanish-classes')}
          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          Spanish Classes
        </button>
        <ThemeToggle />
      </nav>

      {/* Mobile Controls */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggle />
        <button 
          onClick={toggleMenu} 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isMenuOpen ? (
            <X size={24} className="text-slate-800 dark:text-white" />
          ) : (
            <Menu size={24} className="text-slate-800 dark:text-white" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <nav className="md:hidden mt-4 py-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg border dark:border-slate-700">
        <div className="flex flex-col space-y-4 px-4">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('spanish-classes')}
            className="text-left text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Spanish Classes
          </button>
        </div>
      </nav>
    )}
  </div>
</header>

  );
};

export default Header;