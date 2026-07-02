import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Payfast",
  description: "Read the latest insights, tips, and news about finance, payments, and money management.",
};

const blogPosts = [
  {
    slug: "future-of-digital-payments",
    title: "The Future of Digital Payments in 2026",
    excerpt: "Explore how AI and blockchain are reshaping the payment landscape and what it means for businesses and consumers.",
    category: "Industry Trends",
    readTime: "5 min read",
    date: "Jun 28, 2026",
  },
  {
    slug: "maximizing-cashback-rewards",
    title: "How to Maximize Your Cashback Rewards",
    excerpt: "Smart strategies to earn more cashback on your everyday spending without changing your lifestyle.",
    category: "Tips & Tricks",
    readTime: "4 min read",
    date: "Jun 22, 2026",
  },
  {
    slug: "small-business-financial-tools",
    title: "5 Financial Tools Every Small Business Needs",
    excerpt: "From invoicing to analytics, these essential tools will streamline your business finances and save hours every week.",
    category: "Business",
    readTime: "6 min read",
    date: "Jun 15, 2026",
  },
  {
    slug: "understanding-virtual-cards",
    title: "Virtual Cards: Security Benefits You Need to Know",
    excerpt: "Learn why virtual cards are the safest way to make online purchases and how to get started with Payfast.",
    category: "Security",
    readTime: "3 min read",
    date: "Jun 10, 2026",
  },
  {
    slug: "budgeting-with-ai",
    title: "AI-Powered Budgeting: A Complete Guide",
    excerpt: "How artificial intelligence is making personal budgeting smarter, more accurate, and completely hands-free.",
    category: "Product",
    readTime: "7 min read",
    date: "Jun 5, 2026",
  },
  {
    slug: "global-money-transfer-tips",
    title: "Sending Money Abroad? Here Are the Best Practices",
    excerpt: "Avoid hidden fees and get the best exchange rates with these expert tips for international transfers.",
    category: "Guides",
    readTime: "5 min read",
    date: "May 29, 2026",
  },
];

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Badge variant="lime" className="mb-5">Blog</Badge>
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Insights & Updates
          </h1>
          <p className="max-w-2xl text-base text-white/45 leading-relaxed mb-12">
            Stay informed with the latest financial insights, product updates,
            and expert tips from the Payfast team.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <GlassCard hover className="flex flex-col h-full p-6 group">
                  {/* Placeholder image area */}
                  <div className="mb-5 h-40 rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.04] flex items-center justify-center">
                    <span className="text-white/10 text-sm">Featured Image</span>
                  </div>

                  <Badge className="self-start mb-3 text-[10px]">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lime transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/25">
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
