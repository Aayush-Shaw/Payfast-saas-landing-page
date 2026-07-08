import HeroHeadline from "./HeroHeadline";
import HeroCTAs from "./HeroCTAs";
import HeroDashboardPreview from "./HeroDashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-25 pb-8">
      <div className="max-w-7xl px-2 lg:px-6">
        <HeroHeadline />
        <HeroCTAs />
        <HeroDashboardPreview />
      </div>
    </section>
  );
}
