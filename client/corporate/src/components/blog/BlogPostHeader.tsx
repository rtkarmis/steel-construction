import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";
import { CalendarDays, Clock, User } from "lucide-react";
import BlogPostHero from "./BlogPostHero";

interface Props {
  post: BlogPost;
  readingTime: number;
}

export default function BlogPostHeader({ post, readingTime }: Props) {
  const { getPage, language } = useLanguage();

  // Helper functions to get blog post data from locales
  const getBlogPostData = (field: string) => {
    try {
      return getPage("blog", `posts.items.${post.key}.${field}`);
    } catch (error) {
      return post.translations.tr[field as keyof typeof post.translations.tr];
    }
  };

  const title = getBlogPostData("title");

  return (
    <section className="max-w-6xl mx-auto pt-6">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
          {getPage("blog", `categories.${post.category}`) ||
            post.category.charAt(0).toUpperCase() + post.category.slice(1)}
        </span>
      </div>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
        {title}
      </h1>
      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-6 text-text/80 mb-8">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span className="text-sm font-medium">{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays size={16} />
          <span className="text-sm">
            {new Date(post.publishedAt).toLocaleDateString(
              language === "tr" ? "tr-TR" : "en-US"
            )}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span className="text-sm">
            {readingTime}
            {getPage("blog", "posts.readTimeUnit") || " dk"}
          </span>
        </div>
      </div>

      {/* Blog Post Image - Full container with logo visible */}
      <BlogPostHero post={post} />
    </section>
  );
}
