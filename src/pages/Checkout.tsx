import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Shield, Clock, Phone, Mail, User } from 'lucide-react';
import { initializeRazorpay, DEFAULT_RAZORPAY_OPTIONS } from '../utils/razorpay';

const PRICE = 4999;
const ORIGINAL_PRICE = 15000;

export default function Checkout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      await initializeRazorpay({
        ...DEFAULT_RAZORPAY_OPTIONS,
        amount: PRICE * 100,
        description: '1:1 Strategy Call - Growthvalley LLP',
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        handler: (response) => {
          console.log('Payment successful:', response);
          navigate('/thank-you', {
            state: {
              paymentId: response.razorpay_payment_id,
              name: formData.name,
              email: formData.email,
            }
          });
        },
      });
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Complete Your Booking | Growthvalley LLP</title>
        <meta name="description" content="Secure checkout for 1:1 Strategy Call with Growthvalley LLP." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-slate-900 py-4">
          <div className="max-w-4xl mx-auto px-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left - Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Complete Your Booking</h1>
                <p className="text-slate-600 mb-6">Enter your details to secure your 1:1 strategy call</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex items-center gap-3 mt-6 p-4 bg-green-50 rounded-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 text-sm">Secure Payment</p>
                    <p className="text-xs text-green-600">256-bit SSL encryption. Your data is safe.</p>
                  </div>
                </div>

                {/* Mobile Price (visible only on mobile) */}
                <div className="md:hidden mt-6 pt-6 border-t border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">Original Price</span>
                    <span className="text-slate-500 line-through">₹{ORIGINAL_PRICE.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-600">You Pay</span>
                    <span className="text-2xl font-bold text-slate-900">₹{PRICE.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Processing...' : 'Pay Now'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right - Summary */}
            <div className="md:col-span-2 hidden md:block">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h2 className="font-bold text-slate-900 mb-4">Order Summary</h2>

                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">1:1 Strategy Call</h3>
                    <p className="text-sm text-slate-600">45 minutes</p>
                    <p className="text-xs text-slate-500">Growthvalley LLP</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Original Price</span>
                    <span className="text-slate-500 line-through">₹{ORIGINAL_PRICE.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Discount</span>
                    <span className="text-green-600">-₹{(ORIGINAL_PRICE - PRICE).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-200">
                    <span className="text-slate-900">Total</span>
                    <span className="text-slate-900">₹{PRICE.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>7-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span>Instant call scheduling</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : `Pay ₹${PRICE.toLocaleString()}`}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                  <Lock className="w-3 h-3" />
                  <span>Secured by Razorpay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
