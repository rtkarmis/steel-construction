import HeroImage from "@/components/ui/HeroImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostHero({ post }: Props) {
  const { getPage } = useLanguage();

  // Get blog post title from locales
  const getBlogPostTitle = () => {
    try {
      return getPage("blog", `posts.items.${post.key}.title`);
    } catch (error) {
      return post.translations.tr.title;
    }
  };

  const title = getBlogPostTitle();

  return (
    <section className="relative">
      {/* Background Image Only */}
      <div className="relative aspect-[16/9] min-h-[400px] overflow-hidden">
        <HeroImage src={post.coverImage} alt={title} priority={true} />
      </div>
    </section>
  );
}
