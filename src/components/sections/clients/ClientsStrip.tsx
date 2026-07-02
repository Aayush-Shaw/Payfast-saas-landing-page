import { clients } from "@/lib/data/clients";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function ClientsStrip() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-lg font-semibold text-white sm:text-xl">
          Our Recent Clients & Partners
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((client) => {
            const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[client.icon];
            return (
              <div
                key={client.name}
                className="flex flex-col items-center gap-2 opacity-40 transition-opacity duration-300 hover:opacity-70"
              >
                {IconComponent && <IconComponent size={22} className="text-white" />}
                <span className="text-xs font-medium text-white whitespace-nowrap">
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
