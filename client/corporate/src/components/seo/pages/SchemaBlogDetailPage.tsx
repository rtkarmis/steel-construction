import { BlogPost } from "@/types/blog";

interface SchemaBlogDetailPageProps {
  post: BlogPost;
}

export default function SchemaBlogDetailPage({
  post,
}: SchemaBlogDetailPageProps) {
  const t = post.translations.tr;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: t.title,
    description: t.metaDescription || t.summary,
    image: post.coverImage
      ? [`https://guvenoglucelik.com${post.coverImage}`]
      : undefined,
    author: {
      "@type": "Organization",
      name: post.author || "Güvenoğlu Çelik & Metal",
      url: "https://guvenoglucelik.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Güvenoğlu Çelik & Metal",
      logo: {
        "@type": "ImageObject",
        url: "https://guvenoglucelik.com/public/images/settings/logo1.webp",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://guvenoglucelik.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: t.tags?.join(", ") || "",
    url: `https://guvenoglucelik.com/blog/${post.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
}
