import type { Metadata } from "next";
import PageWrapper from "@/components/layout/PageWrapper";
import PricingSection from "@/components/sections/pricing/PricingSection";

export const metadata: Metadata = {
  title: "Pricing — Payfast",
  description: "Choose the perfect Payfast plan for your needs. Starter, Growth, and Business plans available.",
};

export default function PricingPage() {
  return (
    <PageWrapper>
      <div className="pt-16">
        <PricingSection />
      </div>
    </PageWrapper>
  );
}
