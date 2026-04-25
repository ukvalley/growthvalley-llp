import { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsOpen(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasClosed]);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setHasClosed(true);
  };

  const scrollToBooking = () => {
    setIsOpen(false);
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-[360px] sm:max-w-md relative animate-fade-in-up shadow-2xl overflow-hidden"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Close button - larger touch target for mobile */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 sm:px-6 pt-5 sm:pt-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-black">Wait! Special Bonus</h3>
              <p className="text-xs sm:text-sm text-black/70">Limited time offer</p>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="px-5 sm:px-6 py-4 sm:py-5">
          {/* Countdown timer */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span className="text-sm font-bold text-red-600">Offer expires in:</span>
            </div>
            <div className="flex justify-center gap-2">
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <span className="text-xs text-slate-500 ml-1">min</span>
              </div>
              <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                <span className="text-xl sm:text-2xl font-bold text-red-600">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                <span className="text-xs text-slate-500 ml-1">sec</span>
              </div>
            </div>
          </div>

          {/* Bonus items */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 mb-4 sm:mb-5">
            <p className="text-slate-900 font-semibold text-sm sm:text-base mb-3">
              Book now and get these bonuses:
            </p>
            <ul className="space-y-3">
              {[
                { title: 'Custom Marketing Toolkit', value: '₹2,997 value' },
                { title: '30-Day Action Plan Template', value: '₹1,997 value' },
                { title: '7-Day Email Support', value: '₹997 value' },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-slate-800 font-medium text-sm sm:text-base block">
                      {item.title}
                    </span>
                    <span className="text-green-600 text-xs sm:text-sm font-semibold">
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-200 flex justify-between items-center">
              <span className="text-slate-500 text-xs sm:text-sm">Total Value:</span>
              <span className="text-lg sm:text-xl font-bold text-green-600">₹5,991</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToBooking}
            className="w-full bg-black text-white font-bold py-3.5 sm:py-4 rounded-xl hover:bg-slate-800 active:bg-slate-900 transition-colors flex items-center justify-center gap-2 text-base sm:text-lg shadow-lg"
          >
            Claim Your Bonus
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Footer text */}
          <p className="text-center text-xs text-slate-400 mt-3 sm:mt-4">
            This offer expires when you close this popup
          </p>
        </div>
      </div>
    </div>
  );
}
