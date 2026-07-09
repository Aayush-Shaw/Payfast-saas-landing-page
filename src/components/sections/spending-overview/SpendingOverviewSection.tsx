import SpendingOverviewCard from "./SpendingOverviewCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Settings } from "lucide-react";

export default function SpendingOverviewSection() {
  return (
    <section className="relative py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {/* Heading & Paragraph — order 1 on mobile, spans right column on md */}
          <div className="order-1 md:order-2 md:col-start-2 md:row-start-1 text-center gap-6 md:text-left flex flex-col items-center md:items-start">
            <Badge variant="default" className="p-1 pr-2">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                <Settings size={12} className="text-lime" />
              </span>
              Our Products & Features
            </Badge>
            <h2 className="text-5xl font-medium text-white sm:text-4xl md:text-5xl">
              Social Media Made Simple
            </h2>
            <p className="max-w-md mx-auto md:mx-0 text-base text-white/50 leading-5">
              Track all your social media spending and revenue in one unified
              dashboard. Get real-time insights and AI-powered recommendations to
              optimize your financial strategy.
            </p>
          </div>

          {/* Stats — order 2 on mobile, part of right column on md */}
          <div className="order-2 md:order-3 md:col-start-2 text-center md:text-left">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-5xl font-medium text-white">100%</p>
                <p className="mt-1 text-sm text-white/40 leading-4">
                  Increase in Progress Tracking
                </p>
              </div>
              <div>
                <p className="text-5xl font-medium text-white">122+</p>
                <p className="mt-1 text-sm text-white/40 leading-4">
                  Countries Service Available
                </p>
              </div>
            </div>
          </div>

          {/* Spending Card — order 3 on mobile, left column spanning all rows on md */}
          <div className="order-3 md:order-1 md:col-start-1 md:row-start-1 md:row-span-3 relative">
            <div className="md:absolute md:inset-0">
              <SpendingOverviewCard />
            </div>
          </div>

          {/* CTA Button — order 4 on mobile, right column on md */}
          <div className="order-4 md:order-4 md:col-start-2 flex justify-center md:justify-start">
            <Button href="/manage" className="w-full md:w-auto text-sm font-normal px-6 py-3">
              Start 7 day&apos;s free trail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
