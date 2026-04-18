import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Check, ChevronDown, Clock, Users, Zap, Target, TrendingUp,
  Shield, AlertTriangle, Sparkles, Star, TrendingDown, Brain, Wallet,
  BarChart3, Building2, Package, Megaphone
} from 'lucide-react';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { ScrollingTicker } from '../components/ScrollingTicker';
import { SocialProofNotification } from '../components/SocialProofNotification';
import { ScrollAnimateWrapper } from '../components/ScrollAnimateWrapper';
import { CountdownTimer } from '../components/CountdownTimer';
import { OfferPopup } from '../components/OfferPopup';
import { StickyMobileCTA } from '../components/StickyMobileCTA';

const BUSINESS_NAME = "Growthvalley LLP";
const EXPERT_NAME = "Umesh Khivasara";
const CO_EXPERT = "Mohit Dhadiwal";
const DURATION = 45;
const PRICE = 4999;
const ORIGINAL_PRICE = 15000;

export default function Index() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Helmet>
        <title>1:1 Strategy Call with {EXPERT_NAME} | Growthvalley LLP</title>
        <meta name="description" content={`Book a ${DURATION}-minute 1:1 strategy call with ${EXPERT_NAME} at Growthvalley LLP. Transform your marketing, generate 3x more leads, and scale your business. Only ₹${PRICE} (Limited slots)`} />
        <link rel="canonical" href="https://growthvalley.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": EXPERT_NAME,
            "worksFor": { "@type": "Organization", "name": BUSINESS_NAME },
            "jobTitle": "Marketing Strategy Consultant",
            "offers": {
              "@type": "Offer",
              "price": PRICE.toString(),
              "priceCurrency": "INR",
              "availability": "https://schema.org/LimitedAvailability"
            }
          })}
        </script>
      </Helmet>

      <ScrollProgressBar />
      <ScrollingTicker />
      {showNotification && <SocialProofNotification />}

      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimateWrapper animation="fade-up">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 text-sm font-medium">Limited Slots Available</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Product is <span className="text-yellow-400">Good</span>... <br />
                  So Why Isn't It <span className="text-yellow-400">Selling?</span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed">
                  Get a <span className="text-yellow-400 font-bold">{DURATION}-minute 1:1 Strategy Call</span> with {EXPERT_NAME} from {BUSINESS_NAME} —
                  The exact framework that generated <span className="text-yellow-400 font-bold">₹30 Lac in sales</span> from just ₹30,000 ad spend.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/checkout" className="btn-hero text-center text-lg">
                    Book Now @ ₹{PRICE}
                  </Link>
                  <a href="#about" className="btn-outline-light text-center">
                    Meet {EXPERT_NAME}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Vision Board Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Strategy Sheet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Action Plan</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Only 3 slots left this week</span>
                </div>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-left" delay={200}>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl p-2">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt={EXPERT_NAME}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-4 rounded-xl shadow-glow">
                    <p className="font-display font-bold text-2xl">₹{PRICE}</p>
                    <p className="text-sm line-through text-red-600">₹{ORIGINAL_PRICE}</p>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg animate-bounce">
                  <span className="font-bold text-sm">🔥 Only 3 Left!</span>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-y border-white/10 bg-slate-900">
        <ScrollAnimateWrapper animation="fade-up">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-white/50 text-sm mb-6">Trusted by business owners across India, Dubai & Canada</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['Meta', 'Google', 'Amazon', 'Microsoft', 'Salesforce'].map((logo) => (
                <div key={logo} className="text-xl font-bold text-white/40">{logo}</div>
              ))}
            </div>
          </div>
        </ScrollAnimateWrapper>
      </section>

      {/* Pain Points - 12 Items */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Are You Stuck With <span className="text-yellow-400">Any Of These?</span>
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              These are the 12 most common problems business owners face when trying to scale
            </p>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingDown, title: "Declining Sales", desc: "Month-over-month revenue is dropping and you don't know why." },
              { icon: AlertTriangle, title: "High Customer Acquisition Cost", desc: "Spending more on ads but ROI keeps dropping with each campaign." },
              { icon: Users, title: "Poor Lead Quality", desc: "Lots of inquiries coming in, but none convert to paying customers." },
              { icon: Target, title: "Inconsistent Revenue", desc: "Revenue roller-coaster every month. No predictable income system." },
              { icon: Shield, title: "Poor Customer Retention", desc: "One-time buyers only. No repeat revenue, referrals, or loyalty." },
              { icon: Zap, title: "Ineffective Marketing", desc: "Doing everything — Meta, Google, content — but nothing works." },
              { icon: Brain, title: "Lack of Clarity", desc: "Dozens of ideas but no clear direction or prioritized action plan." },
              { icon: Wallet, title: "Cash Flow Problems", desc: "Revenue looks good but profit margins are shrinking fast." },
              { icon: BarChart3, title: "No Tracking Systems", desc: "Flying blind. No data on what's working vs what's wasting money." },
              { icon: Building2, title: "Scaling Challenges", desc: "Stuck at same revenue level for months or years. Can't break through." },
              { icon: Package, title: "Product-Market Fit Issues", desc: "Not sure if you're selling the right thing to the right people." },
              { icon: Megaphone, title: "Weak Brand Positioning", desc: "Lost in a sea of competitors. Customers see you as a commodity." },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-slate-900 border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-colors">
                  <item.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - 12 Items */}
      <section id="benefits" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              What You'll Get From This <span className="text-yellow-400">{DURATION}-Minute Call</span>
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              More than just advice — get a complete action plan you can implement immediately
            </p>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Vision Board", desc: "Clear 90-day roadmap with specific milestones and metrics" },
              { title: "Strategy Sheet", desc: "Your complete marketing blueprint customized for your business" },
              { title: "Deep Market Research", desc: "Understand your real competition and positioning gaps" },
              { title: "Offer Engineering", desc: "Package and price your product to sell itself" },
              { title: "Traffic Strategy", desc: "Exact playbook for finding your ideal customers online" },
              { title: "Automation Setup", desc: "WhatsApp + Email sequences that convert on autopilot" },
              { title: "Sales Funnel Design", desc: "Step-by-step buyer journey from first touch to purchase" },
              { title: "Content Calendar", desc: "30 days of high-converting content ideas and templates" },
              { title: "Lead Magnet Strategy", desc: "Free offers that attract qualified leads, not tire-kickers" },
              { title: "Conversion Optimization", desc: "Fix the leaks in your funnel and double conversion rates" },
              { title: "Retention System", desc: "Turn one-time buyers into repeat customers and advocates" },
              { title: "Tracking Dashboard", desc: "Simple metrics to track weekly so you stay on target" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 50}>
                <div className="flex items-start gap-4 bg-slate-950 rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-colors">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              This Call Is <span className="text-yellow-400">Perfect For You</span> If...
            </h2>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimateWrapper animation="fade-right">
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl text-green-400 mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6" /> This Is For You If
                </h3>
                <ul className="space-y-4">
                  {[
                    "Business Owner or Entrepreneur",
                    "CEO/Founder with decision power",
                    "Sales Director looking to scale",
                    "Agency Owner wanting systems",
                    "Ready to invest in growth",
                    "Can implement within 30 days"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <span className="text-green-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-left">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl text-red-400 mb-6 flex items-center gap-2">
                  NOT For You If
                </h3>
                <ul className="space-y-4">
                  {[
                    "Just looking for free information",
                    "Not ready to take action",
                    "Expecting overnight results",
                    "Unwilling to invest in marketing",
                    "Looking for cheapest option",
                    "Can't commit time for implementation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <span className="text-red-400">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Real <span className="text-yellow-400">Results</span> From Our Clients
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              See how businesses transformed after implementing our strategies
            </p>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                business: "E-commerce Store Owner",
                result: "3x Revenue in 90 Days",
                desc: "From ₹2L to ₹6L monthly revenue. Fixed their ad targeting and funnel.",
                metric: "₹6L+/month"
              },
              {
                name: "Priya Patel",
                business: "Coaching Business",
                result: "10x ROAS on Ads",
                desc: "Was spending ₹50K with no returns. Now generates ₹5L from same budget.",
                metric: "10x ROAS"
              },
              {
                name: "Amit Kumar",
                business: "SaaS Startup",
                result: "Reduced CAC by 60%",
                desc: "Cut customer acquisition cost from ₹2,000 to ₹800 per customer.",
                metric: "₹800 CAC"
              },
              {
                name: "Sneha Gupta",
                business: "Consulting Firm",
                result: "Booked Solid for 3 Months",
                desc: "Complete calendar overhaul. Now has 3-month waiting list.",
                metric: "Fully Booked"
              },
              {
                name: "Vikram Rao",
                business: "Real Estate Agency",
                result: "50+ Qualified Leads/Month",
                desc: "From 2-3 random inquiries to 50+ pre-qualified leads monthly.",
                metric: "50+ Leads"
              },
              {
                name: "Neha Malhotra",
                business: "Fitness Studio",
                result: "80% Retention Rate",
                desc: "Built membership system with 80% month-over-month retention.",
                metric: "80% Retention"
              }
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-slate-950 rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold">{item.name}</h3>
                      <p className="text-sm text-white/60">{item.business}</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-3 mb-4">
                    <p className="text-green-400 font-bold text-center">{item.result}</p>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                  <div className="text-center">
                    <span className="inline-block bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm font-semibold">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* About Expert */}
      <section id="about" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimateWrapper animation="fade-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt={EXPERT_NAME}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-xl">
                  <p className="font-display font-bold text-3xl">10+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-left">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                  <span className="text-yellow-400 text-sm font-medium">Your Strategy Consultant</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Meet <span className="text-yellow-400">{EXPERT_NAME}</span>
                </h2>

                <p className="text-white/80 leading-relaxed">
                  Co-founder of {BUSINESS_NAME} with {CO_EXPERT}. I've helped 500+ businesses
                  transform their marketing and generate consistent revenue growth.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="bg-slate-900 rounded-xl p-6 border border-white/10">
                    <p className="font-display font-bold text-3xl text-yellow-400">₹100Cr+</p>
                    <p className="text-white/60">Revenue Generated</p>
                  </div>
                  <div className="bg-slate-900 rounded-xl p-6 border border-white/10">
                    <p className="font-display font-bold text-3xl text-yellow-400">500+</p>
                    <p className="text-white/60">Businesses Helped</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm">
                    <span className="text-yellow-400 font-bold">500+</span> happy clients
                  </p>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Call Flow */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What Happens On The <span className="text-yellow-400">Call?</span>
            </h2>
          </ScrollAnimateWrapper>

          <div className="max-w-3xl mx-auto">
            {[
              { time: "0-5 min", title: "Problem Diagnosis", desc: "We identify your biggest marketing bottleneck" },
              { time: "5-15 min", title: "Strategy Session", desc: "I share the exact framework for your situation" },
              { time: "15-30 min", title: "Custom Roadmap", desc: "We build your personalized 90-day action plan" },
              { time: "30-40 min", title: "Q&A", desc: "Ask anything about implementation" },
              { time: "40-45 min", title: "Next Steps", desc: "Clear action items and resource recommendations" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-right" delay={index * 100}>
                <div className="flex gap-6 mb-8 relative">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-yellow-400 font-bold">{item.time}</span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 rounded-full bg-yellow-400" />
                    {index < 4 && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-white/20" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              What Business Owners <span className="text-yellow-400">Say</span>
            </h2>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "E-commerce Owner", text: "The ROI from this single call was incredible. Umesh identified issues I'd been missing for months." },
              { name: "Rahul Patel", role: "Agency Founder", text: "Finally someone who gets it. The strategy sheet alone was worth 10x what I paid." },
              { name: "Amit Kumar", role: "SaaS Founder", text: "From confused to clear in 45 minutes. Booked 3 more calls for my team." },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-slate-900 rounded-2xl p-8 border border-white/10">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed">"{item.text}"</p>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-white/60 text-sm">{item.role}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
          </ScrollAnimateWrapper>

          <div className="space-y-4">
            {[
              { q: "Is this really a 1:1 call or a group session?", a: "100% personalized 1:1 call. Just you and me discussing YOUR specific business challenges." },
              { q: "What if I don't see value from the call?", a: "7-day money-back guarantee. If you don't find it valuable, email me for a full refund." },
              { q: "How soon can we schedule?", a: "Usually within 2-3 business days. You'll get a calendar link immediately after booking." },
              { q: "Do you work with any industry?", a: "I specialize in service businesses, coaching/consulting, SaaS, and e-commerce." },
              { q: "What's your success rate?", a: "Clients who implement see an average 3x ROAS within 90 days." },
              { q: "Can I record the call?", a: "Yes, absolutely. I encourage you to record for your reference." },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-right" delay={index * 100}>
                <details className="group bg-slate-950 rounded-xl border border-white/10">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown className="w-5 h-5 text-yellow-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-white/60">
                    {item.a}
                  </div>
                </details>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book-call" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-yellow-400/30">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/60 mb-6">
                  Book your {DURATION}-minute strategy call now. Only ₹{PRICE} for a limited time.
                </p>
                <CountdownTimer hours={24} />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl">What's Included:</h3>
                  <ul className="space-y-3">
                    {[
                      `${DURATION}-min 1:1 Strategy Call`,
                      "Vision Board (PDF)",
                      "Strategy Sheet",
                      "30-Day Action Plan",
                      "7-Day Email Support"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <Check className="w-5 h-5 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-6">
                  <p className="text-white/60 line-through text-xl mb-2">₹{ORIGINAL_PRICE}</p>
                  <p className="font-display font-bold text-5xl text-yellow-400 mb-4">₹{PRICE}</p>
                  <p className="text-green-400 text-sm mb-6">Save ₹{ORIGINAL_PRICE - PRICE} today</p>
                  <Link to="/checkout" className="btn-hero w-full text-center">
                    Book My Call Now
                  </Link>
                  <p className="text-white/40 text-xs mt-4 text-center">
                    7-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Bottom Links Bar (replaces footer) */}
      <div className="bg-slate-900 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">G</span>
              </div>
              <span className="font-display font-bold">{BUSINESS_NAME}</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-white/60 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white/60 hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <Link to="/refund-policy" className="text-white/60 hover:text-yellow-400 transition-colors">Refund Policy</Link>
            </div>
            <p className="text-white/40 text-sm">© 2026 {BUSINESS_NAME}. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Floating Elements - WhatsApp removed */}
      <StickyMobileCTA />
      <OfferPopup />
    </div>
  );
}
