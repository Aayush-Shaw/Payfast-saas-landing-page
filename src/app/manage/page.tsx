import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import Button from "@/components/ui/Button";
import { CreditCard, Wallet, PieChart, Settings, Plus, MoreHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Manage — Payfast",
  description: "Manage your accounts, cards, and financial settings in one place.",
};

const accounts = [
  { name: "Primary Checking", balance: "$24,680.42", type: "Checking", icon: Wallet, status: "Active" },
  { name: "Savings Account", balance: "$68,240.00", type: "Savings", icon: PieChart, status: "Active" },
  { name: "Business Account", balance: "$142,800.00", type: "Business", icon: CreditCard, status: "Active" },
];

const cards = [
  { name: "Visa Debit ****4829", limit: "$10,000", spent: "$3,420", color: "from-lime/20 to-lime/5" },
  { name: "Mastercard ****7156", limit: "$25,000", spent: "$12,800", color: "from-white/10 to-white/5" },
  { name: "Virtual Card ****9023", limit: "$5,000", spent: "$890", color: "from-purple-500/20 to-purple-500/5" },
];

export default function ManagePage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Badge variant="lime" className="mb-5">Manage</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Account Management
          </h1>
          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-12">
            View and manage all your accounts, cards, and financial settings
            from a single unified dashboard. Full control at your fingertips.
          </p>

          {/* Accounts */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Your Accounts</h2>
            <Button size="sm" variant="secondary">
              <Plus size={14} /> Add Account
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-14">
            {accounts.map((acct) => (
              <GlassCard key={acct.name} hover className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconBadge><acct.icon size={18} /></IconBadge>
                  <span className="rounded-full bg-lime/10 px-2.5 py-1 text-xs font-medium text-lime">
                    {acct.status}
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{acct.balance}</p>
                <p className="text-sm text-white/40">{acct.name}</p>
                <p className="text-xs text-white/25 mt-1">{acct.type}</p>
              </GlassCard>
            ))}
          </div>

          {/* Cards */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Your Cards</h2>
            <Button size="sm" variant="secondary">
              <Plus size={14} /> New Card
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-14">
            {cards.map((card) => (
              <GlassCard key={card.name} hover className={`p-6 bg-gradient-to-br ${card.color}`}>
                <div className="flex items-center justify-between mb-6">
                  <CreditCard size={24} className="text-white/40" />
                  <MoreHorizontal size={18} className="text-white/30" />
                </div>
                <p className="text-sm font-medium text-white mb-4">{card.name}</p>
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span>Limit: {card.limit}</span>
                  <span>Spent: {card.spent}</span>
                </div>
                {/* Usage bar */}
                <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-lime"
                    style={{
                      width: `${(parseFloat(card.spent.replace(/[$,]/g, "")) / parseFloat(card.limit.replace(/[$,]/g, ""))) * 100}%`,
                    }}
                  />
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Quick Settings */}
          <h2 className="text-lg font-semibold text-white mb-6">Quick Settings</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { title: "Security Settings", desc: "Manage 2FA, biometrics, and password settings", icon: Settings },
              { title: "Notification Preferences", desc: "Configure push notifications and email alerts", icon: Settings },
            ].map((item) => (
              <GlassCard key={item.title} hover className="flex items-center gap-4 p-6">
                <IconBadge><item.icon size={18} /></IconBadge>
                <div>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-xs text-white/40 mt-0.5">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
