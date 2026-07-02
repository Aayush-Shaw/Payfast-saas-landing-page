import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/lib/types/pricing";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

export default function PricingCard({ plan, isYearly }: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const period = isYearly ? "/year" : "/month";

  return (
    <GlassCard
      className={cn(
        "flex flex-col p-6 sm:p-8 transition-all duration-500",
        plan.isPopular &&
          "border-lime/30 shadow-[0_0_40px_rgba(198,241,53,0.1)] scale-[1.02]"
      )}
      glow={plan.isPopular}
    >
      {/* Plan Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
          {plan.isPopular && (
            <span className="rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold text-lime border border-lime/20">
              Popular
            </span>
          )}
        </div>
        <p className="text-sm text-white/40">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">
            ${price}
          </span>
          <span className="text-sm text-white/40">{period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <div className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              plan.isPopular ? "bg-lime/20 text-lime" : "bg-white/10 text-white/40"
            )}>
              <Check size={12} />
            </div>
            <span className="text-sm text-white/60">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.isPopular ? "primary" : "secondary"}
        className="w-full"
      >
        {plan.ctaLabel}
      </Button>
    </GlassCard>
  );
}
