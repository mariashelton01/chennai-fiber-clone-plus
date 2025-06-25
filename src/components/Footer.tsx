
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-xl">
                ACT
              </div>
              <span className="font-semibold">FIBERNET</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading fiber internet service provider delivering high-speed connectivity and entertainment solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#plans" className="text-gray-300 hover:text-white transition-colors">Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fiber Internet</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart Wi-Fi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Entertainment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mesh Network</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-gray-300">8438015779</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-gray-300">fibernet_thirunindravur_2025@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-gray-300">Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 ACT Fibernet. All rights reserved. | www.actcorp.in/amazon-prime
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
