import { getAllFAQs } from "@/data/faq";

// Dinamik olarak FAQ'lardan Türkçe items objesi oluştur
const faqItems = getAllFAQs().reduce((acc, faq) => {
  acc[faq.key] = {
    question: faq.translations.tr.question,
    answer: faq.translations.tr.answer,
  };
  return acc;
}, {} as Record<string, { question: string; answer: string }>);

export const tr = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Çelik yapı ve konstrüksiyon hizmetlerimiz hakkında en çok merak edilen sorular ve cevapları",

  hero: {
    title: "Sıkça Sorulan Sorular",
    subtitle:
      "Çelik konstrüksiyon ve hizmetlerimiz hakkında en çok merak edilen sorulara cevap bulun",
    description:
      "Projeleriniz için gerekli tüm bilgileri burada bulabilir, sorularınızın yanıtlarını öğrenebilirsiniz.",
  },

  search: {
    placeholder: "Sorularda ara...",
    noResults: "Sonuç bulunamadı",
    resultsFound: "sonuç bulundu",
  },

  faqs: {
    title: "Sorular ve Cevaplar",
    subtitle: "En çok merak edilen sorularımız",
    items: faqItems,
  },

  sections: {
    main: {
      title: "Popüler Sorular",
      subtitle: "En çok sorulan sorular ve detaylı cevapları",
    },
    contact: {
      title: "Sorunuz mu var?",
      description:
        "Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin.",
      button: "İletişime Geç",
    },
  },

  // FAQ kategorileri
  categories: {
    all: "Tümü",
    general: "Genel Sorular",
    technical: "Teknik Sorular",
    process: "Süreç Hakkında",
    pricing: "Fiyatlandırma",
    maintenance: "Bakım",
    design: "Tasarım",
  },

  // FAQ meta bilgileri
  meta: {
    totalQuestions: "Toplam {count} soru",
    readTime: "Okuma süresi: {time} dakika",
    lastUpdated: "Son güncelleme: {date}",
  },
} as const;
