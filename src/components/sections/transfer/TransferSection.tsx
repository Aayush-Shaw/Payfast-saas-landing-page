import TransferCard from "./TransferCard";
import IconBadge from "@/components/ui/IconBadge";
import { Headphones, BarChart3 } from "lucide-react";

const transferFeatures = [
  {
    icon: Headphones,
    title: "Access 24/7 Customer Support",
    description:
      "Get help anytime with our round-the-clock support team, available via live chat, phone, and email.",
  },
  {
    icon: BarChart3,
    title: "Track Transactions in Real-Time",
    description:
      "Monitor every transfer with live status updates and detailed transaction history at your fingertips.",
  },
];

export default function TransferSection() {
  return (
    <section className="relative py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Heading + paragraph — order 1 on mobile, spans left col on lg */}
          <div className="order-1 lg:order-1 lg:row-start-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
            <h2 className="text-5xl font-medium text-white">
              Let&apos;s Start Sending<br />Your Money
            </h2>
            <p className="max-w-md text-base text-white/50 leading-5">
              Send money across the globe in seconds with our secure and
              lightning-fast transfer system. No hidden fees, no delays.
            </p>
          </div>

          {/* Transfer Card — order 2 on mobile, right col spanning both rows on lg */}
          <div className="order-2 lg:order-2 lg:row-span-2 lg:row-start-1 lg:col-start-2">
            <TransferCard />
          </div>

          {/* Support feature tiles — order 3 on mobile, below heading on lg */}
          <div className="order-3 lg:order-3 lg:row-start-2 lg:col-start-1 space-y-6">
            {transferFeatures.map((feat) => (
              <div key={feat.title} className="flex items-start text-left gap-4 group">
                <IconBadge
                  size="lg"
                  className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                >
                  <feat.icon size={22} />
                </IconBadge>
                <div>
                  <h3 className="text-base font-normal text-white mb-0.5">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-4">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
