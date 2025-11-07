import { getAllBlogPosts } from "@/data/blog";

// Blog verilerini key'e göre map'le
const blogItems = getAllBlogPosts().reduce(
  (acc, blog) => {
    acc[blog.key] = {
      title: blog.translations.tr.title,
      summary: blog.translations.tr.summary,
      content: blog.translations.tr.content,
      tags: blog.translations.tr.tags,
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

export const tr = {
  /** 🎯 HERO */
  hero: {
    title: "Blog",
    subtitle:
      "Çelik yapı teknolojileri, endüstriyel çözümler ve mühendislik dünyasından güncel içerikler.",
    searchPlaceholder: "Yazı, konu veya etiket ara...",
  },

  /** 🏷️ KATEGORİLER (FilterBar) */
  categories: {
    all: "Tümü",
    steel: "Çelik Yapılar",
    industrial: "Endüstriyel Çözümler",
    prefab: "Prefabrik Sistemler",
    commercial: "Ticari Yapılar",
    engineering: "Mühendislik & Teknoloji",
    construction: "İnşaat & Yapım",
    sustainability: "Sürdürülebilirlik",
    safety: "Güvenlik",
  },

  /** 📚 BLOG LİSTESİ (BlogList) */
  posts: {
    title: "Tüm Yazılar",
    noResults: "Aramanızla eşleşen bir sonuç bulunamadı.",
    readMore: "Devamını Oku",
    publishedOn: "Yayın Tarihi",
    category: "Kategori",
    author: "Yazar",
    related: "İlgili Yazılar",
    relatedDescription:
      "Aynı kategorigöreli diğer yazılarımızı da inceleyebilirsiniz.",
    readTimeUnit: " dk",
    items: blogItems,
  },

  /** 📈 BLOG SİDEBAR (BlogSidebar) */
  sidebar: {
    popular: "Popüler Yazılar",
    categories: "Kategoriler",
    share: "Paylaş",
    author: "Yazar",
    authorDescription:
      "Çelik yapı ve endüstriyel çözümler konusunda uzman ekibimizden içgörüler.",
    ctaTitle: "Daha Fazlasını Öğrenin",
    ctaText:
      "Endüstriyel çelik yapılar, mühendislik çözümleri ve üretim süreçleri hakkında daha fazla bilgi almak ister misiniz?",
    ctaButton: "İletişime Geçin",
  },

  /** 💬 BLOG YORUMLAR (BlogComments) */
  comments: {
    title: "Yorumlar",
    description: "Düşüncelerinizi paylaşın ve tartışmaya katılın.",
  },

  /** 🔢 BLOG PAGINATION (BlogPagination) */
  pagination: {
    previous: "Önceki",
    next: "Sonraki",
  },

  /** 🧩 BLOG FİLTRE BAR (BlogFilterBar) */
  filter: {
    label: "Kategoriler",
    reset: "Filtreyi Temizle",
  },
} as const;
