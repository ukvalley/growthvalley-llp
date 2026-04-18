import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Terms of Service | Growthvalley LLP</title>
        <meta name="description" content="Terms of Service for Growthvalley LLP 1:1 Strategy Call services." />
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
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
            <p className="text-slate-500 mb-8">Last updated: April 17, 2026</p>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                Please read these Terms of Service carefully before booking a 1:1 Strategy Call with Growthvalley LLP. By booking our services, you agree to these terms.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Service Description</h2>
              <p className="text-slate-600 mb-6">
                Growthvalley LLP provides 1:1 Strategy Calls for business consulting and marketing guidance. Each call is approximately 45 minutes and conducted via video conferencing (Google Meet, Zoom, or similar platform).
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Booking and Payment</h2>
              <p className="text-slate-600 mb-4">
                To book a strategy call:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Complete the checkout process on our website</li>
                <li>Payment is required in advance via Razorpay</li>
                <li>Upon successful payment, you will receive a confirmation email</li>
                <li>Schedule your preferred time slot using the provided link</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Cancellations and Rescheduling</h2>
              <p className="text-slate-600 mb-4">
                We understand plans can change. Our policy:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>You may reschedule your call up to 24 hours before the scheduled time</li>
                <li>To reschedule, reply to your confirmation email or contact us</li>
                <li>No-shows without prior notice may not be eligible for rescheduling</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Refund Policy</h2>
              <p className="text-slate-600 mb-6">
                We offer a 7-day money-back guarantee. If you are not satisfied with your strategy call, you may request a full refund within 7 days of your call. Refunds are processed within 5-7 business days to the original payment method.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Intellectual Property</h2>
              <p className="text-slate-600 mb-6">
                All materials, strategies, and content shared during the call remain the intellectual property of Growthvalley LLP. You may use the advice and strategies for your own business but may not resell or redistribute the materials.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Confidentiality</h2>
              <p className="text-slate-600 mb-6">
                We respect your business confidentiality. Information shared during the call will be kept confidential and not disclosed to third parties, except as required by law.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-600 mb-6">
                Growthvalley LLP provides advice and recommendations based on our experience. However, we cannot guarantee specific business results. Our liability is limited to the amount paid for the service.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Contact Information</h2>
              <p className="text-slate-600 mb-6">
                For questions about these Terms of Service, please contact:
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
