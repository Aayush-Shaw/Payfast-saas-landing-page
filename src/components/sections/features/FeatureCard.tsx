import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Feature } from "@/lib/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[feature.icon];

  return (
    <GlassCard hover className="flex flex-col items-center text-center p-6 sm:p-8 group">
      <IconBadge size="lg" className="mb-5 transition-transform duration-300 group-hover:scale-110">
        {IconComponent && <IconComponent size={22} />}
      </IconBadge>
      <h3 className="mb-1 text-base font-semibold text-white sm:text-lg">
        {feature.title}
      </h3>
      <p className="text-sm leading-4 text-white/45">
        {feature.description}
      </p>
    </GlassCard>
  );
}
