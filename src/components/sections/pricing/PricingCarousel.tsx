"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import PricingCard from "./PricingCard";
import type { PricingPlan } from "@/lib/types/pricing";

interface PricingCarouselProps {
  plans: PricingPlan[];
  isYearly: boolean;
}

export default function PricingCarousel({
  plans,
  isYearly,
}: PricingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Measure the tallest card and set container height
  useEffect(() => {
    const measure = () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll<HTMLElement>("[data-pricing-card]");
      let maxH = 0;
      cards.forEach((card) => {
        maxH = Math.max(maxH, card.scrollHeight);
      });
      if (maxH > 0) setContainerHeight(maxH + 24); // 24px breathing room
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, [isYearly]);

  const total = plans.length;

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

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
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
  };

  // Mouse drag handlers for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
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
    <div
      ref={cardsRef}
      className="relative w-full overflow-hidden"
      style={{ height: containerHeight > 0 ? `${containerHeight}px` : "auto" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            data-pricing-card
            className="absolute w-[80%] max-w-[340px] rounded-4xl bg-background transition-all duration-500 ease-in-out select-none"
            style={getCardStyle(index)}
          >
            <PricingCard plan={plan} isYearly={isYearly} />
          </div>
        ))}
      </div>
    </div>
  );
}
