import { Calendar } from 'lucide-react';

export function StickyMobileCTA() {
  const scrollToBooking = () => {
    document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-50 md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 line-through">₹15,000</span>
          <span className="text-lg font-bold text-green-600">FREE</span>
        </div>
        <button
          onClick={scrollToBooking}
          className="flex-1 bg-yellow-400 text-black font-bold py-3 px-4 rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Book Call Now
        </button>
      </div>
    </div>
  );
}
