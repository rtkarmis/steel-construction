import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPost } from "@/types/blog";
import Image from "next/image";

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
    <div className="relative w-full mb-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={post.coverImage}
          alt={title}
          fill
          priority={true}
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 1152px"
          className="object-cover w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "right bottom", // Logo sağ alt köşede
          }}
        />
      </div>
    </div>
  );
}
