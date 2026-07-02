import Badge from "@/components/ui/Badge";

export default function HeroHeadline() {
  return (
    <div className="flex flex-col items-center text-center">
      <Badge className="mb-6">
        <span className="text-lime">4.9 ⭐</span>
        <span className="text-white/50">on Google ratings · 12k reviews</span>
      </Badge>

      <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Take Control of Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
          Finances with Payfast
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base text-white/50 sm:text-lg leading-relaxed">
        The all-in-one financial platform that helps you track, manage, and grow
        your money. Powered by smart analytics and built for the modern world.
      </p>
    </div>
  );
}
