"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 overflow-hidden ${
          mobileMenuOpen 
            ? "bg-black/5 backdrop-blur-md border border-white/10 rounded-4xl shadow-2xl" 
            : "bg-transparent border border-transparent rounded-4xl"
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-300 ${mobileMenuOpen ? 'p-0.5' : ''}`}>
          {/* Logo Pill */}
          <Link href="/" className={`flex items-center gap-1.5 px-1.5 py-1.5 rounded-full transition-all duration-300 border ${
            mobileMenuOpen 
              ? 'border-transparent bg-transparent' 
              : `border-white/10 ${scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`
          }`}>
            <div className="w-7 h-7 bg-lime rounded-full flex items-center justify-center">
              <Image src="/Payfast-logo.svg" alt="Payfast Logo" width={20} height={20} className="w-5 h-5" />
            </div>
            <span className="font-medium text-lg leading-none pr-1.5 text-white">Payfast</span>
          </Link>

          {/* Desktop Nav Links Pill */}
          <div className={`font-inter font-light hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-300 border border-white/10 ${scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
            <Link href="#" className="bg-white/10 text-white px-5 py-2 rounded-full transition-colors text-sm">Home</Link>
            <Link href="#" className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm">Activity</Link>
            <Link href="#" className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm">Manage</Link>
            <Link href="#" className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm">Program</Link>
            <Link href="#" className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm">Folders</Link>
            <Link href="#" className="hover:text-white px-5 py-2 text-gray-400 transition-colors text-sm">Documents</Link>
          </div>

          {/* Desktop Auth Pill */}
          <div className={`hidden font-regular md:flex items-center gap-2 p-1 rounded-full transition-all duration-300 border border-white/10 ${scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors px-4">Log in</Link>
            <button className="bg-lime text-black text-sm px-5 py-2 rounded-full hover:bg-lime/90 transition-colors">Sign up</button>
          </div>

          {/* Mobile Right Pill (Login + Hamburger) */}
          <div className={`md:hidden flex items-center gap-2 p-2 rounded-full transition-all duration-300 border ${
            mobileMenuOpen 
              ? 'border-transparent bg-transparent' 
              : `border-white/10 ${scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`
          }`}>
            <Link href="#" className="text-base text-gray-300 hover:text-white px-1 font-medium">
              Log in
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-4 h-4 flex flex-col justify-center items-center rounded-full  relative"
            >
              <span className={`absolute w-4 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute w-4 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1'}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Content */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-[400px] opacity-100 pb-6 pt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-3 gap-y-6 gap-x-2 px-6">
            <Link href="#" className="text-center text-sm font-medium text-white hover:text-lime transition-colors">Home</Link>
            <Link href="#" className="text-center text-sm font-medium text-gray-300 hover:text-lime transition-colors">Activity</Link>
            <Link href="#" className="text-center text-sm font-medium text-gray-300 hover:text-lime transition-colors">Manage</Link>
            <Link href="#" className="text-center text-sm font-medium text-gray-300 hover:text-lime transition-colors">Program</Link>
            <Link href="#" className="text-center text-sm font-medium text-gray-300 hover:text-lime transition-colors">Folders</Link>
            <Link href="#" className="text-center text-sm font-medium text-gray-300 hover:text-lime transition-colors">Documents</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
