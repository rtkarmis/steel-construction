export interface ServiceTranslation {
  name: string;
  description: string;
  detailDescription: string;
}

export interface Service {
  id: number;
  icon: string;
  slug: string;
  key: string;
  translations: {
    tr: ServiceTranslation;
    en: ServiceTranslation;
  };
}
