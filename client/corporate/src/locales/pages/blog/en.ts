import { getAllBlogPosts } from "@/data/blog";

// Blog verilerini key'e göre map'le
const blogItems = getAllBlogPosts().reduce(
  (acc, blog) => {
    acc[blog.key] = {
      title: blog.translations.en.title,
      summary: blog.translations.en.summary,
      content: blog.translations.en.content,
      tags: blog.translations.en.tags,
      category: blog.category,
      coverImage: blog.coverImage,
      publishedAt: blog.publishedAt,
      slug: blog.slug,
      author: blog.author,
    };
    return acc;
  },
  {} as Record<
    string,
    {
      title: string;
      summary: string;
      content: string;
      tags: string[];
      category: string;
      coverImage: string;
      publishedAt: string;
      slug: string;
      author: string;
    }
  >
);

export const en = {
  hero: {
    title: "Blog",
    subtitle:
      "Latest insights from the world of steel structures, industrial solutions, and engineering innovations.",
    searchPlaceholder: "Search blog, topics, or tags...",
  },
  categories: {
    all: "All",
    steel: "Steel Structures",
    industrial: "Industrial Solutions",
    prefab: "Prefabric Systems",
    commercial: "Commercial Buildings",
    engineering: "Engineering & Technology",
    safety: "Safety",
  },
  posts: {
    title: "All Posts",
    noResults: "No results matched your search.",
    readMore: "Read More",
    publishedOn: "Published On",
    category: "Category",
    author: "Author",
    related: "Related Articles",
    relatedDescription:
      "You can also check out our other articles in the same category.",
    readTimeUnit: " min",
    items: blogItems,
  },
  sidebar: {
    popular: "Popular Posts",
    categories: "Categories",
    share: "Share",
    author: "Author",
    authorDescription:
      "Insights from our expert team on steel structures and industrial solutions.",
    ctaTitle: "Learn More",
    ctaText:
      "Interested in learning more about industrial steel structures, engineering solutions, and manufacturing processes?",
    ctaButton: "Contact Us",
  },
  comments: {
    title: "Comments",
    description: "Share your thoughts and join the discussion.",
  },
  pagination: {
    previous: "Previous",
    next: "Next",
  },
  filter: {
    label: "Categories",
    reset: "Reset Filter",
  },
} as const;
