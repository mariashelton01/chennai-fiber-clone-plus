import PlanCard from './PlanCard';

const PlansSection = () => {
  const speedPlans = [
    {
      name: "ACT STARTER PLUS",
      speed: "75 Mbps*",
      price: "₹575",
      category: "SPEED",
      features: []
    },
    {
      name: "ACT BASIC",
      speed: "150 Mbps*",
      price: "₹845",
      category: "SPEED",
      features: []
    },
    {
      name: "ACT STORM",
      speed: "400 Mbps*",
      price: "₹1149",
      category: "SPEED",
      features: []
    },
    {
      name: "ACT GIGA",
      speed: "1 Gbps*",
      price: "₹2999",
      category: "SPEED",
      features: []
    }
  ];

  const entertainmentPlans = [
    {
      name: "ACT STARTER COMBO",
      speed: "50 Mbps*",
      price: "₹675",
      category: "ENTERTAINMENT",
      features: ["FREE WIFI 400+ TV CHANNELS + OTT"]
    },
    {
      name: "ACT STARTER COMBO PLUS + STREAMING",
      speed: "75 Mbps*",
      price: "₹875",
      category: "ENTERTAINMENT",
      features: ["FREE WIFI 400+ TV CHANNELS + OTT"]
    },
    {
      name: "ACT CHN SUPERSTAR",
      speed: "200 Mbps*",
      price: "₹1075",
      category: "ENTERTAINMENT",
      features: ["FREE WIFI 400+ TV CHANNELS + OTT"]
    }
  ];

  const premiumPlans = [
    {
      name: "STARTER COMBO",
      speed: "75 Mbps*",
      price: "₹749",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS + OTT"]
    },
    {
      name: "ACT BASIC",
      speed: "150 Mbps*",
      price: "₹999",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS + OTT"]
    },
    {
      name: "ACT STREAMING",
      speed: "150 Mbps*",
      price: "₹1099",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS + OTT"]
    },
    {
      name: "ACT RUSH",
      speed: "400 Mbps*",
      price: "₹1399",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS + OTT"]
    }
  ];

  const meshPlans = [
    {
      name: "ACT BASIC MESH",
      speed: "150 Mbps*",
      price: "₹945",
      category: "MESH",
      features: ["DUAL BAND MESH PODS"]
    },
    {
      name: "ACT MESH STREAMING",
      speed: "150 Mbps*",
      price: "₹1199",
      category: "MESH",
      features: ["400+ TV CHANNELS + OTT", "DUAL BAND MESH PODS"]
    },
    {
      name: "ACT MESH STORM",
      speed: "400 Mbps*",
      price: "₹1199",
      category: "MESH",
      features: ["DUAL BAND MESH PODS"]
    },
    {
      name: "ACT MESH STORM BONANZA",
      speed: "400 Mbps*",
      price: "₹1499",
      category: "MESH",
      features: ["400+ TV CHANNELS + OTT", "DUAL BAND MESH PODS"]
    }
  ];

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            SMART Wi-Fi PLANS
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 justify-center">
            <div className="animate-slide-in-left">
              <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4 hover-scale transition-all duration-300">
                SPEED
              </div>
              <div className="space-y-4">
                {speedPlans.map((plan, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <PlanCard plan={plan} />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4 hover-scale transition-all duration-300">
                ENTERTAINMENT + OTT
              </div>
              <div className="space-y-4">
                {entertainmentPlans.map((plan, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 4) * 100}ms` }}>
                    <PlanCard plan={plan} />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
              <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4 hover-scale transition-all duration-300">
                PREMIUM ENTERTAINMENT + OTT
              </div>
              <div className="space-y-4">
                {premiumPlans.map((plan, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 7) * 100}ms` }}>
                    <PlanCard plan={plan} />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: '600ms' }}>
              <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4 hover-scale transition-all duration-300">
                MESH
              </div>
              <div className="space-y-4">
                {meshPlans.map((plan, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${(index + 11) * 100}ms` }}>
                    <PlanCard plan={plan} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-600 text-white text-center py-3 rounded-lg hover-scale transition-all duration-300 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '1000ms' }}>
          <p className="text-lg font-semibold">Amazon Fire Stick available @₹750*</p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
