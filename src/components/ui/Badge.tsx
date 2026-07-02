import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "lime";
}

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium",
        variant === "default" && "bg-white/5 text-white/80 border border-white/10",
        variant === "lime" && "bg-lime/10 text-lime border border-lime/20",
        className
      )}
    >
      {children}
    </span>
  );
}
