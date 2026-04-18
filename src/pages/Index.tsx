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
      urgencyText: '🔥 23 booked in 24h'
    },
    guarantee: {
      bg: 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-500/50',
      icon: BadgeCheck,
      iconColor: 'text-green-400',
      badge: '✅ RISK-FREE',
      badgeColor: 'bg-green-500',
      title: title || "100% Money-Back Guarantee",
      subtitle: subtitle || "Don't love it? Full refund in 7 days. No questions.",
      urgencyText: '⭐ 500+ happy clients'
    },
    bonus: {
      bg: 'bg-gradient-to-r from-yellow-600/20 to-amber-600/20 border-yellow-500/50',
      icon: Gift,
      iconColor: 'text-yellow-400',
      badge: '🎁 FREE BONUSES',
      badgeColor: 'bg-yellow-500',
      title: title || `₹15,997 in FREE Bonuses!`,
      subtitle: subtitle || "3 exclusive resources FREE when you book today",
      urgencyText: '🎁 Expires at midnight'
    },
    simple: {
      bg: 'bg-slate-900 border-yellow-400/30',
      icon: ArrowRight,
      iconColor: 'text-yellow-400',
      badge: 'BOOK NOW',
      badgeColor: 'bg-yellow-500',
      title: title || `Book Your ${DURATION}-Min Call`,
      subtitle: subtitle || `₹${PRICE} (Was ₹${ORIGINAL_PRICE})`,
      urgencyText: '👥 Only 3 spots left'
    }
  };

  const v = variants[variant];
  const Icon = v.icon;

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

        {/* Mobile: Stack vertically, Desktop: Row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <Link to="/checkout" className="btn-hero text-sm md:text-base lg:text-lg md:px-8 lg:px-10">
            {variant === 'bonus' ? 'Get Free Bonuses →' : 'Book Strategy Call →'}
          </Link>
          <p className="text-red-400 font-semibold text-xs md:text-sm text-center md:text-left animate-pulse">{v.urgencyText}</p>
        </div>

        {variant === 'urgency' && (
          <div className="mt-4 md:mt-6 bg-black/30 rounded-lg md:rounded-xl p-3 md:p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm text-white/60">Price increases in:</span>
              <span className="text-green-400 font-bold text-xs md:text-sm">Save ₹{ORIGINAL_PRICE - PRICE}</span>
            </div>
            <div className="flex gap-2 md:gap-4 text-center">
              {[
                { value: '08', label: 'Hours' },
                { value: '47', label: 'Mins' },
                { value: '32', label: 'Secs' }
              ].map((time, i) => (
                <div key={i} className="flex-1 bg-slate-900 rounded-md md:rounded-lg p-2 md:p-3">
                  <div className="text-lg md:text-2xl font-bold text-red-400">{time.value}</div>
                  <div className="text-[10px] md:text-xs text-white/60">{time.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
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

        <div className="relative flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
          {/* MOBILE: Full screen text content | DESKTOP: Side by side with image */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">

            {/* TEXT CONTENT - Full screen on mobile */}
            <ScrollAnimateWrapper animation="fade-up" className="w-full">
              <div className="flex flex-col justify-center min-h-[85vh] md:min-h-0 space-y-6 md:space-y-6 text-center lg:text-left">

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

      {/* Client Logos - Mobile optimized */}
      <section className="py-6 md:py-12 border-y border-white/10 bg-slate-900">
        <ScrollAnimateWrapper animation="fade-up">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-white/50 text-xs md:text-sm mb-3 md:mb-6">Trusted across India, Dubai & Canada</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-50">
              {['Meta', 'Google', 'Amazon', 'Microsoft', 'Salesforce'].map((logo) => (
                <div key={logo} className="text-sm md:text-xl font-bold text-white/40">{logo}</div>
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

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
              What They <span className="text-yellow-400">Say</span>
            </h2>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { name: "Priya Sharma", role: "E-commerce", text: "ROI was incredible. Umesh identified issues I'd missed for months." },
              { name: "Rahul Patel", role: "Agency", text: "Finally someone who gets it. Strategy sheet alone worth 10x." },
              { name: "Amit Kumar", role: "SaaS", text: "From confused to clear in 45 min. Booked 3 more calls." },
            ].map((item, index) => (
              <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-slate-900 rounded-xl md:rounded-2xl p-5 md:p-8 border border-white/10">
                  <div className="flex gap-1 mb-2 md:mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">"{item.text}"</p>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{item.name}</p>
                    <p className="text-white/60 text-xs md:text-sm">{item.role}</p>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
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
              { q: "Is this really 1:1 or group?", a: "100% personalized 1:1 call. Just you and me." },
              { q: "What if I don't see value?", a: "7-day money-back guarantee. Full refund, no questions." },
              { q: "How soon can we schedule?", a: "Usually 2-3 days. Calendar link sent immediately." },
              { q: "Which industries?", a: "Service businesses, coaching, SaaS, e-commerce." },
              { q: "Success rate?", a: "Clients see 3x ROAS within 90 days when they implement." },
              { q: "Can I record?", a: "Yes, absolutely. Record for your reference." },
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
