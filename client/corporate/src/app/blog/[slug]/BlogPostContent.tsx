"use client";

import BlogComments from "@/components/blog/BlogComments";
import BlogPostArticle from "@/components/blog/BlogPostArticle";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogRelatedPosts from "@/components/blog/BlogRelatedPosts";
import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";
import { useEffect, useState } from "react";

interface Props {
  post: BlogPost;
  allPosts: BlogPost[];
}

export default function BlogPostContent({ post, allPosts }: Props) {
  const { language } = useLanguage();
  const { getNavigation } = useLanguage();

  // Manual breadcrumb creation for proper hierarchy
  const schemaBreadcrumbs = [
    {
      label: "Anasayfa",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: post.translations.tr.title,
      href: `/blog/${post.slug}`,
      isActive: true,
    },
  ];

  const uiBreadcrumbs = [
    {
      label: getNavigation("navigation.home"),
      href: "/",
    },
    {
      label: getNavigation("navigation.blog"),
      href: "/blog",
    },
    {
      label:
        post.translations[language as "tr" | "en"]?.title ??
        post.translations.tr.title,
      href: `/blog/${post.slug}`,
      isActive: true,
    },
  ];
  const [readingTime, setReadingTime] = useState(0);

  // Scroll Progress & Reading Time
  useEffect(() => {
    const t =
      post.translations[language as "tr" | "en"] ?? post.translations.tr;
    // Calculate reading time (average 200 words per minute)
    const wordCount = t.content.replace(/<[^>]*>/g, "").split(" ").length;
    setReadingTime(Math.ceil(wordCount / 200));
  }, [post.translations, language]);

  // Related Posts
  const related = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const shareUrl = `https://guvenoglucelik.com/blog/${post.slug}`;
  const t = post.translations[language as "tr" | "en"] ?? post.translations.tr;

  return (
    <article className="min-h-screen bg-background">
      {/* Schema Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />

      {/* UI Breadcrumb */}
      <div className="bg-background/60 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto mb-6 px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Content Header */}
            <BlogPostHeader post={post} readingTime={readingTime} />

            {/* Article Content */}
            <BlogPostArticle post={post} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4">
            <BlogRelatedPosts
              relatedPosts={related}
              shareUrl={shareUrl}
              title={t.title}
            />
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <BlogComments />
    </article>
  );
}
