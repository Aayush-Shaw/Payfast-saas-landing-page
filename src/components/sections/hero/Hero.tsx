import HeroHeadline from "./HeroHeadline";
import HeroCTAs from "./HeroCTAs";
import HeroDashboardPreview from "./HeroDashboardPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-25 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <HeroHeadline />
        <HeroCTAs />
        <HeroDashboardPreview />
      </div>
    </section>
  );
}
