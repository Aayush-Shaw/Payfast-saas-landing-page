"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import PillToggle from "@/components/ui/PillToggle";
import PricingCard from "./PricingCard";
import PricingCarousel from "./PricingCarousel";
import { pricingPlans } from "@/lib/data/pricing";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-5 md:py-10">
      {/* Slightly lighter background panel */}
      <div className="absolute inset-0 bg-white/2" />

      <div className="relative mx-auto max-w-7xl px-2 md:px-6 space-y-6">
        <div className="text-center space-y-6">
          <Badge variant="lime">Pricing Plan</Badge>
          <h2 className="text-5xl font-medium text-white">
            Select a plan that will empower<br className="hidden sm:block" /> your business growth
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/50 leading-5">
            Choose the perfect plan for your needs. Upgrade anytime as your
            business scales. All plans include our core security features.
          </p>

          <div className="flex justify-center">
            <PillToggle
              options={["Monthly", "Yearly"]}
              activeIndex={isYearly ? 1 : 0}
              onChange={(index) => setIsYearly(index === 1)}
            />
          </div>
        </div>

        {/* Mobile: stacked carousel */}
        <div className="md:hidden">
          <PricingCarousel plans={pricingPlans} isYearly={isYearly} />
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
