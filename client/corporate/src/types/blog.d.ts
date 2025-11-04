export interface BlogPost {
  id: number;
  key: string; // unique key for slug
  category: string;
  coverImage: string;
  publishedAt: string; // ISO format
  author: string;
  slug: string;
  translations: {
    tr: {
      title: string;
      summary: string;
      content: string;
      metaTitle: string;
      metaDescription: string;
      tags: string[];
    };
    en: {
      title: string;
      summary: string;
      content: string;
      metaTitle: string;
      metaDescription: string;
      tags: string[];
    };
  };
}
