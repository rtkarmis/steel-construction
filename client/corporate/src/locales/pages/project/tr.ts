import { projects } from "@/data/project";
import { getAllReferences } from "@/data/reference";

// Referans verilerini key'e göre map'le
const referencesMap = getAllReferences().reduce((acc, ref) => {
  acc[ref.key] = {
    name: ref.translations.tr.name,
    logo: ref.logo,
    website: ref.website,
  };
  return acc;
}, {} as Record<string, { name: string; logo: string; website?: string }>);

// Dinamik olarak projects'den items objesi oluştur
const projectItems = projects.reduce((acc, project) => {
  acc[project.key] = {
    name: project.translations.tr.name,
    description: project.translations.tr.description,
    location: project.translations.tr.location,
    references:
      project.references
        ?.map((refKey) => referencesMap[refKey])
        .filter(Boolean) || [],
  };
  return acc;
}, {} as Record<string, { name: string; description: string; location: string; references: Array<{ name: string; logo: string; website?: string }> }>);

export const tr = {
  hero: {
    title: "Projelerimiz",
    subtitle:
      "Kalite, mühendislik ve güvenilirliği her aşamada ön planda tutarak tamamladığımız seçkin projelerimizden bazıları.",
  },
  projects: {
    title: "Tamamlanan Projeler",
    subtitle:
      "Sanayi tesislerinden ticari yapılara, hangarlardan prefabrik çözümlere kadar geniş bir yelpazede projeler gerçekleştirdik.",
    detailButton: "Projeyi Gör",
    items: projectItems,
    detail: {
      location: "Konum",
      year: "Tamamlanma Yılı",
      category: "Kategori",
      gallery: "Proje Görselleri",
      partners: "İş Ortakları",
      about: "Proje Hakkında",
    },
  },
  categories: {
    all: "Tümü",
    industrial: "Endüstriyel Tesisler",
    warehouse: "Depo & Antrepo Yapıları",
    hangar: "Hangar Projeleri",
    commercial: "Ticari Yapılar",
    prefab: "Prefabrik Yapılar",
    steel: "Çelik Konstrüksiyon",
  },
  process: {
    title: "Proje Yönetim Sürecimiz",
    subtitle:
      "Projelerinizi planlamadan teslimata kadar mühendislik standartlarında yönetiyoruz.",
    steps: {
      discovery: {
        title: "Keşif ve Analiz",
        description:
          "Proje ihtiyaçlarını analiz eder, uygun mühendislik çözümlerini belirleriz.",
      },
      design: {
        title: "Tasarım ve Planlama",
        description:
          "Çelik yapı sistemlerini en verimli şekilde planlar, üretim öncesi tüm detayları netleştiririz.",
      },
      production: {
        title: "Üretim",
        description:
          "Modern tesislerimizde yüksek hassasiyetli üretim süreçlerini yönetiriz.",
      },
      delivery: {
        title: "Teslimat",
        description:
          "Projeyi zamanında, güvenle ve eksiksiz şekilde teslim ederiz.",
      },
    },
  },
  cta: {
    title: "Yeni projeniz için birlikte çalışalım",
    desc: "Endüstriyel tesis, depo veya özel çelik yapı projeleriniz için uzman ekibimizle iletişime geçin.",
    button: "Teklif Al",
  },
} as const;
