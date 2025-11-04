export interface FAQItem {
  id: number;
  key: string;
  translations: {
    tr: { question: string; answer: string };
    en: { question: string; answer: string };
  };
}
