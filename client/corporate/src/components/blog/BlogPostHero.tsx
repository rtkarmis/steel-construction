import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";
import HeroImage from "@/components/ui/HeroImage";

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
      <div className="relative h-[50vh] overflow-hidden">
        <HeroImage
          src={post.coverImage}
          alt={title}
          priority={true}
        />
      </div>
    </section>
  );
}
