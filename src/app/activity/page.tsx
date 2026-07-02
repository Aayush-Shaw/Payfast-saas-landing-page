import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import { Activity, TrendingUp, ArrowUpRight, ArrowDownLeft, Clock, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Activity — Payfast",
  description: "Track your financial activity in real-time with detailed transaction history and insights.",
};

const recentTransactions = [
  { type: "out" as const, label: "Transfer to Alice Cooper", amount: "$2,450.00", date: "Jul 1, 2026 · 2:30 PM", category: "Transfer" },
  { type: "in" as const, label: "Payment from Acme Corp", amount: "$12,800.00", date: "Jul 1, 2026 · 11:15 AM", category: "Invoice" },
  { type: "out" as const, label: "Subscription — Figma", amount: "$15.00", date: "Jun 30, 2026 · 9:00 AM", category: "Software" },
  { type: "in" as const, label: "Refund — Amazon", amount: "$89.99", date: "Jun 29, 2026 · 4:22 PM", category: "Refund" },
  { type: "out" as const, label: "Wire transfer — Global Inc", amount: "$5,200.00", date: "Jun 28, 2026 · 1:45 PM", category: "Transfer" },
  { type: "in" as const, label: "Interest payment", amount: "$342.50", date: "Jun 28, 2026 · 12:00 AM", category: "Interest" },
];

export default function ActivityPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Badge variant="lime" className="mb-5">Activity</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Transaction Activity
          </h1>
          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-12">
            View and filter your complete transaction history. Every transfer,
            payment, and refund at your fingertips with real-time updates.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-10">
            {[
              { icon: TrendingUp, label: "Total Income", value: "$48,250.00", change: "+12.5%" },
              { icon: ArrowUpRight, label: "Total Spent", value: "$21,340.00", change: "-3.2%" },
              { icon: Activity, label: "Transactions", value: "284", change: "+18%" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <IconBadge size="sm"><stat.icon size={16} /></IconBadge>
                  <span className="text-xs text-lime font-medium">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-1">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
            <div className="flex items-center gap-2 text-white/40">
              <Filter size={16} />
              <span className="text-sm">Filter</span>
            </div>
          </div>

          {/* Transaction List */}
          <div className="space-y-2">
            {recentTransactions.map((tx) => (
              <GlassCard key={tx.label + tx.date} className="flex items-center justify-between p-4 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tx.type === "in" ? "bg-lime/10 text-lime" : "bg-white/5 text-white/40"}`}>
                    {tx.type === "in" ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{tx.label}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Clock size={10} className="text-white/30" />
                      <span className="text-xs text-white/30">{tx.date}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${tx.type === "in" ? "text-lime" : "text-white/70"}`}>
                    {tx.type === "in" ? "+" : "-"}{tx.amount}
                  </p>
                  <span className="text-xs text-white/30">{tx.category}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
