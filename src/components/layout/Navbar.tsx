"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold can be customized, 10 is from the html script
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-2 left-0 right-0 z-50 px-2 transition-all duration-300 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Pill */}
        <div className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-300 border border-white/10 ${scrolled ? 'bg-white/5 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
          <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="3"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          <span className="font-bold text-lg pr-2 text-white">Payflow</span>
        </div>

        {/* Nav Links Pill */}
        <div className={`hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 border border-white/10 ${scrolled ? 'bg-white/5 backdrop-blur-sm' : 'bg-transparent border-transparent'}`}>
          <Link
            href="#"
            className="bg-white/10 text-white px-5 py-2 rounded-full transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm font-medium"
          >
            Activity
          </Link>
          <Link
            href="#"
            className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm font-medium"
          >
            Manage
          </Link>
          <Link
            href="#"
            className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm font-medium"
          >
            Program
          </Link>
          <Link
            href="#"
            className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm font-medium"
          >
            Folders
          </Link>
          <Link
            href="#"
            className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm font-medium"
          >
            Documents
          </Link>
        </div>

        {/* Auth Pill */}
        <div className={`flex items-center gap-2 p-1.5 rounded-full transition-all duration-300 border border-white/10 ${scrolled ? 'bg-white/5 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
          <Link
            href="#"
            className="text-sm text-gray-300 hover:text-white transition-colors px-4 font-medium"
          >
            Log in
          </Link>
          <button className="bg-lime-400 text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-lime-500 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
