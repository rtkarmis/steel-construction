import { Reference } from "@/types/reference";

export const references: Reference[] = [
  {
    id: 1,
    key: "bolu-cimento",
    translations: {
      tr: {
        name: "Bolu Çimento",
        description: "Endüstriyel yapı projelerinde çözüm ortağımız.",
      },
      en: {
        name: "Bolu Cement",
        description: "Our trusted partner in industrial construction projects.",
      },
    },
    logo: "/images/references/bolu-cimento.webp",
    website: "https://bolucimento.com.tr",
  },
  {
    id: 2,
    key: "eflatun-teknoloji",
    translations: {
      tr: {
        name: "Eflatun Teknoloji",
        description:
          "Teknolojik altyapı ve otomasyon sistemlerinde iş ortağımız.",
      },
      en: {
        name: "Eflatun Technology",
        description:
          "Our partner in technological infrastructure and automation systems.",
      },
    },
    logo: "/images/references/eflatun.webp",
    website: "https://eflatunteknoloji.com",
  },
  {
    id: 3,
    key: "erciyas-holding",
    translations: {
      tr: {
        name: "Erciyas Holding",
        description: "Çelik konstrüksiyon çözümleri için üretim partnerimiz.",
      },
      en: {
        name: "Erciyas Holding",
        description: "Our production partner for steel construction solutions.",
      },
    },
    logo: "/images/references/erciyas.webp",
    website: "https://erciyasholding.com.tr",
  },
];

export const getAllReferences = (): Reference[] => {
  return references;
};

// Anasayfa veya alt sayfalarda sınırlı liste
export const getHomePageReferences = (limit: number = 4): Reference[] => {
  return references.slice(0, limit);
};
