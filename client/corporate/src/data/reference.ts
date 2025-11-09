import { Reference } from "@/types/reference";

export const references: Reference[] = [
  {
    id: 1,
    key: "erpilic",
    translations: {
      tr: {
        name: "Erpiliç",
        description: "Endüstriyel yapı projelerinde çözüm ortağımız.",
      },
      en: {
        name: "Erpiliç",
        description: "Our trusted partner in industrial construction projects.",
      },
    },
    logo: "/images/reference/erpilic.webp",
    website: "https://erpilic.com.tr",
  },
  {
    id: 2,
    key: "ersan-tarim",
    translations: {
      tr: {
        name: "Ersan Tarım",
        description: "Tarım makineleri ve ekipmanları konusunda iş ortağımız.",
      },
      en: {
        name: "Ersan Agriculture",
        description: "Our partner in agricultural machinery and equipment.",
      },
    },
    logo: "/images/reference/ersan.webp",
    website: "https://ersantarim.com",
  },
  {
    id: 3,
    key: "guler-makina-isitma-sogutma",
    translations: {
      tr: {
        name: "Güler Makina Isıtma Soğutma",
        description: "Çelik konstrüksiyon çözümleri için üretim partnerimiz.",
      },
      en: {
        name: "Güler Makina Isıtma Soğutma",
        description: "Our production partner for steel construction solutions.",
      },
    },
    logo: "/images/reference/guler.webp",
    website: "https://gulerisitmasogutma.com.tr",
  },
];

export const getAllReferences = (): Reference[] => {
  return references;
};

// Anasayfa veya alt sayfalarda sınırlı liste
export const getHomePageReferences = (limit: number = 4): Reference[] => {
  return references.slice(0, limit);
};
