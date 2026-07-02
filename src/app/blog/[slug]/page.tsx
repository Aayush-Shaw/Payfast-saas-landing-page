import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

// In a real app this would come from a CMS/database
const blogContent: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "future-of-digital-payments": {
    title: "The Future of Digital Payments in 2026",
    category: "Industry Trends",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    content: [
      "The digital payments landscape is undergoing a massive transformation. With the rise of AI-powered financial tools and blockchain technology, the way we send and receive money is fundamentally changing.",
      "In 2026, we're seeing a convergence of several key trends: contactless payments becoming the default, AI-driven fraud detection reaching near-perfect accuracy, and cross-border transfers becoming as simple as sending a text message.",
      "For businesses, this means unprecedented opportunities to reach global customers without the traditional friction of international payments. Payfast is at the forefront of this revolution, offering instant transfers to 122+ countries with zero hidden fees.",
      "Looking ahead, we expect to see further integration of biometric authentication, the rise of programmable money through smart contracts, and a continued shift toward real-time settlement systems that eliminate the need for intermediaries.",
      "The future of payments isn't just about speed — it's about intelligence. AI-powered systems will predict your spending patterns, optimize your cash flow, and even suggest the best times to make large purchases based on exchange rate fluctuations.",
    ],
  },
};

// Fallback content for slugs not in our mock data
const fallbackContent = {
  title: "Blog Post",
  category: "General",
  date: "2026",
  readTime: "5 min read",
  content: [
    "This is a sample blog post. In a production environment, this content would be dynamically loaded from a CMS or database.",
    "Payfast is committed to providing valuable insights and educational content to help our users make the most of their financial journey.",
    "Stay tuned for more updates, tips, and industry analysis from our expert team.",
  ],
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogContent[slug] || { ...fallbackContent, title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };
  return {
    title: `${post.title} — Payfast Blog`,
    description: post.content[0],
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogContent[slug] || {
    ...fallbackContent,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  };

  return (
    <PageWrapper>
      <article className="pt-32 pb-20 sm:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Header */}
          <Badge variant="lime" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/30 mb-10">
            <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
            <span>{post.readTime}</span>
            <button className="flex items-center gap-1 hover:text-white transition-colors ml-auto cursor-pointer">
              <Share2 size={14} /> Share
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base text-white/60 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <GlassCard className="mt-14 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to transform your finances?
            </h3>
            <p className="text-sm text-white/40 mb-6">
              Join 768,000+ users already using Payfast.
            </p>
            <Button href="/contact">Get Started Free</Button>
          </GlassCard>
        </div>
      </article>
    </PageWrapper>
  );
}
