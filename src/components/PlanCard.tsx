
import { Wifi, Tv, Zap, Globe, Router, Signal } from 'lucide-react';

interface Plan {
  name: string;
  speed: string;
  price: string;
  category: string;
  features: string[];
}

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'SPEED':
        return <Zap size={24} className="text-red-600 animate-pulse" />;
      case 'ENTERTAINMENT':
        return <Tv size={24} className="text-red-600 animate-bounce" />;
      case 'PREMIUM ENTERTAINMENT':
        return <Globe size={24} className="text-red-600 animate-spin" style={{ animation: 'spin 3s linear infinite' }} />;
      case 'MESH':
        return <Router size={24} className="text-red-600 animate-pulse" />;
      default:
        return <Wifi size={24} className="text-red-600 animate-pulse" />;
    }
  };

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('MESH')) return <Signal size={14} className="text-red-600" />;
    if (feature.includes('TV') || feature.includes('CHANNELS')) return <Tv size={14} className="text-red-600" />;
    if (feature.includes('WIFI')) return <Wifi size={14} className="text-red-600" />;
    return <Zap size={14} className="text-red-600" />;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover-scale transform hover:-translate-y-1 border border-gray-100">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2 bg-red-50 rounded-full">
          {getIconForCategory(plan.category)}
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600 font-medium">{plan.name}</div>
        </div>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-gray-800 mb-2">{plan.speed}</div>
        <div className="text-2xl font-bold text-red-600">@{plan.price}</div>
        <div className="text-sm text-gray-500">Per Month</div>
      </div>
      
      {plan.features.length > 0 && (
        <div className="space-y-2 mt-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="text-sm text-gray-600 flex items-center gap-2 justify-center">
              {getFeatureIcon(feature)}
              <span className="text-center">{feature}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold hover-scale">
          Get Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
