import { useState, useEffect } from 'react';
import { User, Clock } from 'lucide-react';

const notifications = [
  { name: "Tanish", location: "Mumbai", action: "booked a strategy call", time: "2 min ago" },
  { name: "Priya", location: "Delhi", action: "just claimed a free call", time: "5 min ago" },
  { name: "Rahul", location: "Bangalore", action: "secured the last spot", time: "8 min ago" },
  { name: "Neha", location: "Pune", action: "booked a 45-min call", time: "12 min ago" },
  { name: "Amit", location: "Hyderabad", action: "just joined 500+ clients", time: "15 min ago" },
  { name: "Sneha", location: "Chennai", action: "claimed free bonuses", time: "18 min ago" },
  { name: "Vikram", location: "Ahmedabad", action: "booked a strategy call", time: "21 min ago" },
  { name: "Kavita", location: "Jaipur", action: "just claimed a free call", time: "25 min ago" },
];

export function RecentActivityNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = notifications[currentIndex];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <div className={`flex items-center gap-2 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-sm">
            <span className="font-black">{current.name}</span> from {current.location} {current.action}
          </span>
          <div className="flex items-center gap-1 text-white/80 text-xs bg-white/20 px-2 py-0.5 rounded-full">
            <Clock className="w-3 h-3" />
            <span>{current.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
