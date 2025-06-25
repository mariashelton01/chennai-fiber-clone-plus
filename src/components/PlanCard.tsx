
import { Wifi } from 'lucide-react';

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
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-sm text-gray-600 mb-1">{plan.name}</div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{plan.speed}</div>
      <div className="text-xl font-bold text-red-600 mb-3">@{plan.price}</div>
      
      {plan.features.length > 0 && (
        <div className="space-y-1">
          {plan.features.map((feature, index) => (
            <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
              {feature.includes('MESH') && <Wifi size={12} />}
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {plan.category === 'MESH' && (
        <div className="flex justify-end mt-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Wifi size={16} className="text-gray-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
