import { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

interface CountdownTimerProps {
  hours?: number;
  className?: string;
}

export function CountdownTimer({ hours = 24, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`bg-red-50 border-2 border-red-200 rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <Zap className="w-5 h-5 text-red-500 animate-pulse" />
        <span className="font-bold text-red-700">Limited Time Offer Ends In:</span>
      </div>
      <div className="flex justify-center gap-3">
        <div className="bg-red-600 text-white rounded-lg p-3 min-w-[60px] text-center">
          <div className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
          <div className="text-xs opacity-80">Hours</div>
        </div>
        <div className="text-2xl font-bold text-red-600 self-center">:</div>
        <div className="bg-red-600 text-white rounded-lg p-3 min-w-[60px] text-center">
          <div className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-xs opacity-80">Minutes</div>
        </div>
        <div className="text-2xl font-bold text-red-600 self-center">:</div>
        <div className="bg-red-600 text-white rounded-lg p-3 min-w-[60px] text-center">
          <div className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-xs opacity-80">Seconds</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-3 text-sm text-red-600">
        <Clock className="w-4 h-4" />
        <span>Price increases to ₹15,000 after timer ends</span>
      </div>
    </div>
  );
}
