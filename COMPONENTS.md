# Component Reference

## Reusable Components

### CTASection (Index.tsx)
```typescript
interface CTASectionProps {
  variant?: 'urgency' | 'guarantee' | 'bonus' | 'simple';
  title?: string;
  subtitle?: string;
}
```
- **urgency**: Red gradient, countdown, "23 booked" hook
- **guarantee**: Green gradient, 500+ clients, refund tags
- **bonus**: Yellow gradient, 3 bonus cards worth ₹15,997
- **simple**: Standard dark theme

### ScrollAnimateWrapper
- Props: `children`, `className`, `delay`, `direction`, `animation`
- Animations: fade-up, fade-left, fade-right
- Uses IntersectionObserver for scroll triggers

### CountdownTimer
- Props: `hours` (default 24)
- Shows: Hours, Minutes, Seconds
- Red styling with pulse animation

## UI Components

### Buttons
- `btn-hero`: Yellow primary CTA, full-width mobile
- `btn-outline-light`: Transparent with white border

### Cards
- Pain Point: Red border, icon + title + desc
- Solution: Yellow checkmark, title + desc
- Case Study: Avatar, result badge, metric pill
- Testimonial: Stars, quote, author

## Icons Used (lucide-react)
```
Check, ChevronDown, Users, Zap, Target, TrendingUp,
Shield, AlertTriangle, Sparkles, Star, TrendingDown, Brain, Wallet,
BarChart3, Building2, Package, Megaphone, Gift, ArrowRight, Clock,
Flame, BadgeCheck, Medal, Crown
```

## Responsive Breakpoints
- Mobile: < 640px (default)
- Tablet: sm: (640px)
- Desktop: md: (768px), lg: (1024px), xl: (1280px)

## Animation Classes
```css
animate-fade-in-up
animate-float
animate-pulse-glow
animate-bounce
animation-delay-200
animation-delay-400
animation-delay-600
```
