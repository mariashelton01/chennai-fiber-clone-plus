
import { Zap, Gift } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Gift className="w-8 h-8 text-white animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              SPECIAL LAUNCH OFFER
            </h2>
            <Zap className="w-8 h-8 text-white animate-bounce" />
          </div>
          
          <p className="text-xl md:text-2xl text-white font-semibold mb-4">
            Now get incredibly fast speeds and reliable service with super OTT deals
          </p>
          
          <div className="bg-white text-gray-800 inline-block px-8 py-4 rounded-lg shadow-lg hover-scale transition-all duration-300">
            <div className="text-2xl font-bold text-red-600">ACT NOW!</div>
            <div className="text-lg">Limited Time Offer - Don't Miss Out!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
