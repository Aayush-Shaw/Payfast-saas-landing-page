import SpendingOverviewCard from "./SpendingOverviewCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function SpendingOverviewSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — Spending Card */}
          <div>
            <SpendingOverviewCard />
          </div>

          {/* Right — Copy */}
          <div>
            <Badge variant="lime" className="mb-5">Our Products & Features</Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
              Social Media Made Simple
            </h2>
            <p className="mt-5 max-w-md text-base text-white/45 leading-relaxed">
              Track all your social media spending and revenue in one unified
              dashboard. Get real-time insights and AI-powered recommendations to
              optimize your financial strategy.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-white/40">
                  Increase in Progress Tracking
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">122+</p>
                <p className="mt-1 text-sm text-white/40">
                  Countries Service Available
                </p>
              </div>
            </div>

            <Button href="/manage" className="mt-8">
              Explore Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
