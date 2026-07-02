import PageWrapper from "@/components/layout/PageWrapper";
import Hero from "@/components/sections/hero/Hero";
import ClientsStrip from "@/components/sections/clients/ClientsStrip";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import SpendingOverviewSection from "@/components/sections/spending-overview/SpendingOverviewSection";
import TransferSection from "@/components/sections/transfer/TransferSection";
import PricingSection from "@/components/sections/pricing/PricingSection";
import TestimonialsSection from "@/components/sections/testimonials/TestimonialsSection";
import StatsSection from "@/components/sections/stats/StatsSection";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <ClientsStrip />
      <FeaturesSection />
      <SpendingOverviewSection />
      <TransferSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
    </PageWrapper>
  );
}
