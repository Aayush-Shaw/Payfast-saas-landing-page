"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGlow() {
  const mouseGlowGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseGlowGridRef.current) {
        mouseGlowGridRef.current.style.setProperty(
          "--mouse-x",
          `${e.clientX}px`
        );
        mouseGlowGridRef.current.style.setProperty(
          "--mouse-y",
          `${e.clientY}px`
        );
      }
    };

    const handleScroll = () => {
      if (mouseGlowGridRef.current) {
        mouseGlowGridRef.current.style.backgroundPosition = `0px -${window.scrollY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="ambient-light" />
      <div className="ambient-light-2" />
      <div className="mouse-glow-grid" ref={mouseGlowGridRef} />
    </>
  );
}
