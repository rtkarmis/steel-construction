"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface BlogFilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function BlogFilterBar({
  categories,
  activeCategory,
  setActiveCategory,
}: BlogFilterBarProps) {
  const { getPage } = useLanguage();

  return (
    <div className="bg-surface/80 border-b border-border/40 backdrop-blur-sm sticky top-[64px] z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex gap-4 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {["all", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200
              ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text/80 border border-border/50 hover:bg-primary/10"
              }`}
          >
            {getPage("blog", `categories.${cat}`) ?? cat}
          </button>
        ))}
      </div>
    </div>
  );
}
