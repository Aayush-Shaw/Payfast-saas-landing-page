"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import PillToggle from "@/components/ui/PillToggle";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/lib/data/pricing";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      {/* Slightly lighter background panel */}
      <div className="absolute inset-0 bg-white/[0.015]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <Badge variant="lime" className="mb-5">Pricing Plan</Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Select a plan that will empower<br className="hidden sm:block" /> your business growth
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/45 leading-relaxed">
            Choose the perfect plan for your needs. Upgrade anytime as your
            business scales. All plans include our core security features.
          </p>

          <div className="mt-8 flex justify-center">
            <PillToggle
              options={["Monthly", "Yearly"]}
              activeIndex={isYearly ? 1 : 0}
              onChange={(index) => setIsYearly(index === 1)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
