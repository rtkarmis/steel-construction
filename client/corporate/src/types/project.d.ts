export interface Project {
  id: number;
  key: string; // Proje anahtarı (slug için)
  translations: {
    tr: {
      name: string;
      description: string;
      location: string;
    };
    en: {
      name: string;
      description: string;
      location: string;
    };
  };
  year: number;
  category: string;
  slug: string;
  gallery: string[];
  references: string[]; // Referanslar için alan
}
