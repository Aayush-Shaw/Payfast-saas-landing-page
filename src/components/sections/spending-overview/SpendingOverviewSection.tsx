import SpendingOverviewCard from "./SpendingOverviewCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Settings } from "lucide-react";

export default function SpendingOverviewSection() {
  return (
    <section className="relative pt-5 sm:pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2">
          {/* Left — Spending Card */}
          <div className="relative">
            <div className="md:absolute md:inset-0">
              <SpendingOverviewCard />
            </div>
          </div>

          {/* Right — Copy */}
          <div>
            <Badge variant="default" className="mb-5 p-1 pr-2">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5">
                <Settings size={12} className="text-lime" />
              </span>
              Our Products & Features
            </Badge>
            <h2 className="text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              Social Media Made Simple
            </h2>
            <p className="mt-5 max-w-md text-base text-white/50">
              Track all your social media spending and revenue in one unified
              dashboard. Get real-time insights and AI-powered recommendations to
              optimize your financial strategy.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-5xl font-medium text-white">100%</p>
                <p className="mt-1 text-sm text-white/40">
                  Increase in Progress Tracking
                </p>
              </div>
              <div>
                <p className="text-5xl font-medium text-white">122+</p>
                <p className="mt-1 text-sm text-white/40">
                  Countries Service Available
                </p>
              </div>
            </div>

            <Button href="/manage" className="mt-8 text-sm font-normal px-6 py-3">
              Start 7 day&apos;s free trail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
