import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, Phone, ArrowRight, Sparkles, Gift, Clock } from 'lucide-react';

interface TimeSlot {
  day: string;
  date: string;
  times: string[];
}

const timeSlots: TimeSlot[] = [
  {
    day: 'Monday',
    date: 'Tomorrow',
    times: ['10:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'],
  },
  {
    day: 'Tuesday',
    date: 'Day After',
    times: ['10:00 AM', '2:00 PM', '4:00 PM'],
  },
  {
    day: 'Wednesday',
    date: 'In 3 Days',
    times: ['11:00 AM', '3:00 PM', '5:00 PM'],
  },
];

export default function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);
  const [isScheduled, setIsScheduled] = useState(false);

  // Redirect if no booking data
  useEffect(() => {
    if (!location.state?.name) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const { name, email, isFree } = location.state || {};

  const handleSchedule = () => {
    if (!selectedSlot) return;
    setIsScheduled(true);
  };

  return (
    <>
      <Helmet>
        <title>Booking Confirmed! | Growthvalley LLP</title>
        <meta name="description" content="Your FREE strategy call is confirmed! Schedule your preferred time now." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-green-500/20">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            <div className="bg-green-100 text-green-800 font-bold text-sm px-4 py-2 rounded-full inline-block mb-4">
              🎉 {isFree ? 'FREE Strategy Call Claimed!' : 'Payment Successful!'}
            </div>

            <h1 className="text-3xl font-black text-slate-900 mb-2">
              {isFree ? 'You&apos;re In! Welcome 🎉' : 'Payment Successful!'}
            </h1>
            <p className="text-slate-600 mb-6 text-lg">
              {isFree
                ? `Thank you, ${name || 'there'}! Your FREE 45-min Strategy Call is confirmed.`
                : `Thank you, ${name || 'there'}! Your 1:1 Strategy Call is confirmed.`}
            </p>

            {/* Value Summary */}
            {isFree && (
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 mb-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-black font-black text-lg">Your FREE Bundle</p>
                    <p className="text-black/70 text-sm">Worth ₹15,000 - Yours FREE</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-black/70">✓ 45-min 1:1 Call</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-black/70">✓ 90-Day Roadmap</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-black/70">✓ WhatsApp Support</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-black/70">✓ ₹15,997 Bonus Pack</span>
                  </div>
                </div>
              </div>
            )}

            {!isScheduled ? (
              <>
                <div className="border-t border-slate-200 pt-6 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Schedule Your Call Now</h2>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Choose your preferred time slot. We&apos;ll send a confirmation to {email || 'your email'}.
                  </p>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-yellow-800 font-semibold text-sm">
                      <span>⚡ Limited slots available - Book within 24 hours</span>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-4 text-left">
                    {timeSlots.map((slot) => (
                      <div key={slot.day} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-bold text-slate-900">{slot.day}</span>
                          <span className="text-sm text-slate-500">({slot.date})</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {slot.times.map((time) => (
                            <button
                              key={`${slot.day}-${time}`}
                              onClick={() => setSelectedSlot({ day: slot.day, time })}
                              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                                selectedSlot?.day === slot.day && selectedSlot?.time === time
                                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                                  : 'bg-white border border-slate-200 text-slate-700 hover:border-green-500 hover:text-green-600'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {selectedSlot && (
                    <button
                      onClick={handleSchedule}
                      className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-black py-4 rounded-xl hover:from-green-700 hover:to-green-600 transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                    >
                      Confirm {selectedSlot.day} at {selectedSlot.time}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* What to Expect */}
                <div className="bg-slate-50 rounded-xl p-6 text-left border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span>You&apos;ll receive a calendar invite within 5 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span>Meeting link (Google Meet/Zoom) will be included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span>We&apos;ll send a brief questionnaire before the call</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      <span>Show up with your biggest challenge - we&apos;ll solve it!</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-500/30">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-green-800 mb-2">All Set! 🎉</h3>
                <p className="text-green-700 mb-4 text-lg">
                  Your call is scheduled for <span className="font-bold">{selectedSlot?.day} at {selectedSlot?.time}</span>
                </p>
                <p className="text-sm text-green-600 mb-6">
                  Check your email ({email || 'provided email'}) for the calendar invite and meeting link.
                </p>

                <div className="bg-white rounded-xl p-4 text-left">
                  <p className="font-semibold text-slate-800 mb-2">Quick Tips for Your Call:</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Come prepared with your biggest marketing challenge</li>
                    <li>✓ Have your current ad spend/revenue numbers ready</li>
                    <li>✓ Bring any questions about scaling your business</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-sm text-slate-600">
              <a href="mailto:hello@growthvalley.com" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <Mail className="w-4 h-4" />
                hello@growthvalley.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
