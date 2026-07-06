import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lufga = localFont({
  src: [
    { path: "./fonts/Lufga-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/Lufga-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./fonts/Lufga-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/Lufga-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./fonts/Lufga-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Lufga-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/Lufga-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Lufga-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Lufga-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Lufga-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/Lufga-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Lufga-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/Lufga-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Lufga-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/Lufga-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Lufga-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./fonts/Lufga-Black.woff2", weight: "900", style: "normal" },
    { path: "./fonts/Lufga-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Payfast | AI-Powered Global Payments | Instant, Secure, and Borderless | Start Free",
  description:
    "Payfast: The AI-powered global payments platform. Send and receive money instantly, securely, and with no hidden fees. Trusted by individuals and businesses worldwide. Start for free today!",
  keywords: ["AI payments", "global payments", "instant payments", "secure money transfer", "borderless payments", "fintech", "online payments", "business payments", "payfast"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lufga.variable} ${inter.variable} h-full antialiased`}>
      <body className="grid-pattern relative min-h-full flex flex-col bg-background text-white font-sans">
        <BackgroundGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
