"use client";

import { cn } from "@/lib/utils";

interface PillToggleProps {
  options: [string, string];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export default function PillToggle({ options, activeIndex, onChange, className }: PillToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1",
        className
      )}
    >
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => onChange(index)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
            activeIndex === index
              ? "bg-lime text-black shadow-md"
              : "text-white/60 hover:text-white"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
