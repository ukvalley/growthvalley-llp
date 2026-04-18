import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';

const tickerItems = [
  { icon: TrendingUp, text: "500+ Businesses Transformed" },
  { icon: Users, text: "₹100Cr+ Revenue Generated for Clients" },
  { icon: Briefcase, text: "10+ Years Industry Experience" },
  { icon: Award, text: "Featured in Top Business Publications" },
  { icon: TrendingUp, text: "Proven ROI-Focused Strategies" },
  { icon: Users, text: "Personalized 1:1 Attention" },
];

export function ScrollingTicker() {
  return (
    <div className="bg-slate-900 py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-8 text-yellow-400"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-semibold text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
