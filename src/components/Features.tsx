
import { Zap, Shield, Headphones, Wifi } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: "Lightning Fast Speed",
      description: "Experience blazing fast internet speeds up to 1 Gbps for seamless streaming and browsing."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: "Reliable Connection",
      description: "99.9% uptime guarantee with our robust fiber network infrastructure."
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any queries or issues."
    },
    {
      icon: <Wifi className="w-12 h-12 text-red-600" />,
      title: "Smart Wi-Fi",
      description: "Advanced mesh technology for complete home coverage and seamless connectivity."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose ACT Fibernet?</h2>
          <p className="text-xl text-gray-600">Experience the difference with our premium services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
