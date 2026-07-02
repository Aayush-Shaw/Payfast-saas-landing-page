import GlassCard from "@/components/ui/GlassCard";
import { Send, CreditCard, Wallet } from "lucide-react";

export default function TransferCard() {
  return (
    <GlassCard className="relative overflow-hidden p-6 sm:p-8 min-h-[400px]">
      {/* Dotted world map background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          {/* Generate a grid of dots to simulate world map pattern */}
          {Array.from({ length: 40 }, (_, row) =>
            Array.from({ length: 80 }, (_, col) => {
              const x = col * 10 + 5;
              const y = row * 10 + 5;
              // Simple noise-like pattern to simulate continents
              const show =
                Math.sin(x * 0.05) * Math.cos(y * 0.08) +
                  Math.sin(x * 0.03 + y * 0.02) >
                0.2;
              return show ? (
                <circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="white"
                />
              ) : null;
            })
          )}
        </svg>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 400">
        <line x1="100" y1="120" x2="300" y2="200" stroke="#C6F135" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="300" y1="200" x2="200" y2="300" stroke="#C6F135" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Floating transfer card mockup */}
      <div className="relative z-10 mt-8">
        <div className="mx-auto max-w-xs rounded-2xl border border-lime/20 bg-lime p-5 text-black shadow-[0_20px_60px_rgba(198,241,53,0.2)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide">Bank Transfer</span>
            <Send size={16} />
          </div>
          <div className="mb-3">
            <p className="text-xs opacity-60">Amount</p>
            <p className="text-2xl font-bold">$2,450.00</p>
          </div>
          <div className="flex items-center justify-between text-xs opacity-60">
            <span>To: Alex Johnson</span>
            <span>Instant</span>
          </div>
        </div>
      </div>

      {/* Floating payment provider icons */}
      <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <CreditCard size={16} className="text-white/40" />
      </div>
      <div className="absolute bottom-12 left-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <Wallet size={16} className="text-white/40" />
      </div>
      <div className="absolute top-1/3 left-10 flex h-8 w-8 items-center justify-center rounded-full border border-lime/20 bg-lime/10">
        <div className="h-3 w-3 rounded-full bg-lime/40" />
      </div>
    </GlassCard>
  );
}
