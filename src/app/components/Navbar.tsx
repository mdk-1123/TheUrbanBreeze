import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
              TheUrbanBreeze
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">Your Space. Your Breeze.</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-cyan-600 transition-colors">
              FAQ
            </button>
          </div>

          {/* CTA and Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="relative p-2 text-gray-700 hover:text-cyan-600 transition-colors">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hidden sm:block bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Buy Now
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-cyan-600"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-cyan-600"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-cyan-600"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-cyan-600"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full bg-gradient-to-r from-cyan-500 to-emerald-400 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
