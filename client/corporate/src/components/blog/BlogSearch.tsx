"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Search } from "lucide-react";

export default function BlogSearch({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}) {
  const { getPage } = useLanguage();
  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={getPage("blog", "hero.searchPlaceholder")}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/60 bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm shadow-sm"
      />
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70"
        size={18}
      />
    </div>
  );
}
