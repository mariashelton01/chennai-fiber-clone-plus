
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md relative z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-xl hover-scale transition-all duration-300">
              ACT
            </div>
            <span className="text-gray-800 font-semibold">FIBERNET</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 transition-colors story-link">Home</button>
            <button onClick={() => scrollToSection('plans')} className="text-gray-700 hover:text-red-600 transition-colors story-link">Plans</button>
            <button onClick={() => scrollToSection('enquiry')} className="text-gray-700 hover:text-red-600 transition-colors story-link">Enquiry</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-red-600 transition-colors story-link">Features</button>
          </nav>

          <div className="hidden md:flex items-center space-x-4 animate-fade-in">
            <div className="flex items-center space-x-2 text-red-600 hover-scale transition-all duration-300">
              <Phone size={20} />
              <span className="font-semibold">8438015779</span>
            </div>
          </div>

          <button 
            className="md:hidden hover-scale transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-slide-in-right">
            <nav className="py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('plans')} className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors">Plans</button>
              <button onClick={() => scrollToSection('enquiry')} className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors">Enquiry</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-red-600 transition-colors">Features</button>
              <div className="flex items-center space-x-2 text-red-600 pt-2">
                <Phone size={20} />
                <span className="font-semibold">8438015779</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
