import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import Button from "@/components/ui/Button";
import { Gift, Star, Zap, Trophy, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Program — Payfast",
  description: "Explore Payfast rewards programs, referrals, and loyalty benefits.",
};

const programs = [
  {
    icon: Star,
    title: "Loyalty Rewards",
    description: "Earn points on every transaction and redeem them for cashback, gift cards, or exclusive perks.",
    points: "2,450 pts",
    status: "Gold Tier",
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Invite friends and earn $25 for each successful referral. No limits on how many you can refer.",
    points: "$175 earned",
    status: "7 referrals",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Get exclusive early access to new features, beta programs, and limited-time offers before anyone else.",
    points: "Active",
    status: "Member",
  },
  {
    icon: Trophy,
    title: "Cashback Plus",
    description: "Earn up to 5% cashback on select categories including dining, travel, and online shopping.",
    points: "$892.40",
    status: "Premium",
  },
];

export default function ProgramPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Badge variant="lime" className="mb-5">Programs</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Rewards & Programs
          </h1>
          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-12">
            Maximize your Payfast experience with exclusive reward programs.
            Earn points, get cashback, and unlock premium benefits.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {programs.map((prog) => (
              <GlassCard key={prog.title} hover className="p-8 group">
                <div className="flex items-start justify-between mb-5">
                  <IconBadge size="lg" className="transition-transform duration-300 group-hover:scale-110">
                    <prog.icon size={22} />
                  </IconBadge>
                  <div className="text-right">
                    <p className="text-sm font-bold text-lime">{prog.points}</p>
                    <p className="text-xs text-white/30">{prog.status}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{prog.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">{prog.description}</p>
                <Button variant="secondary" size="sm">
                  Learn More <ArrowRight size={14} />
                </Button>
              </GlassCard>
            ))}
          </div>

          {/* CTA Banner */}
          <GlassCard className="mt-14 p-8 sm:p-12 text-center bg-gradient-to-r from-lime/5 to-transparent border-lime/10">
            <Gift size={32} className="text-lime mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Unlock Premium Rewards</h2>
            <p className="text-white/45 max-w-lg mx-auto mb-6">
              Upgrade to a Growth or Business plan to unlock premium rewards, higher cashback rates, and exclusive partner deals.
            </p>
            <Button href="/pricing">View Plans</Button>
          </GlassCard>
        </div>
      </section>
    </PageWrapper>
  );
}
