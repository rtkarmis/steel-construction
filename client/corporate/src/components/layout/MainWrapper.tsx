"use client";

import Container from "@/components/ui/Container";
import { allLinks } from "@/data/menu";
import { usePathname } from "next/navigation";
import React from "react";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current page should not use Container wrapper
  const currentPage = allLinks.find((link) => link.item.slug === pathname);
  const shouldUseContainer = !currentPage?.item.noContainer;

  return (
    <main className="pt-[6.5rem] md:pt-0 bg-background text-text min-h-screen transition-colors duration-300">
      {/* Mobile: topbar h-10 + header h-16 = 6.5rem padding needed since header is fixed */}
      {/* Desktop: header is relative, so no padding needed */}
      {shouldUseContainer ? <Container>{children}</Container> : children}
    </main>
  );
}
