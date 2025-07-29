import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
      isScrolled ? 'bg-space-black/90' : 'bg-space-black/80'
    } backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-hammersmith gradient-text tracking-wide">ASTRIAN</h1>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('applications')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Applications
            </button>
            <a 
              href="mailto:contact@astrian.ai" 
              className="gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-astrian-teal transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-space-black/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('applications')}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Applications
              </button>
              <a 
                href="mailto:contact@astrian.ai" 
                className="block gradient-bg text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 text-center text-sm font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
