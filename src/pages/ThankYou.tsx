import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';

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

  // Redirect if no payment data
  useEffect(() => {
    if (!location.state?.paymentId) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const { paymentId, name, email } = location.state || {};

  const handleSchedule = () => {
    if (!selectedSlot) return;
    setIsScheduled(true);
  };

  return (
    <>
      <Helmet>
        <title>Thank You! | Growthvalley LLP</title>
        <meta name="description" content="Payment successful! Schedule your 1:1 strategy call now." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-slate-600 mb-6">
              Thank you, {name || 'there'}! Your 1:1 Strategy Call is confirmed.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 inline-block">
              <p className="text-sm text-slate-500">Payment ID</p>
              <p className="font-mono text-slate-700">{paymentId}</p>
            </div>

            {!isScheduled ? (
              <>
                <div className="border-t border-slate-200 pt-6 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    <h2 className="text-xl font-bold text-slate-900">Schedule Your Call</h2>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Choose your preferred time slot. We'll send a confirmation to {email}.
                  </p>

                  {/* Time Slots */}
                  <div className="space-y-4 text-left">
                    {timeSlots.map((slot) => (
                      <div key={slot.day} className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-semibold text-slate-900">{slot.day}</span>
                          <span className="text-sm text-slate-500">({slot.date})</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {slot.times.map((time) => (
                            <button
                              key={`${slot.day}-${time}`}
                              onClick={() => setSelectedSlot({ day: slot.day, time })}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                selectedSlot?.day === slot.day && selectedSlot?.time === time
                                  ? 'bg-yellow-400 text-black'
                                  : 'bg-white border border-slate-200 text-slate-700 hover:border-yellow-400'
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
                      className="mt-6 w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                    >
                      Confirm {selectedSlot.day} at {selectedSlot.time}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* What to Expect */}
                <div className="bg-slate-50 rounded-xl p-6 text-left">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span>You'll receive a calendar invite within 5 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span>Meeting link (Google Meet/Zoom) will be included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span>We'll send a brief questionnaire before the call</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="mt-6 bg-green-50 rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">Call Scheduled!</h3>
                <p className="text-green-700 mb-4">
                  Your call is set for {selectedSlot?.day} at {selectedSlot?.time}
                </p>
                <p className="text-sm text-green-600">
                  Check your email ({email}) for the calendar invite and meeting link.
                </p>
              </div>
            )}

            {/* Contact */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-600">
              <a href="mailto:hello@growthvalley.com" className="flex items-center gap-2 hover:text-yellow-600">
                <Mail className="w-4 h-4" />
                hello@growthvalley.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-yellow-600">
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
