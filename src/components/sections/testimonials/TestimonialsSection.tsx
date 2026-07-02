"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <Badge variant="lime" className="mb-5">Client Testimonials</Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            What Our Customer<br className="hidden sm:block" /> Said about us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/45 leading-relaxed">
            Hear from the people who trust Payfast to manage their finances
            every day. Real stories, real results.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrow Nav */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white cursor-pointer sm:-left-6"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white cursor-pointer sm:-right-6"
          >
            <ChevronRight size={18} />
          </button>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  current === index
                    ? "w-6 bg-lime"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
