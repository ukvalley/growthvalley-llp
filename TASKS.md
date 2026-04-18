# Common Tasks Quick Reference

## Update Pricing
Files: `Index.tsx`, `Checkout.tsx`, `ThankYou.tsx`
```typescript
const PRICE = 4999;
const ORIGINAL_PRICE = 15000;
```

## Modify CTAs
- Location: `Index.tsx` → `CTASection` component
- Variants: urgency | guarantee | bonus | simple
- Each CTA has: title, subtitle, urgencyText, badge, icon

## Add/Remove Pain Points
- Location: `Index.tsx` → Pain Points section
- Format: `{ icon: IconName, title: "...", desc: "..." }`
- Grid: 1 col mobile, 2 col tablet, 3 col desktop

## Add/Remove Solutions
- Location: `Index.tsx` → Solutions section (after Pain Points)
- Format: `{ title: "...", desc: "..." }`
- Uses Check icon automatically

## Update Case Studies
- Location: `Index.tsx` → Case Studies section
- Format: `{ name, business, result, desc, metric }`

## Change Colors
- Primary: Yellow (`#facc15`, `text-yellow-400`, `bg-yellow-400`)
- Background: Dark slate (`bg-slate-950`, `bg-slate-900`)
- Accent: Red (urgency), Green (guarantee)

## Update Expert Info
```typescript
const EXPERT_NAME = "Umesh Khivasara";
const CO_EXPERT = "Mohit Dhadiwal";
const BUSINESS_NAME = "Growthvalley LLP";
```

## Modify Sticky Mobile CTA
- File: `components/StickyMobileCTA.tsx`
- Fixed bottom bar on mobile devices

## Deploy Changes
```bash
npm run deploy
```
- Builds to `dist/`
- Pushes to `gh-pages` branch
- Live in 2-3 minutes

## Add New Section
1. Create ScrollAnimateWrapper
2. Use responsive classes (mobile-first)
3. Add CTA after section (optional)
4. Test on mobile view
