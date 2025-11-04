"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomePageBlogs } from "@/data/blog";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
  staggerContainer: {
    hidden: {};
    visible: { transition: { staggerChildren: number } };
  };
}

const BlogPreview = ({ fadeUp, staggerContainer }: BlogPreviewProps) => {
  const { getPage, language } = useLanguage();

  const posts = getHomePageBlogs(3);

  // Get blog title from translations
  const getBlogTitle = (post: any) => {
    return post.translations[language].title;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <m.section variants={fadeUp} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-primary">
            {getPage("home", "blog.title")}
          </h2>
          <Link
            href="/blog"
            className="text-secondary hover:underline font-medium"
          >
            {getPage("home", "blog.viewAllButton")}
          </Link>
        </div>

        <m.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {posts.map((p) => (
            <m.article
              key={p.id}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden bg-surface border border-border/60 shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-52">
                <Image
                  src={p.coverImage}
                  alt={getBlogTitle(p)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-sm text-text/50">
                  {formatDate(p.publishedAt)}
                </span>
                <h3 className="text-lg font-semibold text-primary mt-2">
                  {getBlogTitle(p)}
                </h3>
                <Link
                  href={`/blog/${p.slug}`}
                  className="inline-block mt-3 text-secondary font-medium hover:underline"
                >
                  {getPage("blog", "posts.readMore")}
                </Link>
              </div>
            </m.article>
          ))}
        </m.div>
      </div>
    </m.section>
  );
};
export default BlogPreview;
