import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Payfast — Take Control of Your Finances",
  description:
    "The all-in-one financial platform that helps you track, manage, and grow your money. Powered by smart analytics and built for the modern world.",
  keywords: ["fintech", "finance", "banking", "payments", "analytics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="grid-pattern relative min-h-full flex flex-col bg-[#0A0A0A] text-white font-sans">
        <BackgroundGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
