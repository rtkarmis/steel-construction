"use client";

import { BreadcrumbItem } from "@/types/common";
import Link from "next/link";

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1;
          const isActive = it.isActive || isLast;
          const linkPath = it.href || it.slug; // Support both href and slug
          return (
            <li key={`${it.label}-${idx}`} className="flex items-center">
              {!isActive && linkPath ? (
                <Link
                  href={linkPath}
                  className="hover:underline text-gray-600 hover:text-primary transition-colors touch-target md:pointer-target"
                >
                  {it.label}
                </Link>
              ) : (
                <span
                  className={
                    isActive ? "text-primary font-medium" : "text-gray-600"
                  }
                >
                  {it.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-gray-400">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
