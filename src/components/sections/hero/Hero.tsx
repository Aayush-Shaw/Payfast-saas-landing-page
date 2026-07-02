import HeroHeadline from "./HeroHeadline";
import HeroCTAs from "./HeroCTAs";
import HeroDashboardPreview from "./HeroDashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-8 sm:pt-40 sm:pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <HeroHeadline />
        <HeroCTAs />
        <HeroDashboardPreview />
      </div>
    </section>
  );
}
