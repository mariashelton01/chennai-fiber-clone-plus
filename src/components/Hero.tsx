
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
      </div>
    </section>
  );
};

export default Hero;
