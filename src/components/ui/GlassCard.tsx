import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: string;
}

export default function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  glowColor = "rgba(198,241,53,0.15)",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-4xl border border-white/8 bg-white/3 backdrop-blur-md",
        hover &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/6 hover:shadow-lg hover:shadow-black/20",
        glow && "shadow-[0_0_30px_var(--glow-color)]",
        className
      )}
      style={glow ? ({ "--glow-color": glowColor } as React.CSSProperties) : undefined}
      {...props}
    >
      {children}
    </div>
  );
}