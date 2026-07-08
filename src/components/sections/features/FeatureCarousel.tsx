"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import FeatureCard from "./FeatureCard";
import type { Feature } from "@/lib/data/features";

interface FeatureCarouselProps {
  features: Feature[];
  autoSlideInterval?: number;
}

export default function FeatureCarousel({
  features,
  autoSlideInterval = 4000,
}: FeatureCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const total = features.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(((index % total) + total) % total);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, total],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, autoSlideInterval);
    return () => clearInterval(timer);
  }, [goNext, autoSlideInterval, isPaused]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current > threshold) {
      goPrev();
    } else if (touchDeltaX.current < -threshold) {
      goNext();
    }
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Mouse drag handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    touchStartX.current = e.clientX;
    touchDeltaX.current = 0;

    const handleMouseMove = (ev: MouseEvent) => {
      touchDeltaX.current = ev.clientX - touchStartX.current;
    };

    const handleMouseUp = () => {
      const threshold = 50;
      if (touchDeltaX.current > threshold) {
        goPrev();
      } else if (touchDeltaX.current < -threshold) {
        goNext();
      }
      setTimeout(() => setIsPaused(false), 3000);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  // Compute position for each card relative to active
  const getCardStyle = (index: number): React.CSSProperties => {
    let offset = index - activeIndex;
    // Wrap around
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset === 0) {
      // Active / front card
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (offset === 1 || offset === -(total - 1)) {
      // Next card — peeking right
      return {
        transform: "translateX(30%) scale(0.88)",
        zIndex: 20,
        opacity: 0.5,
        filter: "blur(1px)",
      };
    } else if (offset === -1 || offset === total - 1) {
      // Previous card — peeking left
      return {
        transform: "translateX(-30%) scale(0.88)",
        zIndex: 20,
        opacity: 0.5,
        filter: "blur(1px)",
      };
    } else {
      // Hidden
      return {
        transform: "translateX(0) scale(0.75)",
        zIndex: 10,
        opacity: 0,
        pointerEvents: "none",
      };
    }
  };

  return (
    <div className="flex flex-col items-center gap-0">
      {/* Carousel container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "260px" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="absolute w-[75%] max-w-[300px] overflow-hidden rounded-4xl bg-[#0a0a0a] transition-all duration-500 ease-in-out select-none"
              style={getCardStyle(index)}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-6 bg-lime"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
