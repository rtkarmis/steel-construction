import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    key: "industrial-factory",
    translations: {
      tr: {
        name: "Endüstriyel Fabrika Yapımı",
        description:
          "Modern üretim standartlarına uygun olarak tasarlanan bu proje, 5000 m² çelik konstrüksiyon alanı ve tam otomatik üretim hatlarını içermektedir.",
        location: "Bolu, Türkiye",
      },
      en: {
        name: "Industrial Factory Construction",
        description:
          "Designed in accordance with modern production standards, this project includes a 5000 m² steel structure and fully automated production lines.",
        location: "Bolu, Turkey",
      },
    },
    year: 2023,
    category: "Endüstriyel Tesis",
    slug: "/projeler/endustriyel-fabrika-yapimi",
    gallery: [
      "/images/projects/industrial-factory/industrial-factory.webp",
      "/images/projects/industrial-factory/industrial-factory-1.webp",
      "/images/projects/industrial-factory/industrial-factory-2.webp",
      "/images/projects/industrial-factory/industrial-factory-3.webp",
    ],
    references: ["bolu-cimento"],
  },
  {
    id: 2,
    key: "prefabricated-warehouse",
    translations: {
      tr: {
        name: "Prefabrik Depo Projesi",
        description:
          "Kısa sürede tamamlanan prefabrik depo projesi, dayanıklı çelik yapı sistemi ve enerji verimliliğiyle öne çıkmaktadır.",
        location: "Düzce, Türkiye",
      },
      en: {
        name: "Prefabricated Warehouse Project",
        description:
          "This prefabricated warehouse project, completed in a short time, stands out with its durable steel structure and energy efficiency.",
        location: "Düzce, Turkey",
      },
    },
    year: 2024,
    category: "Depo & Lojistik",
    slug: "/projeler/prefabrik-depo-projesi",
    gallery: [
      "/images/projects/prefabricated-warehouse.webp",
      "/images/projects/prefabricated-warehouse-1.webp",
      "/images/projects/prefabricated-warehouse-2.webp",
    ],
    references: ["eflatun-teknoloji"],
  },
  {
    id: 3,
    key: "steel-hangar",
    translations: {
      tr: {
        name: "Çelik Hangar Yapımı",
        description:
          "Geniş açıklıklı çelik hangar yapısı, yüksek dayanım ve uzun ömürlü kullanım hedefiyle tasarlanmıştır.",
        location: "Sakarya, Türkiye",
      },
      en: {
        name: "Steel Hangar Construction",
        description:
          "A wide-span steel hangar structure designed for high durability and long-lasting performance.",
        location: "Sakarya, Turkey",
      },
    },
    year: 2022,
    category: "Havacılık & Endüstriyel",
    slug: "/projeler/celik-hangar-yapimi",
    gallery: [
      "/images/projects/steel-hangar.webp",
      "/images/projects/steel-hangar-1.webp",
      "/images/projects/steel-hangar-2.webp",
    ],
    references: ["erciyas-holding"],
  },
  {
    id: 4,
    key: "commercial-building",
    translations: {
      tr: {
        name: "Ticari Yapı Projesi",
        description:
          "Modern tasarım anlayışıyla inşa edilen bu çelik yapı, ticari faaliyetler için geniş kullanım alanı sağlamaktadır.",
        location: "İstanbul, Türkiye",
      },
      en: {
        name: "Commercial Building Project",
        description:
          "Built with a modern design approach, this steel structure provides a large and functional area for commercial operations.",
        location: "Istanbul, Turkey",
      },
    },
    year: 2024,
    category: "Ticari Yapı",
    slug: "/projeler/ticari-yapi-projesi",
    gallery: [
      "/images/projects/commercial-building.webp",
      "/images/projects/commercial-building-1.webp",
      "/images/projects/commercial-building-2.webp",
      "/images/projects/commercial-building-3.webp",
    ],
    references: ["bolu-cimento"],
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
