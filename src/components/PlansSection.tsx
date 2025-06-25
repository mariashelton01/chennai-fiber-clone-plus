
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
      features: ["FREE WIFI 400+ TV CHANNELS"]
    },
    {
      name: "ACT STARTER COMBO PLUS + STREAMING",
      speed: "75 Mbps*",
      price: "₹875",
      category: "ENTERTAINMENT",
      features: ["FREE WIFI 400+ TV CHANNELS"]
    },
    {
      name: "ACT CHN SUPERSTAR",
      speed: "200 Mbps*",
      price: "₹1075",
      category: "ENTERTAINMENT",
      features: ["FREE WIFI 400+ TV CHANNELS"]
    }
  ];

  const premiumPlans = [
    {
      name: "STARTER COMBO",
      speed: "75 Mbps*",
      price: "₹749",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS"]
    },
    {
      name: "ACT BASIC",
      speed: "150 Mbps*",
      price: "₹999",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS"]
    },
    {
      name: "ACT STREAMING",
      speed: "150 Mbps*",
      price: "₹1099",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS"]
    },
    {
      name: "ACT RUSH",
      speed: "400 Mbps*",
      price: "₹1399",
      category: "PREMIUM ENTERTAINMENT",
      features: ["400+ TV CHANNELS"]
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
      features: ["400+ TV CHANNELS", "DUAL BAND MESH PODS"]
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
      features: ["400+ TV CHANNELS", "DUAL BAND MESH PODS"]
    }
  ];

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            SMART Wi-Fi PLANS
          </h2>
          <p className="text-xl text-gray-600">designed for your connected life</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4">
              SPEED
            </div>
            <div className="space-y-4">
              {speedPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4">
              ENTERTAINMENT
            </div>
            <div className="space-y-4">
              {entertainmentPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4">
              PREMIUM ENTERTAINMENT
            </div>
            <div className="space-y-4">
              {premiumPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          <div>
            <div className="bg-yellow-400 text-black text-center py-3 rounded-t-lg font-bold text-lg mb-4">
              MESH
            </div>
            <div className="space-y-4">
              {meshPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-600 text-white text-center py-3 rounded-lg">
          <p className="text-lg font-semibold">Amazon Fire Stick available @₹750*</p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
