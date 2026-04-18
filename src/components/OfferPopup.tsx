import { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsOpen(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasClosed]);

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
    <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-fade-in-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <Gift className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Wait! Special Bonus</h3>
            <p className="text-sm text-slate-600">Limited time offer</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 mb-6">
          <p className="text-slate-800 mb-2">
            Book in the next <span className="font-bold text-yellow-700">10 minutes</span> and get:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Custom Marketing Toolkit (₹2,997 value)</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>30-Day Action Plan Template</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-yellow-600 font-bold">✓</span>
              <span>Email Support for 7 Days</span>
            </li>
          </ul>
        </div>

        <button
          onClick={scrollToBooking}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
        >
          Claim Your Bonus Now
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-xs text-slate-500 mt-3">
          This offer expires when you close this popup
        </p>
      </div>
    </div>
  );
}
