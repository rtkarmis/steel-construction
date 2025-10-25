"use client";

import Container from "@/components/ui/Container";
import { usePathname } from "next/navigation";
import React from "react";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Treat root path exactly as homepage
  const isHome = pathname === "/" || pathname === "" || pathname === undefined;

  return <main>{isHome ? children : <Container>{children}</Container>}</main>;
}
