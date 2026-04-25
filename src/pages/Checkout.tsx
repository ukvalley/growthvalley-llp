import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Shield, Clock, Phone, Mail, User, Gift, Sparkles } from 'lucide-react';

const ORIGINAL_PRICE = 15000;
const DISCOUNT_PERCENT = 100;

export default function Checkout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    challenge: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Navigate to thank you page with lead data
    navigate('/thank-you', {
      state: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        isFree: true,
      }
    });

    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Book Your Free Strategy Call | Growthvalley LLP</title>
        <meta name="description" content="Book your FREE 1:1 Strategy Call with Growthvalley LLP. Limited spots available." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-4">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-black/80 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-black font-bold text-sm">100% OFF - Limited Time</span>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-green-600 text-white py-3">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-semibold text-sm md:text-base">
              🎉 Congratulations! You&apos;ve unlocked the <span className="font-black">FREE Strategy Call</span> (Worth ₹15,000)
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left - Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Claim Your FREE Call</h1>
                    <p className="text-green-600 font-medium">{DISCOUNT_PERCENT}% OFF - Today Only</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-800 text-sm">
                    <span className="font-bold">What happens next?</span> After submitting, you&apos;ll receive a calendar link to book your 45-min strategy call with {formData.name || 'Umesh'}.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Biggest Challenge You&apos;re Facing (Optional)
                    </label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us what you're struggling with..."
                    />
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center gap-3 mt-6 p-4 bg-slate-50 rounded-xl">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Your Information is Secure</p>
                    <p className="text-xs text-slate-500">We never share your data with third parties.</p>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden mt-6 pt-6 border-t border-slate-200">
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 line-through">₹{ORIGINAL_PRICE.toLocaleString()}</span>
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">{DISCOUNT_PERCENT}% OFF</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-900 font-bold">You Pay</span>
                      <span className="text-3xl font-black text-green-600">FREE</span>
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-600/20"
                  >
                    {isLoading ? 'Processing...' : 'Book My Free Call →'}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    No credit card required. No hidden fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Summary */}
            <div className="md:col-span-2 hidden md:block">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6 border-2 border-green-500/20">
                <div className="bg-green-500 text-white text-center py-2 rounded-full mb-4">
                  <span className="font-bold text-sm">🔥 LIMITED FREE SPOTS</span>
                </div>

                <h2 className="font-bold text-slate-900 mb-4">What You&apos;re Getting</h2>

                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">1:1 Strategy Call</h3>
                    <p className="text-sm text-slate-600">45 minutes</p>
                    <p className="text-xs text-green-600 font-medium">Value: ₹15,000</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Custom Marketing Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>90-Day Action Plan</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>WhatsApp Support (7 days)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>₹15,997 FREE Bonus Bundle</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 pt-4 border-t border-slate-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Regular Price</span>
                    <span className="text-slate-500 line-through">₹{ORIGINAL_PRICE.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Discount</span>
                    <span className="text-green-600 font-bold">-{DISCOUNT_PERCENT}% (₹{ORIGINAL_PRICE.toLocaleString()} OFF)</span>
                  </div>
                  <div className="flex justify-between items-center font-black text-xl pt-3 border-t border-slate-200">
                    <span className="text-slate-900">Total</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-4">
                  <p className="text-green-800 text-sm font-medium text-center">
                    🎉 You save ₹{ORIGINAL_PRICE.toLocaleString()} today!
                  </p>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-600/20"
                >
                  {isLoading ? 'Processing...' : 'Book My Free Call →'}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                  <Lock className="w-3 h-3" />
                  <span>No credit card required</span>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">
                    Only <span className="text-red-500 font-bold">3 free spots</span> left this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
