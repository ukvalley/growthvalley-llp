import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Shield, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RefundPolicy() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Refund Policy | Growthvalley LLP</title>
        <meta name="description" content="Refund Policy for Growthvalley LLP 1:1 Strategy Call services." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-slate-900 py-4">
          <div className="max-w-3xl mx-auto px-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Guarantee Badge */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-center">
                <span className="text-lg font-bold text-green-600">7-Day Money-Back Guarantee</span>
                <p className="text-sm text-slate-500">No questions asked</p>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Refund Policy</h1>
            <p className="text-slate-500 mb-8 text-center">Last updated: April 17, 2026</p>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                At Growthvalley LLP, we are committed to your satisfaction. If you're not completely satisfied with your 1:1 Strategy Call, we offer a hassle-free refund policy.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h2 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Our Promise to You
                </h2>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">✓</span>
                    <span>100% refund within 7 days of your strategy call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">✓</span>
                    <span>No questions asked - your satisfaction is our priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">✓</span>
                    <span>Refund processed within 5-7 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">✓</span>
                    <span>Money back to your original payment method</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">When Can I Request a Refund?</h2>
              <p className="text-slate-600 mb-4">
                You are eligible for a full refund if:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>You attend your scheduled strategy call and are not satisfied with the value received</li>
                <li>You request the refund within 7 days of your call</li>
                <li>Your request is made in good faith</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">How to Request a Refund</h2>
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <p className="font-medium text-slate-900">Email us at hello@growthvalley.com</p>
                      <p className="text-sm text-slate-600">Include "Refund Request" in the subject line</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <p className="font-medium text-slate-900">Provide your payment details</p>
                      <p className="text-sm text-slate-600">Include your payment ID and the email used for booking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <p className="font-medium text-slate-900">Receive your refund</p>
                      <p className="text-sm text-slate-600">We process refunds within 5-7 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Refund Timeline</h2>
              <div className="flex items-center gap-4 text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span>Request received</span>
                </div>
                <div className="flex-1 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span>Review (1-2 days)</span>
                </div>
                <div className="flex-1 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Refunded (5-7 days)</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Questions?</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about our refund policy, please don't hesitate to reach out:
              </p>
              <div className="bg-slate-50 rounded-xl p-4 text-slate-600">
                <p><strong>Growthvalley LLP</strong></p>
                <p>Email: hello@growthvalley.com</p>
                <p>Phone: +91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
