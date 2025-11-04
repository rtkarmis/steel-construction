"use client";

import BlogFilterBar from "@/components/blog/BlogFilterBar";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";
import { BlogPost } from "@/types/blog";
import { useState } from "react";

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  const { getNavigation, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  // Schema için TR linkleri
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/blog");
  // UI için çok dilli breadcrumb
  const uiBreadcrumbs = getBreadcrumbsForUI("/blog", getNavigation);

  const filteredPosts = posts.filter((post) => {
    const t =
      post.translations[language as "tr" | "en"] ?? post.translations.tr;
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div className="bg-background min-h-screen">
      {/* 🧭 Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="bg-background/60 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogFilterBar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8 py-10">
        <div className="flex-1">
          <BlogList posts={paginatedPosts} />
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
        <BlogSidebar posts={posts} categories={categories} />
      </div>
    </div>
  );
}
