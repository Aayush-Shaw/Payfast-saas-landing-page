import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/data/stats";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-300",
        stat.isHighlighted
          ? "bg-lime text-black shadow-[0_8px_40px_rgba(198,241,53,0.25)]"
          : "border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-white"
      )}
    >
      <div className="flex items-baseline gap-0.5">
        <span className={cn(
          "text-4xl font-bold sm:text-5xl",
          stat.isHighlighted ? "text-black" : "text-white"
        )}>
          {stat.value}
        </span>
        {stat.suffix && (
          <span className={cn(
            "text-xl font-bold sm:text-2xl",
            stat.isHighlighted ? "text-black/60" : "text-lime"
          )}>
            {stat.suffix}
          </span>
        )}
      </div>
      <p className={cn(
        "mt-2 text-sm leading-relaxed",
        stat.isHighlighted ? "text-black/60" : "text-white/40"
      )}>
        {stat.label}
      </p>
    </div>
  );
}
