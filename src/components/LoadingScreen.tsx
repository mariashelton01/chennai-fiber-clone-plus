
import { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Connecting to ACT Fibernet...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textTimer = setInterval(() => {
      const texts = [
        'Connecting to ACT Fibernet...',
        'Setting up your high-speed connection...',
        'Preparing lightning-fast internet...',
        'Almost ready...'
      ];
      setLoadingText(texts[Math.floor(progress / 25) % texts.length]);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="mb-8 animate-pulse">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 inline-block">
            <Wifi size={64} className="text-white animate-spin" style={{ animationDuration: '2s' }} />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-3xl font-bold mb-2">ACT FIBERNET</div>
          <div className="text-lg">{loadingText}</div>
        </div>
        
        <div className="w-80 bg-white/20 rounded-full h-2 mb-4">
          <div 
            className="bg-yellow-400 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="text-sm opacity-80">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
