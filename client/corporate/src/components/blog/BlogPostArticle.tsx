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
          className="prose prose-lg prose-slate max-w-none
            prose-headings:text-primary prose-headings:font-bold
            prose-p:text-text/90 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary
            prose-strong:text-primary prose-strong:font-semibold
            prose-blockquote:border-l-4 prose-blockquote:border-secondary 
            prose-blockquote:bg-secondary/5 prose-blockquote:px-6 prose-blockquote:py-4
            prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-code:bg-primary/10 prose-code:text-primary prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-slate-900 prose-pre:border prose-pre:border-border
            prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: getBlogPostData("content") }}
        />

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
