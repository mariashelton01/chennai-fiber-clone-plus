
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-scale-in">
              Launching Now!
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-200">
              Now get incredibly fast speeds and reliable service with super ott deals, ACT now
            </p>
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block text-xl font-bold hover-scale animate-fade-in delay-300">
              75 Mbps* @₹749
            </div>
            <div className="mt-6 animate-fade-in delay-500">
              <p className="text-lg">www.actcorp.in/amazon-prime</p>
            </div>
          </div>
          
          <div className="text-center animate-scale-in delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Uninterrupted internet with</h3>
              <div className="text-4xl font-bold mb-4">ACT FIBERNET</div>
              <h3 className="text-2xl font-bold mb-4">Uninterrupted entertainment with</h3>
              <div className="text-4xl font-bold">amazon prime</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4 animate-fade-in delay-700">
          <div className="bg-white/10 backdrop-blur-sm rounded p-2 hover-scale transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop" 
              alt="WiFi Router Technology" 
              className="w-full h-16 object-cover rounded"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2 hover-scale transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
              alt="Internet Connection" 
              className="w-full h-16 object-cover rounded"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2 hover-scale transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" 
              alt="Network Circuit Board" 
              className="w-full h-16 object-cover rounded"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2 hover-scale transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop" 
              alt="Network Configuration" 
              className="w-full h-16 object-cover rounded"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2 hover-scale transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop" 
              alt="WiFi Technology" 
              className="w-full h-16 object-cover rounded"
            />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2 hover-scale transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" 
              alt="Digital Connection" 
              className="w-full h-16 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
