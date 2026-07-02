import GlassCard from "@/components/ui/GlassCard";
import { TrendingUp } from "lucide-react";

const spendingCategories = [
  { label: "Shopping", amount: "$8,545.00", color: "#C6F135", width: "45%" },
  { label: "Transport", amount: "$6,230.00", color: "#C6F135aa", width: "32%" },
  { label: "Services", amount: "$4,120.00", color: "#ffffff30", width: "23%" },
];

export default function SpendingOverviewCard() {
  return (
    <GlassCard className="p-6 sm:p-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-white/40 font-medium">Spending Overview</p>
        <span className="text-xs text-white/20">This Month</span>
      </div>

      <div className="flex items-end gap-3 mb-1">
        <p className="text-3xl font-bold text-white sm:text-4xl">$23,454.20</p>
        <span className="mb-1 flex items-center gap-1 rounded-full bg-lime/10 px-2.5 py-1 text-xs font-semibold text-lime">
          <TrendingUp size={12} />
          +14.5%
        </span>
      </div>

      <p className="text-xs text-white/30 mb-6">vs. $20,480.00 last month</p>

      {/* Progress bar */}
      <div className="flex gap-1 mb-6 h-2.5 rounded-full overflow-hidden">
        {spendingCategories.map((cat) => (
          <div
            key={cat.label}
            className="h-full rounded-full transition-all duration-500"
            style={{ width: cat.width, backgroundColor: cat.color }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {spendingCategories.map((cat) => (
          <div key={cat.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className="text-sm text-white/60">{cat.label}</span>
            </div>
            <span className="text-sm font-medium text-white/80">{cat.amount}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
