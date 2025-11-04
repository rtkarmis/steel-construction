import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/seo";
import { BlogPost } from "@/types/blog";
import { Clock, ExternalLink, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  relatedPosts: BlogPost[];
  shareUrl: string;
  title: string;
}

export default function BlogRelatedPosts({
  relatedPosts,
  shareUrl,
  title,
}: Props) {
  const { getPage } = useLanguage();

  // Helper function to get blog post data from locales
  const getBlogPostData = (blogKey: string, field: string) => {
    try {
      return getPage("blog", `posts.items.${blogKey}.${field}`);
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="sticky top-8 space-y-6">
      {/* Share Section */}
      <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border/40">
        <div className="flex items-center gap-3 mb-4">
          <Share2 size={20} className="text-primary" />
          <h3 className="font-semibold text-text">
            {getPage("blog", "sidebar.share") || "Paylaş"}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(
              title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <ExternalLink size={16} className="text-white" />
            </div>
            <span className="text-xs font-medium text-blue-700">Twitter</span>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ExternalLink size={16} className="text-white" />
            </div>
            <span className="text-xs font-medium text-blue-700">LinkedIn</span>
          </a>
          <a
            href={`${siteConfig.socialLinks.whatsapp}?text=${encodeURIComponent(
              title + " - " + shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
          >
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <ExternalLink size={16} className="text-white" />
            </div>
            <span className="text-xs font-medium text-green-700">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border/40">
          <h2 className="text-xl font-bold text-primary mb-6">
            {getPage("blog", "posts.related") || "İlgili Yazılar"}
          </h2>
          <div className="space-y-4">
            {relatedPosts.map((r) => {
              const postTitle =
                getBlogPostData(r.key, "title") || r.translations.tr.title;

              return (
                <Link
                  href={`/blog/${r.slug}`}
                  key={r.slug}
                  className="group block border-b border-border/20 pb-4 last:border-b-0 last:pb-0 hover:bg-primary/5 rounded-lg p-3 -m-3 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={r.coverImage}
                        alt={postTitle}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-primary mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
                        {postTitle}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-text/60">
                        <span>
                          {new Date(r.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {Math.ceil(
                            (r.translations.tr.content || "")
                              .replace(/<[^>]*>/g, "")
                              .split(" ").length / 200
                          )}
                          {getPage("blog", "posts.readTimeUnit") || " dk"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
