"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import BlogSearch from "./BlogSearch";

export default function BlogHero({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}) {
  const { getPage } = useLanguage();

  return (
    <section className="relative py-12 text-center border-b border-border/40">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {getPage("blog", "hero.title")}
        </h1>
        <p className="text-text/70 mb-8">{getPage("blog", "hero.subtitle")}</p>

        {/* 🔍 Search Bar */}
        <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </section>
  );
}
