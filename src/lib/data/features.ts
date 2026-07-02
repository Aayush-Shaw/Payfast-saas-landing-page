export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "Shield",
    title: "Virtual Debit Cards",
    description:
      "Create virtual cards instantly for secure online transactions. Set spending limits and freeze cards anytime.",
  },
  {
    icon: "Zap",
    title: "Real-Time Transfers",
    description:
      "Send and receive money instantly with zero delays. Automated payments and scheduling built right in.",
  },
  {
    icon: "Bell",
    title: "Notify & Alerts",
    description:
      "Get real-time push notifications for every transaction. Customizable alerts for spending limits and more.",
  },
  {
    icon: "TrendingUp",
    title: "Smart Investing",
    description:
      "Automated investing strategies tailored to your risk profile. Grow your wealth with AI-powered portfolio management.",
  },
  {
    icon: "PieChart",
    title: "Automated Budgeting",
    description:
      "AI-categorized spending with automated monthly budgets. Visual breakdowns help you stay on track effortlessly.",
  },
  {
    icon: "Lock",
    title: "24/7 Fraud Detection",
    description:
      "Military-grade encryption and real-time fraud monitoring. Your assets are protected around the clock.",
  },
];
