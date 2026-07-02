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
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — Copy */}
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
              Let&apos;s Start Sending<br />Your Money
            </h2>
            <p className="mt-5 max-w-md text-base text-white/45 leading-relaxed">
              Send money across the globe in seconds with our secure and
              lightning-fast transfer system. No hidden fees, no delays.
            </p>

            <div className="mt-10 space-y-6">
              {transferFeatures.map((feat) => (
                <div key={feat.title} className="flex gap-4 group">
                  <IconBadge
                    size="lg"
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                  >
                    <feat.icon size={22} />
                  </IconBadge>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Transfer Card */}
          <div>
            <TransferCard />
          </div>
        </div>
      </div>
    </section>
  );
}
