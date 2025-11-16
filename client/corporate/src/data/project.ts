import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    key: "erpilic-kuluckahane",
    translations: {
      tr: {
        name: "Erpiliç Kuluçkahane Tesisi",
        description:
          "Güvenoğlu Çelik & Metal tarafından Bolu'da Erpiliç için inşa edilen modern kuluçkahane yapısı, yüksek dayanımlı hafif çelik konstrüksiyon ve hijyenik iç mekan tasarımıyla öne çıkmaktadır. Projede ısı yalıtımlı panel sistemleri ve havalandırma uyumlu çatı çözümleri kullanılmıştır.",
        location: "Bolu, Türkiye",
      },
      en: {
        name: "Erpilic Hatchery Facility",
        description:
          "A modern hatchery facility built in Bolu by Güvenoğlu Çelik & Metal for Erpilic, featuring high-strength light steel structure and hygienic interior design. The project includes insulated panel systems and roof ventilation solutions.",
        location: "Bolu, Turkey",
      },
    },
    year: 2024,
    category: "Endüstriyel Tarım Tesisi",
    slug: "/projeler/erpilic-kuluckahane-tesisi",
    gallery: [
      "/images/project/erpilic-kuluckahane/erpilic.webp",
      "/images/project/erpilic-kuluckahane/erpilic-2.webp",
      "/images/project/erpilic-kuluckahane/erpilic-3.webp",
    ],
    references: ["erpilic"],
  },

  {
    id: 2,
    key: "ersan-tarim-uretim-tesisi",
    translations: {
      tr: {
        name: "Ersan Tarım Üretim Tesisi",
        description:
          "Ersan Tarım için inşa edilen bu üretim tesisi, modern hafif çelik yapı teknolojisiyle enerji verimliliği, uzun ömür ve sürdürülebilir üretim altyapısı sağlamaktadır. Güvenoğlu Çelik & Metal tarafından anahtar teslim şekilde tamamlanmıştır.",
        location: "Ankara, Türkiye",
      },
      en: {
        name: "Ersan Agriculture Production Facility",
        description:
          "A modern agricultural production facility built for Ersan Tarım with energy-efficient light steel structure, ensuring long-term durability and sustainable production infrastructure. Completed turnkey by Güvenoğlu Çelik & Metal.",
        location: "Ankara, Turkey",
      },
    },
    year: 2024,
    category: "Üretim Tesisi",
    slug: "/projeler/ersan-tarim-uretim-tesisi",
    gallery: [
      "/images/project/ersan-tarim-uretim-tesisi/ersan-tarim.webp",
      "/images/project/ersan-tarim-uretim-tesisi/ersan-tarim-2.webp",
      "/images/project/ersan-tarim-uretim-tesisi/ersan-tarim-3.webp",
    ],
    references: ["ersan-tarim"],
  },

  {
    id: 3,
    key: "guler-isitma-celik-kapi-pencere",
    translations: {
      tr: {
        name: "Güler Makina Isıtma Çelik Kapı & Pencere Montajı",
        description:
          "Güler Makina Isıtma, Soğutma ve Havalandırma firması için gerçekleştirilen bu proje, çelik kapı ve pencere montajında yüksek dayanım, yalıtım ve estetik detaylarıyla öne çıkmaktadır. Endüstriyel ortama uygun özel çelik doğrama sistemleri uygulanmıştır.",
        location: "Bolu, Türkiye",
      },
      en: {
        name: "Güler Machine Heating Steel Door & Window Installation",
        description:
          "A project completed for Güler Machine Heating, Cooling & Ventilation, featuring high-durability steel door and window installations designed for industrial environments with advanced insulation and aesthetic finishing.",
        location: "Bolu, Turkey",
      },
    },
    year: 2024,
    category: "Çelik Montaj",
    slug: "/projeler/guler-isitma-celik-kapi-pencere",
    gallery: [
      "/images/project/guler-isitma-celik-kapi-pencere/steel-door.webp",
      "/images/project/guler-isitma-celik-kapi-pencere/steel-window.webp",
      "/images/project/guler-isitma-celik-kapi-pencere/steel-installation.webp",
    ],
    references: ["guler-makina-isitma-sogutma"],
  },
];

// Tüm projeleri döndür
export const getAllProjects = (): Project[] => {
  return projects;
};

// Anasayfa için sınırlı sayıda proje döndür (en yeni 3 proje)
export const getHomePageProjects = (limit: number = 3): Project[] => {
  return projects
    .sort((a, b) => b.year - a.year) // Yıla göre sırala (en yeni önce)
    .slice(0, limit); // İlk N tanesini al
};
