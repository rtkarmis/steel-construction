"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogSidebar({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const { language, getPage } = useLanguage();

  const popularPosts = posts.slice(0, 3); // Şimdilik ilk 3 tanesini alıyoruz

  return (
    <aside className="w-full lg:w-80 border-t lg:border-t-0 pt-8 lg:pt-0 border-border/80">
      {/* 📈 Popüler Yazılar */}
      <div className="mb-5 bg-surface/50 p-6 rounded-2xl border border-border/40 shadow-sm">
        <h3 className="text-lg font-bold text-primary mb-4">
          {getPage("blog", "sidebar.popular")}
        </h3>
        <ul className="space-y-4">
          {popularPosts.map((p) => {
            const t = p.translations[language];
            return (
              <li key={p.id}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex items-center gap-3 hover:bg-white/50 p-2 -m-2 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={p.coverImage}
                      alt={t.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary group-hover:text-secondary line-clamp-2 transition-colors">
                      {t.title}
                    </h4>
                    <p className="text-xs text-text/60 mt-1">
                      {new Date(p.publishedAt).toLocaleDateString(
                        language === "tr" ? "tr-TR" : "en-US"
                      )}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🏷️ Kategoriler */}
      <div className="mb-5 bg-surface/50 p-6 rounded-2xl border border-border/40 shadow-sm">
        <h3 className="text-lg font-bold text-primary mb-4">
          {getPage("blog", "sidebar.categories")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-sm bg-white/60 text-text/80 px-3 py-1.5 rounded-full border border-border/40 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
            >
              {getPage("blog", `categories.${cat}`) ?? cat}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
