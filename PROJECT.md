# Growthvalley LLP - Project Documentation

## Quick Reference
- **Business**: Growthvalley LLP
- **Expert**: Umesh Khivasara (Co-founder: Mohit Dhadiwal)
- **Product**: 1:1 Strategy Call (45 minutes)
- **Price**: ₹4,999 (Original: ₹15,000)
- **Tech Stack**: React + Vite + TypeScript + Tailwind CSS v4
- **Deployed**: https://ukvalley.github.io/growthvalley-llp/

## File Structure
```
src/
├── pages/
│   ├── Index.tsx (Main landing - 24 sections, 7 CTAs)
│   ├── Checkout.tsx (Razorpay payment)
│   ├── ThankYou.tsx (Time slot picker)
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── RefundPolicy.tsx
├── components/
│   ├── ScrollAnimateWrapper.tsx (Animation wrapper)
│   ├── CountdownTimer.tsx (24hr countdown)
│   ├── ScrollProgressBar.tsx
│   ├── ScrollingTicker.tsx
│   ├── SocialProofNotification.tsx
│   ├── OfferPopup.tsx
│   ├── StickyMobileCTA.tsx (Mobile bottom bar)
│   └── WhatsAppButton.tsx (Currently unused)
├── utils/
│   ├── razorpay.ts (Payment integration)
│   └── loadScript.ts
└── App.tsx (Router with basename)
```

## Landing Page Sections (Index.tsx)
1. Hero (Full viewport, CTA box)
2. Client Logos
3. **CTA #1** - Urgency
4. Pain Points (12 cards)
5. **CTA #2** - Guarantee
6. Solutions/Benefits (12 cards)
7. **CTA #3** - Bonus
8. Target Audience (Ideal vs Not Fit)
9. Case Studies (6 results)
10. **CTA #4** - Urgency
11. About Expert
12. Call Flow Timeline
13. **CTA #5** - Guarantee
14. Testimonials (3 cards)
15. FAQ (6 accordion items)
16. **CTA #6** - Bonus
17. Final Booking Section
18. Bottom Links Bar

## CTA Variants Used
- **Urgency**: Countdown timer, "23 booked in 24h", price increase warning
- **Guarantee**: 7-day refund, 500+ client avatars, trust badges
- **Bonus**: ₹15,997 value (Vision Board Pro, Swipe File, Community)
- **Simple**: Standard booking prompt

## Key Constants
```typescript
const BUSINESS_NAME = "Growthvalley LLP";
const EXPERT_NAME = "Umesh Khivasara";
const CO_EXPERT = "Mohit Dhadiwal";
const DURATION = 45;
const PRICE = 4999;
const ORIGINAL_PRICE = 15000;
```

## Mobile Optimizations Applied
- Responsive typography (text-xl → md:text-4xl)
- Touch targets min 44px
- Single column grids on mobile
- Full-width CTAs on mobile
- Optimized images with lazy loading
- Safe area for notched phones
- Reduced padding on mobile

## GitHub Pages Setup
- Base path: `/growthvalley-llp/`
- Router basename: `/growthvalley-llp`
- 404.html for SPA routing
- Deploy script: `npm run deploy` (gh-pages)

## Environment Variables
```
VITE_RAZORPAY_KEY_ID=your_key_here
```

## Last Updated
2026-04-18 - Mobile optimization complete
