"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";
import { CalendarDays, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const { language, getPage } = useLanguage();

  // Helper function to get blog post data from locales
  const getBlogPostData = (post: BlogPost, field: string) => {
    try {
      return getPage("blog", `posts.items.${post.key || post.slug}.${field}`);
    } catch (error) {
      return (
        post.translations[language as "tr" | "en"]?.[
          field as keyof typeof post.translations.tr
        ] || post.translations.tr[field as keyof typeof post.translations.tr]
      );
    }
  };

  if (!posts.length) {
    return (
      <div className="py-24 text-center text-text/60">
        {getPage("blog", "posts.noResults") || "No blog posts found"}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {posts.map((post) => {
        const title = getBlogPostData(post, "title") as string;
        const summary = getBlogPostData(post, "summary") as string;
        const tags = getBlogPostData(post, "tags") || [];
        const tagArray = Array.isArray(tags) ? tags : [];

        return (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group block"
          >
            <article className="bg-surface border border-border/40 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all flex flex-col h-full cursor-pointer">
              {/* Görsel */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={(title || post.translations.tr.title) as string}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* İçerik */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs text-secondary font-semibold tracking-wide mb-2">
                    {(
                      getPage("blog", `categories.${post.category}`) ||
                      post.category
                    ).toLocaleUpperCase(language === "tr" ? "tr-TR" : "en-US")}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {title}
                  </h3>
                  <div 
                    className="mt-2 text-sm text-text/80 line-clamp-3 blog-summary"
                    dangerouslySetInnerHTML={{ __html: summary }}
                  />
                  
                  <style jsx>{`
                    .blog-summary :global(p) {
                      @apply text-text/80 leading-relaxed my-0;
                    }
                    .blog-summary :global(strong) {
                      @apply font-semibold text-text;
                    }
                    .blog-summary :global(em) {
                      @apply italic text-text/90;
                    }
                  `}</style>
                </div>

                {/* Bilgiler */}
                <div className="mt-4 flex items-center justify-between text-xs text-text/60">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(
                        language === "tr" ? "tr-TR" : "en-US"
                      )}
                    </span>
                  </div>

                  {tagArray.length > 0 && (
                    <div className="flex items-center gap-1">
                      <Tag size={14} />
                      <span>{tagArray[0]}</span>
                    </div>
                  )}
                </div>

                {/* Okuma işareti */}
                <div className="mt-5">
                  <span className="inline-block text-sm font-semibold text-secondary group-hover:underline">
                    {getPage("blog", "posts.readMore")} →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
