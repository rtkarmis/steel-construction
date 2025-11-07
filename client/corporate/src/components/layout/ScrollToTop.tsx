"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Sayfa değiştiğinde yukarı scroll et
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Anında scroll - smooth animasyon yapmaz
    });
  }, [pathname]);

  return null; // Bu component hiçbir şey render etmez
}
