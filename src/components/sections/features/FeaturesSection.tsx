import Badge from "@/components/ui/Badge";
import FeatureCard from "./FeatureCard";
import { features } from "@/lib/data/features";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <Badge variant="lime" className="mb-5">Features</Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Banking Reimagined<br className="hidden sm:block" /> for the Future You
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/45 leading-relaxed">
            Experience next-generation financial tools designed with cutting-edge
            technology and intuitive design to simplify your financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
