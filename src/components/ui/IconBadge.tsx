import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IconBadgeProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export default function IconBadge({ children, className, size = "md" }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-lime text-background",
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
