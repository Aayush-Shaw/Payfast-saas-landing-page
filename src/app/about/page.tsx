import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import IconBadge from "@/components/ui/IconBadge";
import Button from "@/components/ui/Button";
import { Target, Users, Globe, Award, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Payfast",
  description: "Learn about Payfast's mission to revolutionize personal and business finance management.",
};

const values = [
  { icon: Target, title: "Mission-Driven", description: "We're on a mission to make financial management accessible, intelligent, and effortless for everyone." },
  { icon: Heart, title: "User-First", description: "Every feature we build starts with understanding what our users truly need to succeed financially." },
  { icon: Globe, title: "Global Reach", description: "Available in 122+ countries with support for multiple currencies and local payment methods." },
  { icon: Award, title: "Security First", description: "Bank-level encryption, SOC2 compliance, and 24/7 fraud monitoring protect every transaction." },
];

const team = [
  { name: "Sarah Chen", role: "CEO & Co-founder", initial: "S" },
  { name: "Marcus Johnson", role: "CTO & Co-founder", initial: "M" },
  { name: "Elena Rodriguez", role: "Head of Design", initial: "E" },
  { name: "David Kim", role: "VP of Engineering", initial: "D" },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="lime" className="mb-5">About Us</Badge>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
              Building the Future<br className="hidden sm:block" /> of Finance
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/45 leading-relaxed">
              Founded in 2022, Payfast has grown from a simple idea into a
              platform trusted by 768,000+ users worldwide. We believe everyone
              deserves smart, accessible financial tools.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-20">
            {values.map((value) => (
              <GlassCard key={value.title} hover className="p-8 group">
                <IconBadge size="lg" className="mb-5 transition-transform duration-300 group-hover:scale-110">
                  <value.icon size={22} />
                </IconBadge>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-white/45 max-w-lg mx-auto">
              The passionate people behind Payfast, dedicated to transforming
              how the world manages money.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 mb-20">
            {team.map((member) => (
              <GlassCard key={member.name} hover className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-lime/20 to-white/5 text-2xl font-bold text-white/30">
                  {member.initial}
                </div>
                <p className="font-semibold text-white text-sm">{member.name}</p>
                <p className="text-xs text-white/40 mt-1">{member.role}</p>
              </GlassCard>
            ))}
          </div>

          {/* CTA */}
          <GlassCard className="p-8 sm:p-12 text-center">
            <Zap size={32} className="text-lime mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Ready to get started?</h2>
            <p className="text-white/45 max-w-lg mx-auto mb-6">
              Join hundreds of thousands of users who are already taking control of their finances with Payfast.
            </p>
            <div className="flex justify-center gap-4">
              <Button href="/contact">Get Started</Button>
              <Button href="/pricing" variant="secondary">View Pricing</Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageWrapper>
  );
}
