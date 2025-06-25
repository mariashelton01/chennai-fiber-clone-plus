
import { Wifi, Tv, Zap, Globe } from 'lucide-react';

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
        return <Zap size={16} className="text-red-600" />;
      case 'ENTERTAINMENT':
        return <Tv size={16} className="text-red-600" />;
      case 'PREMIUM ENTERTAINMENT':
        return <Globe size={16} className="text-red-600" />;
      case 'MESH':
        return <Wifi size={16} className="text-red-600" />;
      default:
        return <Wifi size={16} className="text-red-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 hover-scale transform hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-2">
        {getIconForCategory(plan.category)}
        <div className="text-sm text-gray-600">{plan.name}</div>
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{plan.speed}</div>
      <div className="text-xl font-bold text-red-600 mb-3">@{plan.price}</div>
      
      {plan.features.length > 0 && (
        <div className="space-y-1">
          {plan.features.map((feature, index) => (
            <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
              {feature.includes('MESH') && <Wifi size={12} className="text-red-600" />}
              {feature.includes('TV') && <Tv size={12} className="text-red-600" />}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {plan.category === 'MESH' && (
        <div className="flex justify-end mt-2">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors">
            <Wifi size={16} className="text-red-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
