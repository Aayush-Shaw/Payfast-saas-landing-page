import StatCard from "./StatCard";
import { stats } from "@/lib/data/stats";

export default function StatsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl max-w-lg leading-tight">
            Get to know more about MoneyHub
          </h2>
          <p className="max-w-md text-base text-white/45 leading-relaxed">
            Our numbers speak for themselves. Join hundreds of thousands of
            users who trust Payfast with their financial operations every day.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.value} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
