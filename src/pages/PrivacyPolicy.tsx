import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Growthvalley LLP</title>
        <meta name="description" content="Privacy Policy for Growthvalley LLP 1:1 Strategy Call services." />
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
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
            <p className="text-slate-500 mb-8">Last updated: April 17, 2026</p>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                At Growthvalley LLP, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you book our 1:1 Strategy Call services.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Payment information (processed securely via Razorpay)</li>
                <li>Business information shared during the strategy call</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Process your booking and payment</li>
                <li>Schedule and conduct your 1:1 strategy call</li>
                <li>Send you confirmation and reminder emails</li>
                <li>Provide follow-up materials and resources</li>
                <li>Improve our services and customer experience</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Data Security</h2>
              <p className="text-slate-600 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information. All payment processing is handled by Razorpay, which uses industry-standard encryption and security protocols.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Information Sharing</h2>
              <p className="text-slate-600 mb-6">
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-slate-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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
