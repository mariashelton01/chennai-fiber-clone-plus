
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-xl">
              ACT
            </div>
            <span className="text-gray-800 font-semibold">FIBERNET</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#plans" className="text-gray-700 hover:text-red-600 transition-colors">Plans</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Support</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-red-600">
              <Phone size={20} />
              <span className="font-semibold">91 21 21 21 21</span>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#plans" className="block text-gray-700 hover:text-red-600 transition-colors">Plans</a>
              <a href="#" className="block text-gray-700 hover:text-red-600 transition-colors">Support</a>
              <a href="#" className="block text-gray-700 hover:text-red-600 transition-colors">About</a>
              <div className="flex items-center space-x-2 text-red-600 pt-2">
                <Phone size={20} />
                <span className="font-semibold">91 21 21 21 21</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
