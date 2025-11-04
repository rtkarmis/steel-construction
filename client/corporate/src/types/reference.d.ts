export interface Reference {
  id: number;
  key: string;
  translations: {
    tr: {
      name: string;
      description: string;
    };
    en: {
      name: string;
      description: string;
    };
  };
  logo: string;
  website?: string;
}
