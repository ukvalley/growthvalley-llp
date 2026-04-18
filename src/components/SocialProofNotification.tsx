import { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const notifications = [
  { name: "Rahul from Mumbai", action: "booked a strategy call", time: "2 minutes ago" },
  { name: "Priya from Delhi", action: "purchased the call", time: "5 minutes ago" },
  { name: "Amit from Bangalore", action: "just booked", time: "8 minutes ago" },
  { name: "Sneha from Pune", action: "secured her slot", time: "12 minutes ago" },
  { name: "Vikram from Hyderabad", action: "made a purchase", time: "15 minutes ago" },
];

export function SocialProofNotification() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const notification = notifications[current];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 max-w-xs border-l-4 border-yellow-400">
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-slate-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-900 truncate">
            {notification.name}
          </p>
          <p className="text-xs text-slate-600">
            {notification.action} • {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}
