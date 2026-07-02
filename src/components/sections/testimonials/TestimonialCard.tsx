import GlassCard from "@/components/ui/GlassCard";
import StarRating from "@/components/ui/StarRating";
import type { Testimonial } from "@/lib/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-10 md:p-12">
      {/* Author Photo */}
      <div className="shrink-0">
        <div className="h-32 w-32 overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-lime/20 to-white/5 sm:h-40 sm:w-40">
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white/20">
            {testimonial.authorName.charAt(0)}
          </div>
        </div>
      </div>

      {/* Quote Content */}
      <div className="flex-1 text-center sm:text-left">
        <blockquote className="text-lg font-medium leading-relaxed text-white/80 sm:text-xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-6">
          <p className="font-semibold text-white">{testimonial.authorName}</p>
          <p className="text-sm text-white/40">{testimonial.authorTitle}</p>
        </div>

        <StarRating rating={testimonial.rating} className="mt-3 justify-center sm:justify-start" />
      </div>
    </GlassCard>
  );
}
