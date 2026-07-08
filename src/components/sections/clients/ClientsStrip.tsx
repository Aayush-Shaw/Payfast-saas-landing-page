import { clients } from "@/lib/data/clients";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function ClientsStrip() {
  return (
    <section className="relative py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-4xl">
          Our Recent Clients & Partners
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {clients.map((client) => {
            const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[client.icon];
            return (
              <div
                key={client.name}
                className="flex items-center gap-2.5 opacity-50 transition-opacity duration-300 hover:opacity-80"
              >
                {IconComponent && <IconComponent size={24} className="text-white/80" />}
                <span className="text-sm font-semibold text-white whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-white/30">
          Join 4,000+ companies already growing
        </p>
      </div>
    </section>
  );
}
