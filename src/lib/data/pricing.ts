import type { PricingPlan } from "@/lib/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    description: "Perfect for individuals getting started with personal finance management.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Basic account analytics",
      "Up to 5 virtual cards",
      "Standard transfer speeds",
      "Email support",
      "Mobile app access",
    ],
    isPopular: false,
    ctaLabel: "Select This Plan",
  },
  {
    name: "Growth Plan",
    description: "Ideal for growing businesses that need advanced financial tools and insights.",
    monthlyPrice: 49,
    yearlyPrice: 470,
    features: [
      "Advanced analytics dashboard",
      "Unlimited virtual cards",
      "Priority transfer speeds",
      "24/7 live chat support",
      "API access & integrations",
    ],
    isPopular: true,
    ctaLabel: "Select This Plan",
  },
  {
    name: "Business Plan",
    description: "Enterprise-grade tools for large teams with dedicated support and compliance.",
    monthlyPrice: 99,
    yearlyPrice: 950,
    features: [
      "Custom analytics & reports",
      "Unlimited everything",
      "Instant global transfers",
      "Dedicated account manager",
      "SOC2 compliance & audit logs",
    ],
    isPopular: false,
    ctaLabel: "Select This Plan",
  },
];
