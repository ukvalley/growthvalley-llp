import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Check, ChevronDown, Users, Zap, Target, TrendingUp,
  Shield, AlertTriangle, Sparkles, Star, TrendingDown, Brain, Wallet,
  BarChart3, Building2, Package, Megaphone, Gift, ArrowRight, Clock,
  Flame, BadgeCheck, Medal, Crown, Zap as ZapIcon
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

// Mobile-Optimized CTA Component
interface CTASectionProps {
  variant?: 'urgency' | 'guarantee' | 'bonus' | 'simple';
  title?: string;
  subtitle?: string;
}

function CTASection({ variant = 'simple', title, subtitle }: CTASectionProps) {
  const variants = {
    urgency: {
      bg: 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/50',
      icon: Clock,
      iconColor: 'text-red-400',
      badge: '⏰ LIMITED TIME',
      badgeColor: 'bg-red-500',
      title: title || "Don't Miss Out!",
      subtitle: subtitle || `Only ₹${PRICE} for next 24h. Then ₹${ORIGINAL_PRICE}`,
      urgencyText: '🔥 23 booked in 24h',
      showCountdown: true
    },
    guarantee: {
      bg: 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/50',
      icon: BadgeCheck,
      iconColor: 'text-green-400',
      badge: '✅ RISK-FREE',
      badgeColor: 'bg-green-500',
      title: title || "100% Money-Back Guarantee",
      subtitle: subtitle || "Don't love it? Full refund in 7 days. No questions.",
      urgencyText: '⏰ Offer expires in 8h 47m',
      showCountdown: true
    },
    bonus: {
      bg: 'bg-gradient-to-r from-yellow-600/20 to-amber-600/20 border-yellow-500/50',
      icon: Gift,
      iconColor: 'text-yellow-400',
      badge: '🎁 FREE BONUSES',
      badgeColor: 'bg-yellow-500',
      title: title || `₹15,997 in FREE Bonuses!`,
      subtitle: subtitle || "3 exclusive resources FREE when you book today",
      urgencyText: '⏰ Expires at midnight tonight',
      showCountdown: true
    },
    simple: {
      bg: 'bg-slate-900 border-yellow-400/30',
      icon: ArrowRight,
      iconColor: 'text-yellow-400',
      badge: 'BOOK NOW',
      badgeColor: 'bg-yellow-500',
      title: title || `Book Your ${DURATION}-Min Call`,
      subtitle: subtitle || `₹${PRICE} (Was ₹${ORIGINAL_PRICE})`,
      urgencyText: '⏰ Price increases soon',
      showCountdown: true
    }
  };

  const v = variants[variant];
  const Icon = v.icon;

  // Live countdown hook
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 47, seconds: 32 });

  useEffect(() => {
    if (!v.showCountdown) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [v.showCountdown]);

  return (
    <ScrollAnimateWrapper animation="fade-up">
      <div className={`${v.bg} border-2 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 my-8 md:my-12`}>
        {/* Mobile: Stack vertically, Desktop: Row */}
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-6 mb-4 md:mb-6">
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${v.badgeColor}/20 flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-6 h-6 md:w-8 md:h-8 ${v.iconColor}`} />
          </div>
          <div className="text-center md:text-left">
            <span className={`inline-block ${v.badgeColor} text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full mb-2`}>
              {v.badge}
            </span>
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold">{v.title}</h3>
          </div>
        </div>

        {variant === 'bonus' && (
          <div className="grid gap-3 md:grid-cols-3 md:gap-4 mb-4 md:mb-6">
            {[
              { title: "Vision Board Pro", value: "₹4,997", desc: "90-day roadmap" },
              { title: "Swipe File Bundle", value: "₹5,997", desc: "50+ templates" },
              { title: "Private Community", value: "₹5,003", desc: "30-day access" }
            ].map((bonus, i) => (
              <div key={i} className="bg-black/30 rounded-lg md:rounded-xl p-3 md:p-4 border border-white/10">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                  <h4 className="font-bold text-sm md:text-base text-yellow-400">{bonus.title}</h4>
                  <span className="text-green-400 text-xs md:text-sm font-bold">{bonus.value}</span>
                </div>
                <p className="text-white/60 text-xs md:text-sm">{bonus.desc}</p>
              </div>
            ))}
          </div>
        )}

        {variant === 'guarantee' && (
          <div className="bg-black/30 rounded-lg md:rounded-xl p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] md:text-xs font-bold">
                    {i === 4 ? '+500' : ''}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm md:text-base">500+ Trust Us</p>
                <p className="text-white/60 text-xs md:text-sm">Join them risk-free</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3">
              {['100% Refund', '7-Day Guarantee', 'No Questions'].map((tag, i) => (
                <span key={i} className="bg-green-500/20 text-green-400 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="text-white/80 text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-center md:text-left">{v.subtitle}</p>

        {/* Countdown Timer - All Variants */}
        {v.showCountdown && (
          <div className="mb-4 md:mb-6 bg-black/30 rounded-lg md:rounded-xl p-3 md:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm text-white/60">Limited time offer ends in:</span>
              <span className="text-green-400 font-bold text-xs md:text-sm">Save ₹{ORIGINAL_PRICE - PRICE}</span>
            </div>
            <div className="flex gap-2 md:gap-4 text-center">
              {[
                { value: timeLeft.hours.toString().padStart(2, '0'), label: 'Hours' },
                { value: timeLeft.minutes.toString().padStart(2, '0'), label: 'Mins' },
                { value: timeLeft.seconds.toString().padStart(2, '0'), label: 'Secs' }
              ].map((time, i) => (
                <div key={i} className="flex-1 bg-slate-900 rounded-md md:rounded-lg p-2 md:p-3">
                  <div className="text-lg md:text-2xl font-bold text-red-400">{time.value}</div>
                  <div className="text-[10px] md:text-xs text-white/60">{time.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile: Stack vertically, Desktop: Row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Link to="/checkout" className="btn-hero text-sm md:text-base lg:text-lg md:px-8 lg:px-10">
            {variant === 'bonus' ? 'Get Free Bonuses →' : 'Book Strategy Call →'}
          </Link>
          <p className="text-red-400 font-semibold text-xs md:text-sm text-center md:text-left animate-pulse">{v.urgencyText}</p>
        </div>
      </div>
    </ScrollAnimateWrapper>
  );
}

export default function Index() {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Helmet>
        <title>1:1 Strategy Call with {EXPERT_NAME} | {BUSINESS_NAME}</title>
        <meta name="description" content={`Book a ${DURATION}-minute strategy call. Transform your marketing, generate 3x more leads. Only ₹${PRICE}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://growthvalley.com/" />
      </Helmet>

      <ScrollProgressBar />
      <ScrollingTicker />
      {showNotification && <SocialProofNotification />}

      {/* HERO SECTION - Mobile: Full screen text only | Desktop: Text + Image side by side */}
      <section className="relative min-h-[100svh] md:min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60')] opacity-10 bg-cover bg-center" />

        <div className="relative flex-1 flex flex-col justify-start md:justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8 md:py-20">
          {/* MOBILE: Full screen text content | DESKTOP: Side by side with image */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">

            {/* TEXT CONTENT - Full screen on mobile */}
            <ScrollAnimateWrapper animation="fade-up" className="w-full">
              <div className="flex flex-col justify-start md:justify-center min-h-[80vh] md:min-h-0 space-y-3 md:space-y-5 text-center lg:text-left pt-4">

                {/* Badge */}
                <div className="inline-flex items-center justify-center lg:justify-start">
                  <div className="flex items-center px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                    <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 text-sm font-bold">Limited Slots</span>
                  </div>
                </div>

                {/* HEADLINE - BIG & BOLD on mobile */}
                <h1 className="font-display text-[2.25rem] leading-[1.1] font-black sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Your Product is <span className="text-yellow-400">Good</span>... <br className="hidden sm:block" />
                  So Why Isn't It <span className="text-yellow-400">Selling?</span>
                </h1>

                {/* SUBHEADLINE - Larger on mobile */}
                <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  Get a <span className="text-yellow-400 font-bold">{DURATION}-min Strategy Call</span> with {EXPERT_NAME} —
                  Framework that generated <span className="text-yellow-400 font-bold">₹30L in sales</span> from ₹30k ad spend.
                </p>

                {/* CTA BOX - Prominent on mobile */}
                <div className="bg-white/5 border-2 border-yellow-400/40 rounded-2xl p-5 md:p-6 mt-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Flame className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold text-sm uppercase tracking-wide">Only 3 spots left this week</span>
                  </div>

                  <Link to="/checkout" className="btn-hero text-base font-bold py-4 shadow-lg shadow-yellow-400/20">
                    Book Now @ ₹{PRICE} →
                  </Link>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4 text-sm font-medium">
                    <span className="flex items-center gap-1.5 text-green-400">
                      <Shield className="w-4 h-4" /> 7-Day Guarantee
                    </span>
                    <span className="flex items-center gap-1.5 text-yellow-400">
                      <Gift className="w-4 h-4" /> Free Bonuses
                    </span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex items-center justify-center lg:justify-start gap-5 pt-2 text-sm text-white/70 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Vision Board</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Strategy Sheet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Action Plan</span>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>

            {/* DESKTOP ONLY: Image beside text */}
            <div className="hidden lg:block">
              <ScrollAnimateWrapper animation="fade-left" delay={200}>
                <div className="relative w-full">
                  <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl p-2">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                      alt={EXPERT_NAME}
                      className="w-full rounded-2xl shadow-2xl"
                      loading="eager"
                    />
                    {/* Price badge */}
                    <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-4 rounded-xl shadow-glow">
                      <p className="font-display font-bold text-2xl">₹{PRICE}</p>
                      <p className="text-sm line-through text-red-600">₹{ORIGINAL_PRICE}</p>
                    </div>
                  </div>
                  {/* Urgency badge */}
                  <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg font-bold animate-bounce">
                    🔥 Only 3 Left!
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE ONLY: Photo section that scrolls after hero */}
      <section className="lg:hidden relative py-12 bg-slate-900">
        <div className="max-w-md mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl p-1.5">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt={EXPERT_NAME}
                  className="w-full rounded-xl shadow-2xl"
                  loading="lazy"
                />
                {/* Price badge */}
                <div className="absolute -bottom-3 -left-3 bg-yellow-400 text-black p-3 rounded-lg shadow-glow">
                  <p className="font-display font-bold text-xl">₹{PRICE}</p>
                  <p className="text-xs line-through text-red-600">₹{ORIGINAL_PRICE}</p>
                </div>
              </div>
              {/* Urgency badge */}
              <div className="absolute -top-2 -right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg text-xs font-bold animate-bounce">
                🔥 Only 3 Left!
              </div>
            </div>

            {/* Caption below image */}
            <div className="text-center mt-8">
              <p className="text-lg font-bold">{EXPERT_NAME}</p>
              <p className="text-white/60 text-sm">Co-founder, {BUSINESS_NAME}</p>
              <div className="flex justify-center gap-6 mt-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-yellow-400">10+</p>
                  <p className="text-xs text-white/60">Years Exp.</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-yellow-400">500+</p>
                  <p className="text-xs text-white/60">Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-yellow-400">₹100Cr+</p>
                  <p className="text-xs text-white/60">Generated</p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-4 md:py-8 border-y border-white/10 bg-slate-900">
        <ScrollAnimateWrapper animation="fade-up">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
              {/* Trust Seals */}
              {[
                { icon: Shield, text: "Razorpay Secure" },
                { icon: BadgeCheck, text: "SSL Encrypted" },
                { icon: Medal, text: "7-Day Guarantee" },
                { icon: Star, text: "500+ Reviews" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5 md:gap-2 text-white/60 text-xs md:text-sm">
                  <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimateWrapper>
      </section>

      {/* Media Mentions */}
      <section className="py-4 md:py-6 bg-slate-950 border-b border-white/10">
        <ScrollAnimateWrapper animation="fade-up">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-white/40 text-[10px] md:text-xs mb-2 md:mb-3 uppercase tracking-wider">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 opacity-40">
              {['Entrepreneur India', 'Business Today', 'YourStory', 'Inc42'].map((logo) => (
                <div key={logo} className="text-xs md:text-sm font-bold text-white/50">{logo}</div>
              ))}
            </div>
          </div>
        </ScrollAnimateWrapper>
      </section>

      {/* CTA #2 */}
      <section className="py-6 md:py-8 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <CTASection variant="urgency" />
        </div>
      </section>

      {/* Pain Points - 6 on mobile, 12 on desktop */}
      <section className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">
              Are You Stuck With <span className="text-yellow-400">Any Of These?</span>
            </h2>
            <p className="text-center text-white/60 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              12 common problems business owners face when trying to scale
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { icon: TrendingDown, title: "Declining Sales", desc: "Revenue dropping month over month" },
              { icon: AlertTriangle, title: "High CAC", desc: "Spending more but ROI keeps dropping" },
              { icon: Users, title: "Poor Leads", desc: "Inquiries don't convert to customers" },
              { icon: Target, title: "Inconsistent Revenue", desc: "No predictable income system" },
              { icon: Shield, title: "Poor Retention", desc: "One-time buyers only" },
              { icon: Zap, title: "Ineffective Marketing", desc: "Nothing seems to work" },
              { icon: Brain, title: "No Clarity", desc: "Dozens of ideas, no direction" },
              { icon: Wallet, title: "Cash Flow Issues", desc: "Revenue up but profit shrinking" },
              { icon: BarChart3, title: "No Tracking", desc: "Flying blind, no data" },
              { icon: Building2, title: "Can't Scale", desc: "Stuck at same revenue level" },
              { icon: Package, title: "Product-Market Fit", desc: "Wrong offer to wrong people" },
              { icon: Megaphone, title: "Weak Brand", desc: "Lost in sea of competitors" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-slate-900 border border-red-500/30 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-red-500/60 transition-colors">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-red-400 mb-2 md:mb-4" />
                  <h3 className="font-display font-bold text-sm md:text-lg mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm">{item.desc}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 md:mt-16">
            <CTASection variant="guarantee" />
          </div>
        </div>
      </section>

      {/* Solutions - Mobile optimized */}
      <section id="benefits" className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">
              What You'll Get In <span className="text-yellow-400">{DURATION} Minutes</span>
            </h2>
            <p className="text-center text-white/60 text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Complete action plan you can implement immediately
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { title: "Vision Board", desc: "90-day roadmap with milestones" },
              { title: "Strategy Sheet", desc: "Your marketing blueprint" },
              { title: "Market Research", desc: "Know your competition" },
              { title: "Offer Engineering", desc: "Package to sell itself" },
              { title: "Traffic Strategy", desc: "Find ideal customers" },
              { title: "Automation Setup", desc: "WhatsApp + Email sequences" },
              { title: "Sales Funnel", desc: "Buyer journey mapped" },
              { title: "Content Calendar", desc: "30 days of ideas" },
              { title: "Lead Magnets", desc: "Attract qualified leads" },
              { title: "Conversion Opt.", desc: "Double your conversion" },
              { title: "Retention System", desc: "Repeat customers" },
              { title: "Tracking Dashboard", desc: "Stay on target" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 50}>
                <div className="flex items-start gap-3 md:gap-4 bg-slate-950 rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10 hover:border-yellow-400/50 transition-colors">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm md:text-base mb-0.5 md:mb-1">{item.title}</h3>
                    <p className="text-white/60 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 md:mt-16">
            <CTASection variant="bonus" />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
              This Is <span className="text-yellow-400">Perfect For You</span> If...
            </h2>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <ScrollAnimateWrapper animation="fade-right">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl md:rounded-2xl p-5 md:p-8">
                <h3 className="font-display font-bold text-base md:text-xl text-green-400 mb-4 md:mb-6 flex items-center gap-2">
                  <Crown className="w-5 h-5 md:w-6 md:h-6" /> This Is For You
                </h3>
                <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
                  {["Business Owner", "CEO/Founder", "Sales Director", "Agency Owner", "Ready to invest", "Can implement fast"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3 text-white/80">
                      <span className="text-green-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-left">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl md:rounded-2xl p-5 md:p-8">
                <h3 className="font-display font-bold text-base md:text-xl text-red-400 mb-4 md:mb-6">
                  NOT For You If
                </h3>
                <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
                  {["Want free info only", "Not ready to act", "Want overnight results", "Won't invest", "Want cheapest option", "Can't commit time"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3 text-white/80">
                      <span className="text-red-400">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 md:mb-4">
              Real <span className="text-yellow-400">Results</span> From Clients
            </h2>
            <p className="text-center text-white/60 text-sm md:text-base mb-8 md:mb-12 px-4">
              Businesses transformed after our call
            </p>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { name: "Rahul Sharma", business: "E-commerce", result: "3x Revenue", desc: "₹2L to ₹6L monthly", metric: "₹6L+/mo" },
              { name: "Priya Patel", business: "Coaching", result: "10x ROAS", desc: "₹50K to ₹5L from ads", metric: "10x ROAS" },
              { name: "Amit Kumar", business: "SaaS", result: "60% Lower CAC", desc: "₹2K to ₹800 per customer", metric: "₹800 CAC" },
              { name: "Sneha Gupta", business: "Consulting", result: "Fully Booked", desc: "3-month waiting list", metric: "Booked" },
              { name: "Vikram Rao", business: "Real Estate", result: "50+ Leads/mo", desc: "From 2-3 to 50+ leads", metric: "50+ Leads" },
              { name: "Neha Malhotra", business: "Fitness", result: "80% Retention", desc: "Month-over-month loyalty", metric: "80% Retain" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-slate-950 rounded-xl md:rounded-2xl p-5 md:p-8 border border-white/10 hover:border-yellow-400/50 transition-all">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm md:text-base">{item.name}</h3>
                      <p className="text-white/60 text-xs md:text-sm">{item.business}</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-md md:rounded-lg p-2 md:p-3 mb-2 md:mb-4">
                    <p className="text-green-400 font-bold text-center text-sm md:text-base">{item.result}</p>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm mb-2 md:mb-4">{item.desc}</p>
                  <div className="text-center">
                    <span className="inline-block bg-yellow-400/20 text-yellow-400 px-2.5 md:px-4 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 md:mt-16">
            <CTASection variant="urgency" title="Ready to Be Next Success Story?" />
          </div>
        </div>
      </section>

      {/* Authority Credentials Section */}
      <section className="py-8 md:py-12 bg-slate-900 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { number: "10+", label: "Years Experience", sub: "In Marketing" },
                { number: "500+", label: "Businesses Helped", sub: "Across Industries" },
                { number: "₹100Cr+", label: "Revenue Generated", sub: "For Clients" },
                { number: "4.9★", label: "Average Rating", sub: "From 500+ Reviews" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display font-bold text-xl md:text-3xl text-yellow-400">{stat.number}</p>
                  <p className="text-white font-medium text-xs md:text-sm">{stat.label}</p>
                  <p className="text-white/50 text-[10px] md:text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* About Expert */}
      <section id="about" className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimateWrapper animation="fade-right">
              <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt={EXPERT_NAME}
                  className="w-full rounded-xl md:rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-yellow-400 text-black p-3 md:p-6 rounded-lg md:rounded-xl">
                  <p className="font-display font-bold text-xl md:text-3xl">10+</p>
                  <p className="text-xs md:text-sm">Years Exp.</p>
                </div>
              </div>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-left">
              <div className="space-y-3 md:space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
                  <span className="text-yellow-400 text-xs md:text-sm font-medium">Your Consultant</span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  Meet <span className="text-yellow-400">{EXPERT_NAME}</span>
                </h2>

                <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
                  Co-founder of {BUSINESS_NAME} with {CO_EXPERT}. Helped 500+ businesses transform marketing.
                </p>

                {/* Credentials */}
                <div className="space-y-2 md:space-y-3">
                  {[
                    "Ex-Marketing Head at 3 VC-funded startups",
                    "Featured in Entrepreneur India & YourStory",
                    "Google Ads Certified Partner",
                    "Mentor at 2 Startup Accelerators",
                  ].map((cred, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                      <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
                      <span className="text-white/80 text-xs md:text-sm">{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-6 pt-4">
                  <div className="bg-slate-900 rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10">
                    <p className="font-display font-bold text-xl md:text-3xl text-yellow-400">₹100Cr+</p>
                    <p className="text-white/60 text-xs md:text-sm">Revenue Generated</p>
                  </div>
                  <div className="bg-slate-900 rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10">
                    <p className="font-display font-bold text-xl md:text-3xl text-yellow-400">500+</p>
                    <p className="text-white/60 text-xs md:text-sm">Businesses Helped</p>
                  </div>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Call Flow */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
              What Happens On <span className="text-yellow-400">The Call?</span>
            </h2>
          </ScrollAnimateWrapper>

          <div className="max-w-3xl mx-auto">
            {[
              { time: "0-5m", title: "Problem Diagnosis", desc: "Identify your biggest bottleneck" },
              { time: "5-15m", title: "Strategy Session", desc: "Framework for your situation" },
              { time: "15-30m", title: "Custom Roadmap", desc: "90-day action plan" },
              { time: "30-40m", title: "Q&A", desc: "Implementation questions" },
              { time: "40-45m", title: "Next Steps", desc: "Clear action items" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-right" delay={index * 100}>
                <div className="flex gap-3 md:gap-6 mb-6 md:mb-8 relative">
                  <div className="flex-shrink-0 w-14 md:w-24 text-right">
                    <span className="text-yellow-400 font-bold text-xs md:text-base">{item.time}</span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-400" />
                    {index < 4 && (
                      <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-0.5 h-10 md:h-16 bg-white/20" />
                    )}
                  </div>
                  <div className="flex-1 pb-2 md:pb-8">
                    <h3 className="font-display font-bold text-sm md:text-lg mb-0.5 md:mb-1">{item.title}</h3>
                    <p className="text-white/60 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-6 md:mt-8">
            <CTASection variant="guarantee" />
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-6 md:mb-8">
              <span className="inline-flex items-center px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full mb-3">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wide">Watch This</span>
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Real Results, <span className="text-yellow-400">Real Stories</span>
              </h2>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fade-up" delay={100}>
            <div className="relative bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden border border-white/10">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60')] opacity-20 bg-cover bg-center" />
                <div className="text-center z-10">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform shadow-glow">
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/80 font-medium text-sm md:text-base">Watch Client Success Story</p>
                  <p className="text-white/50 text-xs md:text-sm mt-1">2:34 min • Rahul Sharma</p>
                </div>
              </div>
              {/* Stats Bar */}
              <div className="bg-slate-950/80 backdrop-blur-sm p-3 md:p-4 flex justify-around border-t border-white/10">
                <div className="text-center">
                  <p className="text-yellow-400 font-bold text-sm md:text-lg">500+</p>
                  <p className="text-white/50 text-[10px] md:text-xs">Clients Helped</p>
                </div>
                <div className="text-center">
                  <p className="text-green-400 font-bold text-sm md:text-lg">3x</p>
                  <p className="text-white/50 text-[10px] md:text-xs">Avg. ROAS</p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-400 font-bold text-sm md:text-lg">4.9</p>
                  <p className="text-white/50 text-[10px] md:text-xs">Rating</p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Testimonials - Expanded to 9 with photos */}
      <section id="testimonials" className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-3">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-xs font-bold">4.9/5 Rating</span>
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                What They <span className="text-yellow-400">Say</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
                500+ business owners transformed their marketing
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Priya Sharma", company: "StyleMart", role: "E-commerce Owner", text: "ROI was incredible. Umesh identified issues I'd missed for months. Revenue jumped 40% in 30 days.", photo: "PS" },
              { name: "Rahul Patel", company: "GrowthWorks", role: "Agency Founder", text: "Finally someone who gets it. Strategy sheet alone worth 10x the price. Best investment this year.", photo: "RP" },
              { name: "Amit Kumar", company: "TechFlow", role: "SaaS Founder", text: "From confused to clear in 45 min. Booked 3 more calls. My CAC dropped by 60% using his framework.", photo: "AK" },
              { name: "Sneha Gupta", company: "ConsultPro", role: "Business Consultant", text: "Was skeptical at first. But the roadmap he created was gold. Now fully booked 3 months out.", photo: "SG" },
              { name: "Vikram Rao", company: "EstateMax", role: "Real Estate Broker", text: "Lead generation system is brilliant. From 2 leads/month to 50+. Never expected such results.", photo: "VR" },
              { name: "Neha Malhotra", company: "FitLife Studio", role: "Fitness Coach", text: "Client retention went from 45% to 80%. The automation sequences he recommended are magic.", photo: "NM" },
              { name: "Arjun Mehta", company: "CloudNine", role: "Tech Startup CEO", text: "Raised our seed round after implementing his positioning strategy. Game changer for us.", photo: "AM" },
              { name: "Kavita Reddy", company: "Organic Foods", role: "D2C Brand Owner", text: "My ROAS went from 1.2x to 4.5x in 60 days. The offer engineering framework is pure gold.", photo: "KR" },
              { name: "Rajesh Iyer", company: "EduLearn", role: "EdTech Founder", text: "Booked this call as a last resort. Best decision. Our student acquisition cost halved.", photo: "RI" },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 50}>
                <div className="bg-slate-950 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-yellow-400/30 transition-all">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-sm md:text-base">
                      {item.photo}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-yellow-400 text-xs">{item.company}</p>
                      <p className="text-white/50 text-[10px]">{item.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          {/* Trust Stats */}
          <ScrollAnimateWrapper animation="fade-up" delay={300}>
            <div className="mt-8 md:mt-12 bg-slate-950 rounded-xl md:rounded-2xl p-5 md:p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <p className="font-display font-bold text-xl md:text-3xl text-yellow-400">500+</p>
                  <p className="text-white/60 text-xs md:text-sm">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-xl md:text-3xl text-green-400">98%</p>
                  <p className="text-white/60 text-xs md:text-sm">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-xl md:text-3xl text-yellow-400">4.9</p>
                  <p className="text-white/60 text-xs md:text-sm">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-xl md:text-3xl text-green-400">3x</p>
                  <p className="text-white/60 text-xs md:text-sm">Avg. ROAS</p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Before/After Transformation Section */}
      <section className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-3">
                <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-xs font-bold">Proven Results</span>
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                The <span className="text-yellow-400">Before/After</span> Effect
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
                See what changes after our strategy call
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                before: "Posting daily but no engagement",
                after: "Strategic content that converts - 3x engagement",
                metric: "300%",
                label: "Engagement Boost"
              },
              {
                before: "₹50K ad spend, ₹60K revenue",
                after: "₹30K ad spend, ₹150K revenue",
                metric: "5x",
                label: "ROAS Improvement"
              },
              {
                before: "Chasing cold leads that ghost",
                after: "Qualified leads coming to you",
                metric: "80%",
                label: "Lead Quality"
              },
              {
                before: "Working 12hrs with no systems",
                after: "Automated funnel runs 24/7",
                metric: "60%",
                label: "Time Saved"
              },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-slate-900 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-center">
                    {/* Before */}
                    <div className="md:col-span-4 w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-400 text-xs font-bold uppercase">Before</span>
                      </div>
                      <p className="text-white/60 text-sm md:text-base">{item.before}</p>
                    </div>

                    {/* Arrow */}
                    <div className="md:col-span-1 flex justify-center">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 rotate-90 md:rotate-0" />
                    </div>

                    {/* After */}
                    <div className="md:col-span-4 w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-400 text-xs font-bold uppercase">After</span>
                      </div>
                      <p className="text-white font-medium text-sm md:text-base">{item.after}</p>
                    </div>

                    {/* Metric */}
                    <div className="md:col-span-3 w-full">
                      <div className="bg-slate-950 rounded-xl p-4 text-center border border-green-500/30">
                        <p className="font-display font-bold text-2xl md:text-3xl text-green-400">{item.metric}</p>
                        <p className="text-white/60 text-xs">{item.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-3">
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400 text-xs font-bold">Simple Process</span>
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                How It <span className="text-yellow-400">Works</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
                3 simple steps to transform your business
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Book Your Slot",
                desc: "Choose a time that works. Get instant calendar confirmation.",
                icon: Target,
                color: "from-yellow-400 to-yellow-600"
              },
              {
                step: "02",
                title: "Strategy Call",
                desc: "45-min deep dive. Get your custom roadmap and action plan.",
                icon: Zap,
                color: "from-yellow-400 to-orange-500"
              },
              {
                step: "03",
                title: "Implement & Win",
                desc: "Follow the plan. See results in 30 days or get money back.",
                icon: TrendingUp,
                color: "from-green-400 to-green-600"
              },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 150}>
                <div className="relative">
                  {/* Connector line - hidden on mobile */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent z-0" />
                  )}
                  <div className="bg-slate-950 rounded-xl md:rounded-2xl p-5 md:p-8 border border-white/10 hover:border-yellow-400/30 transition-all relative z-10">
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </div>
                    <span className="text-3xl md:text-4xl font-display font-bold text-white/10">{item.step}</span>
                    <h3 className="font-display font-bold text-lg md:text-xl mt-2 mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Buster Section */}
      <section className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-flex items-center px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full mb-3">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400 mr-1" />
                <span className="text-green-400 text-xs font-bold">Your Concerns Answered</span>
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                Still <span className="text-yellow-400">Unsure?</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
                Let's address your biggest concerns
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                objection: "What if I don't see value?",
                answer: "7-day money-back guarantee. No questions asked. If you don't find the call valuable, I'll refund every rupee.",
                icon: BadgeCheck
              },
              {
                objection: "Is this too expensive for me?",
                answer: "At ₹4,999, it's less than your daily coffee budget for a month. One good idea pays for itself 100x over.",
                icon: Wallet
              },
              {
                objection: "What if I'm too busy?",
                answer: "45 minutes once. The systems you'll build will save you 10+ hours every week forever. Time invested, time multiplied.",
                icon: Clock
              },
              {
                objection: "Will this work for MY industry?",
                answer: "I've helped 500+ businesses across 15+ industries. The frameworks are proven across e-commerce, SaaS, services, coaching & more.",
                icon: Target
              },
              {
                objection: "What if I can't implement?",
                answer: "You get a simple, step-by-step roadmap. Plus 7-day WhatsApp support. I'm with you until you see results.",
                icon: Check
              },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-slate-900 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-yellow-400/30 transition-all">
                  <div className="flex gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm md:text-lg text-white mb-1">{item.objection}</h3>
                      <p className="text-white/60 text-sm md:text-base">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          {/* Risk Reversal Banner */}
          <ScrollAnimateWrapper animation="fade-up" delay={300}>
            <div className="mt-6 md:mt-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl md:rounded-2xl p-5 md:p-8 text-center">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-green-400 mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg md:text-xl mb-2">100% Risk-Free Guarantee</h3>
              <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
                Try the call. Implement the strategies. If you don't see measurable improvement in 7 days,
                email me for a full refund. I'll even let you keep the bonuses. That's how confident I am.
              </p>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
              Common <span className="text-yellow-400">Questions</span>
            </h2>
          </ScrollAnimateWrapper>

          <div className="space-y-2 md:space-y-4">
            {[
              { q: "Is this really 1:1 or group?", a: "100% personalized 1:1 call with me. Just you, me, and your business challenges. No group calls, no assistants." },
              { q: "What if I don't see value?", a: "7-day money-back guarantee. Full refund, no questions asked. If the call doesn't deliver value, I don't deserve your money." },
              { q: "How soon can we schedule?", a: "Usually within 2-3 days. You'll get an instant calendar link after payment with available slots." },
              { q: "Which industries do you work with?", a: "E-commerce, SaaS, coaching/consulting, real estate, fitness, professional services, D2C brands, and more. If you sell something, I can help." },
              { q: "What's your success rate?", a: "Clients who implement see 3x ROAS within 90 days on average. The strategies work - implementation is key." },
              { q: "Can I record the call?", a: "Yes, absolutely. Record it, take notes, share with your team. You own the recording forever." },
              { q: "What do I need to prepare?", a: "Just bring your biggest marketing challenge. I'll do the heavy lifting during the call. No prep work needed." },
              { q: "How is this different from free YouTube content?", a: "Generic advice vs. custom strategy. I diagnose YOUR specific situation and give you a tailored roadmap, not one-size-fits-all tips." },
              { q: "What happens after the call?", a: "You get your Vision Board, Strategy Sheet, and 30-day Action Plan. Plus 7 days of WhatsApp support for questions." },
              { q: "Can my team join the call?", a: "Yes, up to 2 team members. Bring your marketing manager or co-founder - the more aligned, the better." },
              { q: "Do you offer implementation services?", a: "Yes, select clients get invited to work with us ongoing. But many implement successfully on their own with the roadmap." },
              { q: "Why only ₹4,999? What's the catch?", a: "No catch. I want to build trust first. Many clients hire us for larger projects after seeing results from this call." },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-right" delay={index * 100}>
                <details className="group bg-slate-950 rounded-lg md:rounded-xl border border-white/10">
                  <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer min-h-[44px] md:min-h-0">
                    <span className="font-semibold text-sm md:text-base pr-4">{item.q}</span>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 md:px-6 md:pb-6 text-white/60 text-sm md:text-base">
                    {item.a}
                  </div>
                </details>
              </ScrollAnimateWrapper>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <CTASection variant="bonus" title="Questions? Book Anyway!" subtitle="Not happy? Get refund. Nothing to lose!" />
          </div>
        </div>
      </section>

      {/* Final Booking - Mobile Optimized */}
      <section id="book-call" className="py-12 md:py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12 border border-yellow-400/30">
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 bg-red-500/20 rounded-full mb-3 md:mb-4">
                  <Flame className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-xs md:text-sm">Final Call</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
                  Ready to Transform?
                </h2>
                <p className="text-white/60 text-sm md:text-base mb-4 md:mb-6">
                  {DURATION}-min call. Only ₹{PRICE} for limited time.
                </p>
                <CountdownTimer hours={24} />
              </div>

              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="font-display font-bold text-base md:text-xl">Includes:</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      `${DURATION}-min 1:1 Call`,
                      "Vision Board (PDF)",
                      "Strategy Sheet",
                      "30-Day Action Plan",
                      "7-Day Support",
                      "₹15,997 FREE Bonuses"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 md:gap-3 text-white/80 text-sm md:text-base">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-center bg-slate-950 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <p className="text-white/60 line-through text-base md:text-xl mb-1 md:mb-2">₹{ORIGINAL_PRICE}</p>
                  <p className="font-display font-bold text-3xl md:text-5xl text-yellow-400 mb-2 md:mb-4">₹{PRICE}</p>
                  <p className="text-green-400 text-xs md:text-sm mb-4 md:mb-6">Save ₹{ORIGINAL_PRICE - PRICE}</p>
                  <Link to="/checkout" className="btn-hero w-full md:w-auto text-sm md:text-base">
                    Book My Call Now →
                  </Link>
                  <p className="text-white/40 text-[10px] md:text-xs mt-3 md:mt-4">
                    100% Money-Back Guarantee
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 md:pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/60">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                  <span>7-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/60">
                  <Medal className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  <span>500+ Clients</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/60">
                  <ZapIcon className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Bottom Links - Mobile optimized */}
      <div className="bg-slate-900 border-t border-white/10 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm md:text-base">G</span>
              </div>
              <span className="font-display font-bold text-sm md:text-base">{BUSINESS_NAME}</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
              <Link to="/privacy-policy" className="text-white/60 hover:text-yellow-400 transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="text-white/60 hover:text-yellow-400 transition-colors">Terms</Link>
              <Link to="/refund-policy" className="text-white/60 hover:text-yellow-400 transition-colors">Refund</Link>
            </div>
            <p className="text-white/40 text-xs">© 2026 {BUSINESS_NAME}</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <StickyMobileCTA />
      <OfferPopup />
    </div>
  );
}
