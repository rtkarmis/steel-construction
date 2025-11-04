"use client";

import { siteConfig } from "@/lib/seo";
import { BlogPost } from "@/types/blog";
import Script from "next/script";

const SchemaBlogList = ({ posts }: { posts: BlogPost[] }) => {
  const blogPosts = posts.slice(0, 10); // En fazla 10 yazıyı listeye dahil et
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.siteUrl}/blog`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/blog`,
    },
    name: `${siteConfig.siteName} Blog`,
    url: `${siteConfig.siteUrl}/blog`,
    description:
      "Çelik yapı teknolojileri, endüstriyel çözümler ve mühendislik dünyasından güncel blog içerikleri.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.defaultImage,
      },
    },
    inLanguage: "tr",
    blogPost: blogPosts.map((post) => {
      const t = post.translations.tr;
      return {
        "@type": "BlogPosting",
        headline: t.title,
        description: t.summary,
        datePublished: post.publishedAt,
        author: {
          "@type": "Person",
          name: post.author,
        },
        image: `${siteConfig.siteUrl}${post.coverImage}`,
        url: `${siteConfig.siteUrl}/blog/${post.slug}`,
        mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
      };
    }),
  };

  return (
    <Script
      id="schema-blog-list"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaBlogList;
