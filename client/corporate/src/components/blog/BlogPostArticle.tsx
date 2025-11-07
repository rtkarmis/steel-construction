import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostContent({ post }: Props) {
  const { getPage } = useLanguage();

  // Helper functions to get blog post data from locales
  const getBlogPostData = (field: string) => {
    try {
      return getPage("blog", `posts.items.${post.key || post.slug}.${field}`);
    } catch (error) {
      return post.translations.tr[field as keyof typeof post.translations.tr];
    }
  };

  return (
    <div className="bg-surface rounded-3xl shadow-sm border border-border/40 overflow-hidden">
      <div className="p-4">
        {/* Content */}
        <div
          className="blog-content max-w-none"
          dangerouslySetInnerHTML={{ __html: getBlogPostData("content") }}
        />
        
        <style jsx>{`
          .blog-content :global(h1) {
            @apply text-3xl font-bold text-primary mb-6 mt-8;
          }
          .blog-content :global(h2) {
            @apply text-2xl font-bold text-primary mb-4 mt-8 pb-2 border-b border-border/30;
          }
          .blog-content :global(h3) {
            @apply text-xl font-semibold text-primary mb-3 mt-6;
          }
          .blog-content :global(p) {
            @apply text-text/90 leading-relaxed mb-4;
          }
          .blog-content :global(strong) {
            @apply font-bold text-primary;
          }
          .blog-content :global(em) {
            @apply italic text-text;
          }
          .blog-content :global(ul) {
            @apply my-4 space-y-2 ml-6;
          }
          .blog-content :global(li) {
            @apply text-text/90 list-disc;
          }
          .blog-content :global(a) {
            @apply text-primary no-underline font-medium hover:text-secondary;
          }
          .blog-content :global(code) {
            @apply bg-primary/10 text-primary px-2 py-1 rounded font-mono text-sm;
          }
          .blog-content :global(blockquote) {
            @apply border-l-4 border-secondary bg-secondary/5 px-6 py-4 rounded-r-lg font-medium my-6;
          }
        `}</style>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-border">
          {(() => {
            const tags = getBlogPostData("tags");
            const tagArray = Array.isArray(tags) ? tags : [];
            return tagArray.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors"
              >
                #{tag}
              </span>
            ));
          })()}
        </div>
      </div>
    </div>
  );
}
