"use client";

import Topbar from "@/components/layout/Topbar";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ✅ Framer Motion lazy load kullanılmaya devam eder ama header'lar preload edilir
const DesktopHeader = dynamic(
  () => import("@/components/layout/DesktopHeader"),
  {
    ssr: true,
    loading: () => <div className="h-16" />,
  }
);
const MobileHeader = dynamic(() => import("@/components/layout/MobileHeader"), {
  ssr: true,
  loading: () => <div className="h-16" />,
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Topbar height: h-10 = 40px
      const topbarHeight = 40;
      setIsScrolled(window.scrollY > topbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="md:relative fixed top-0 left-0 right-0 z-50">
      {/* Topbar - Always visible */}
      <Topbar />

      {/* Desktop Header */}
      <div className="hidden md:block w-full bg-surface border-b border-gray-100 backdrop-blur supports-[backdrop-filter]:bg-surface/90 shadow-[0_2px_6px_rgba(13,42,74,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <DesktopHeader />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileHeader isScrolled={isScrolled} />
      </div>
    </nav>
  );
}
