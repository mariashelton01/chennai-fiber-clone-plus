
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launching Now!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Nonstop Entertainment & Unstoppable Speeds.
            </p>
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block text-xl font-bold">
              75 Mbps* @₹749
            </div>
            <div className="mt-6">
              <p className="text-lg">www.actcorp.in/amazon-prime</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Uninterrupted internet with</h3>
              <div className="text-4xl font-bold mb-4">ACT FIBERNET</div>
              <h3 className="text-2xl font-bold mb-4">Uninterrupted entertainment with</h3>
              <div className="text-4xl font-bold">amazon prime</div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <img src="/placeholder.svg" alt="Entertainment" className="w-full h-16 object-cover rounded" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <img src="/placeholder.svg" alt="Entertainment" className="w-full h-16 object-cover rounded" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <img src="/placeholder.svg" alt="Entertainment" className="w-full h-16 object-cover rounded" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <img src="/placeholder.svg" alt="Entertainment" className="w-full h-16 object-cover rounded" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <img src="/placeholder.svg" alt="Entertainment" className="w-full h-16 object-cover rounded" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded p-2">
            <img src="/placeholder.svg" alt="Entertainment" className="w-full h-16 object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
