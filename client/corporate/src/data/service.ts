import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: 1,
    icon: "Building2",
    slug: "/hizmetler/celik-konstruksiyon",
    key: "steel-construction",
    translations: {
      tr: {
        name: "Çelik Konstrüksiyon",
        description:
          "Endüstriyel tesisler, fabrikalar ve ticari yapılar için dayanıklı çelik konstrüksiyon çözümleri.",
        detailDescription:
          "Endüstriyel, ticari ve mimari projelerde çelik konstrüksiyon sistemleriyle maksimum dayanıklılık, estetik ve mühendislik kalitesini bir araya getiriyoruz. Üretimden montaja kadar tüm aşamalarda uluslararası standartlara uygun çözümler sunuyoruz.",
      },
      en: {
        name: "Steel Construction",
        description:
          "Durable steel construction solutions for industrial facilities, factories and commercial buildings.",
        detailDescription:
          "We combine maximum durability, aesthetics, and engineering excellence with our steel construction systems for industrial, commercial, and architectural projects. From production to installation, we deliver solutions compliant with international standards.",
      },
    },
  },
  {
    id: 2,
    icon: "Warehouse",
    slug: "/hizmetler/depo-antrepo",
    key: "warehouse",
    translations: {
      tr: {
        name: "Depo ve Antrepo",
        description:
          "Geniş açıklıklı depo ve antrepo yapıları için optimum çelik çerçeve sistemleri.",
        detailDescription:
          "Depo ve antrepo yapılarında geniş açıklık, esnek kullanım alanı ve uzun ömürlü çözümlerle işletmelerin ihtiyaçlarına özel projeler geliştiriyoruz.",
      },
      en: {
        name: "Warehouse & Storage",
        description:
          "Optimum steel frame systems for wide-span warehouse and storage structures.",
        detailDescription:
          "For warehouse and storage facilities, we design durable steel structures with wide spans and flexible usage areas tailored to your business needs.",
      },
    },
  },
  {
    id: 3,
    icon: "Plane",
    slug: "/hizmetler/hangar",
    key: "hangar",
    translations: {
      tr: {
        name: "Hangar Yapıları",
        description:
          "Havacılık ve endüstriyel hangar projeleri için özel tasarım çelik yapılar.",
        detailDescription:
          "Havacılık, savunma ve endüstriyel alanlar için yüksek açıklıklı ve özel ölçülere sahip hangar yapılarını mühendislik odaklı tasarlıyor ve üretiyoruz.",
      },
      en: {
        name: "Hangar Structures",
        description:
          "Custom designed steel structures for aviation and industrial hangar projects.",
        detailDescription:
          "We design and manufacture hangar structures with large spans and custom dimensions for aviation, defense, and industrial applications with a strong engineering foundation.",
      },
    },
  },
  {
    id: 4,
    icon: "Home",
    slug: "/hizmetler/prefabrik",
    key: "prefab",
    translations: {
      tr: {
        name: "Prefabrik Yapılar",
        description:
          "Hızlı montaj ve ekonomik çözümler için prefabrik çelik yapı sistemleri.",
        detailDescription:
          "Prefabrik çelik yapılar, kısa sürede kurulum, düşük maliyet ve yüksek kalite avantajı sağlar. Modüler sistemlerle hızlı teslimat gerçekleştiriyoruz.",
      },
      en: {
        name: "Prefabricated Buildings",
        description:
          "Prefabricated steel building systems for fast assembly and economical solutions.",
        detailDescription:
          "Prefabricated steel structures provide fast installation, low cost, and high quality. We ensure quick delivery through modular systems.",
      },
    },
  },
  {
    id: 5,
    icon: "Factory",
    slug: "/hizmetler/endustriyel",
    key: "industrial",
    translations: {
      tr: {
        name: "Endüstriyel Tesisler",
        description:
          "Üretim tesisleri ve fabrikalar için fonksiyonel çelik yapı çözümleri.",
        detailDescription:
          "Üretim tesisleri, atölyeler ve endüstriyel binalar için optimize edilmiş çelik yapı çözümleri sunarak maksimum verimlilik sağlıyoruz.",
      },
      en: {
        name: "Industrial Facilities",
        description:
          "Functional steel structure solutions for production facilities and factories.",
        detailDescription:
          "We offer optimized steel structure solutions for production plants, workshops, and industrial facilities to maximize efficiency.",
      },
    },
  },
  {
    id: 6,
    icon: "Building",
    slug: "/hizmetler/ticari",
    key: "commercial",
    translations: {
      tr: {
        name: "Ticari Yapılar",
        description:
          "Ofis, mağaza, AVM ve ticari komplekslerde modern mimariyle bütünleşen çelik yapı sistemleri.",
        detailDescription:
          "Ofis, mağaza, AVM ve ticari komplekslerde modern mimariyle bütünleşen çelik yapı sistemleri geliştiriyoruz.",
      },
      en: {
        name: "Commercial Buildings",
        description:
          "Modern steel structures for shopping centers, offices and commercial complexes.",
        detailDescription:
          "We develop modern steel structures integrated with architectural design for offices, shopping centers, and commercial complexes.",
      },
    },
  },
];

// Tüm hizmetleri döndür
export const getAllServices = (): Service[] => {
  return services;
};

// Anasayfa için sınırlı sayıda hizmet döndür (ilk N hizmet)
export const getHomePageServices = (limit: number = 3): Service[] => {
  return services.slice(0, limit);
};
