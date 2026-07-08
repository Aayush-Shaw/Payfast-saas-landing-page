import GlassCard from "@/components/ui/GlassCard";
import {
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Send,
  CreditCard,
  MoreHorizontal,
} from "lucide-react";

function DashboardNav() {
  return (
    <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-500/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-green-500/60" />
      </div>
      <div className="flex items-center gap-4">
        <div className="h-2 w-16 rounded-full bg-white/10" />
        <div className="h-2 w-12 rounded-full bg-white/10" />
        <div className="h-2 w-14 rounded-full bg-white/10" />
      </div>
      <div className="h-7 w-7 rounded-full bg-lime/20 flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-lime/40" />
      </div>
    </div>
  );
}

function GreetingBar() {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div>
        <p className="text-xs text-white/40">Welcome back</p>
        <p className="text-sm font-semibold text-white">
          Good morning, Sailor
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-4xl bg-white/5 text-white/40">
          <CreditCard size={14} />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-4xl bg-white/5 text-white/40">
          <Send size={14} />
        </div>
      </div>
    </div>
  );
}

function BalanceCard() {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-white/40 font-medium">Total Balance</p>
        <MoreHorizontal size={14} className="text-white/30" />
      </div>
      <p className="text-2xl font-bold text-white">$84,686.22</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="flex items-center gap-1 text-xs text-lime">
          <ArrowUpRight size={12} />
          +12.5%
        </span>
        <span className="text-xs text-white/30">from last month</span>
      </div>
    </GlassCard>
  );
}

function SpendingMini() {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-white/40 font-medium">Spending Overview</p>
        <MoreHorizontal size={14} className="text-white/30" />
      </div>
      <p className="text-lg font-bold text-white">$15,456.88</p>
      <div className="mt-3 flex gap-1">
        {[40, 25, 20, 15].map((w, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full"
            style={{
              width: `${w}%`,
              backgroundColor:
                i === 0
                  ? "#C6F135"
                  : i === 1
                  ? "#C6F13580"
                  : i === 2
                  ? "#ffffff30"
                  : "#ffffff15",
            }}
          />
        ))}
      </div>
    </GlassCard>
  );
}

function QuickTransfer() {
  return (
    <GlassCard className="p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-white/40 font-medium">Quick Transfer</p>
        <MoreHorizontal size={14} className="text-white/30" />
      </div>
      <div className="space-y-2">
        {[
          { name: "Alex J.", amount: "-$250.00", color: "bg-blue-400" },
          { name: "Maria S.", amount: "-$1,200.00", color: "bg-purple-400" },
          { name: "David K.", amount: "+$480.00", color: "bg-lime" },
        ].map((t) => (
          <div key={t.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`h-6 w-6 rounded-full ${t.color}/20 flex items-center justify-center`}>
                <div className={`h-3 w-3 rounded-full ${t.color}/60`} />
              </div>
              <span className="text-xs text-white/70">{t.name}</span>
            </div>
            <span className={`text-xs font-medium ${t.amount.startsWith("+") ? "text-lime" : "text-white/50"}`}>
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function TransactionRow() {
  const transactions = [
    { icon: ArrowUpRight, label: "Transfer to Alice", amount: "-$350.00", date: "Today, 2:30 PM", type: "out" as const },
    { icon: ArrowDownLeft, label: "Payment from Bob", amount: "+$1,200.00", date: "Today, 11:15 AM", type: "in" as const },
    { icon: TrendingUp, label: "Investment Return", amount: "+$89.50", date: "Yesterday", type: "in" as const },
  ];

  return (
    <div className="mt-2 space-y-1 px-5">
      {transactions.map((tx) => (
        <div key={tx.label} className="flex items-center justify-between rounded-4xl bg-white/2 px-3 py-2.5">
          <div className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-4xl ${tx.type === "in" ? "bg-lime/10 text-lime" : "bg-white/5 text-white/40"}`}>
              <tx.icon size={14} />
            </div>
            <div>
              <p className="text-xs font-medium text-white/80">{tx.label}</p>
              <p className="text-[10px] text-white/30">{tx.date}</p>
            </div>
          </div>
          <p className={`text-xs font-semibold ${tx.type === "in" ? "text-lime" : "text-white/50"}`}>
            {tx.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function HeroDashboardPreview() {
  return (
    <div className="relative mt-10 w-full">
      <GlassCard className="overflow-hidden border-white/8 shadow-2xl shadow-black/40">
        <DashboardNav />
        <GreetingBar />
        <div className="grid grid-cols-1 gap-3 px-5 sm:grid-cols-3">
          <BalanceCard />
          <SpendingMini />
          <QuickTransfer />
        </div>
        <TransactionRow />
        <div className="h-10" />
      </GlassCard>

      {/* Gradient fade-out overlay — dashboard sinks into background */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-b-4xl"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 10%, #0A0A0A 100%)",
        }}
      />
    </div>
  );
}
