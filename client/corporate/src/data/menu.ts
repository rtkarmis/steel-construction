import { MenuItem, PageMetadataItem } from "@/types/common";
import { getAllBlogPosts } from "./blog";
import { getAllProjects } from "./project";
import { getAllServices } from "./service";

// Menu item keys for translation
export const menuKeys = {
  home: "navigation.home",
  about: "navigation.about",
  services: "navigation.services",
  projects: "navigation.projects",
  references: "navigation.references",
  blog: "navigation.blog",
  contact: "navigation.contact",
  faq: "navigation.faq",
  privacyPolicy: "navigation.privacyPolicy",
  cookiePolicy: "navigation.cookiePolicy",
  kvkk: "navigation.kvkk",
  sitemap: "navigation.sitemap",
};

export const headerMenuLinks: MenuItem[] = [
  {
    label: "Anasayfa",
    slug: "/",
    translationKey: menuKeys.home,
  },
  {
    label: "Hakkımızda",
    slug: "/hakkimizda",
    translationKey: menuKeys.about,
  },
  {
    label: "Hizmetlerimiz",
    slug: "/hizmetler",
    translationKey: menuKeys.services,
  },
  {
    label: "Projelerimiz",
    slug: "/projeler",
    translationKey: menuKeys.projects,
  },
  {
    label: "Referanslarımız",
    slug: "/referanslar",
    translationKey: menuKeys.references,
  },
  { label: "Blog", slug: "/blog", translationKey: menuKeys.blog },
  { label: "İletişim", slug: "/iletisim", translationKey: menuKeys.contact },
];

export const footerMenuQuickAccessLinks: MenuItem[] = [
  { label: "Hakkımızda", slug: "/hakkimizda", translationKey: menuKeys.about },
  {
    label: "Hizmetlerimiz",
    slug: "/hizmetler",
    translationKey: menuKeys.services,
  },
  {
    label: "Projelerimiz",
    slug: "/projeler",
    translationKey: menuKeys.projects,
  },
  {
    label: "Referanslarımız",
    slug: "/referanslar",
    translationKey: menuKeys.references,
  },
];

export const footerMenuInformationLinks: MenuItem[] = [
  { label: "Blog", slug: "/blog", translationKey: menuKeys.blog },
  { label: "SSS", slug: "/sss", translationKey: menuKeys.faq },
];

export const policyMenuLinks: MenuItem[] = [
  {
    label: "Gizlilik Politikası",
    slug: "/gizlilik-politikasi",
    translationKey: menuKeys.privacyPolicy,
  },
  {
    label: "Çerez Politikası",
    slug: "/cerez-politikasi",
    translationKey: menuKeys.cookiePolicy,
  },
  {
    label: "KVKK Aydınlatma Metni",
    slug: "/kvkk-aydinlatma-metni",
    translationKey: menuKeys.kvkk,
  },
  {
    label: "Site Haritası",
    slug: "/site-haritasi",
    translationKey: menuKeys.sitemap,
  },
];

export const allLinks: PageMetadataItem[] = [
  {
    item: { label: "Anasayfa", slug: "/", noContainer: true },
    description:
      "Güvenoğlu Çelik & Metal: 10 yıllık mühendislik tecrübesiyle endüstriyel çelik konstrüksiyon, fabrika imalatı ve metal üretim çözümlerinde güvenilir ortağınız.",
  },
  {
    item: { label: "Hakkımızda", slug: "/hakkimizda", noContainer: true },
    description:
      "Çelik ve metal yapılar alanında 10 yıllık uzmanlık. Güvenoğlu, mühendislik disipliniyle tasarım, üretim ve montajda kaliteyi garanti eder.",
  },
  {
    item: { label: "Hizmetlerimiz", slug: "/hizmetler", noContainer: true },
    description:
      "Çelik konstrüksiyon, fabrika imalatı, endüstriyel yapı, bakım ve mühendislik çözümleriyle üretimde maksimum verimlilik sağlayın.",
  },
  {
    item: { label: "Projelerimiz", slug: "/projeler", noContainer: true },
    description:
      "Endüstriyel tesislerden ticari komplekslere: Güvenoğlu Çelik & Metal projeleriyle modern, dayanıklı ve mühendislik odaklı çözümler.",
  },
  {
    item: { label: "Referanslarımız", slug: "/referanslar", noContainer: true },
    description:
      "Türkiye genelinde tamamlanan endüstriyel çelik yapı ve fabrika projelerimizle güvenin kanıtı: Güvenoğlu Çelik & Metal referansları.",
  },
  {
    item: { label: "Blog", slug: "/blog", noContainer: true },
    description:
      "Çelik yapı teknolojileri, mühendislik trendleri ve endüstriyel tasarım yaklaşımlarına dair uzman içerikler Güvenoğlu Blog’da.",
  },
  {
    item: { label: "İletişim", slug: "/iletisim", noContainer: true },
    description:
      "Güvenoğlu Çelik & Metal ile iletişime geçin. Bolu merkezli mühendislik firmamızdan projeleriniz için teklif alın.",
  },
  {
    item: { label: "SSS", slug: "/sss" },
    description:
      "Çelik konstrüksiyon, proje süreçleri, teslim süresi ve maliyetler hakkında en çok merak edilen soruların cevapları burada.",
  },
  {
    item: { label: "Gizlilik Politikası", slug: "/gizlilik-politikasi" },
    description:
      "Güvenoğlu Çelik & Metal olarak kişisel verilerinizi KVKK’ya uygun şekilde koruyor, gizliliğinizi önceliğimiz yapıyoruz.",
  },
  {
    item: { label: "Çerez Politikası", slug: "/cerez-politikasi" },
    description:
      "Web sitemizde kullanıcı deneyimini iyileştirmek için çerez kullanıyoruz. Detaylı bilgi için çerez politikamızı inceleyin.",
  },
  {
    item: { label: "KVKK Aydınlatma Metni", slug: "/kvkk-aydinlatma-metni" },
    description:
      "KVKK uyarınca kişisel verilerinizin işlenme amaçları, hukuki dayanakları ve haklarınız hakkında bilgi alın.",
  },
  {
    item: { label: "Site Haritası", slug: "/site-haritasi" },
    description:
      "Güvenoğlu Çelik & Metal web sitesindeki tüm sayfaların bağlantılarını kolayca keşfedin. Hızlı erişim için site haritası.",
  },
  // Hizmet detay sayfaları - container olmasın
  ...getAllServices().map((service) => ({
    item: {
      label: service.translations.tr.name,
      slug: service.slug,
      noContainer: true,
    },
    description: `${service.translations.tr.name} – ${service.translations.tr.description} Güvenoğlu Çelik & Metal mühendislik kalitesiyle, projelerinizde maksimum dayanım ve estetik sağlayın.`,
  })),
  // Proje detay sayfaları - container olmasın
  ...getAllProjects().map((project) => ({
    item: {
      label: project.translations.tr.name,
      slug: project.slug,
      noContainer: true,
    },
    description: `${project.translations.tr.name} – ${project.translations.tr.description} Güvenoğlu Çelik & Metal güvencesiyle modern, dayanıklı ve enerji verimli çözümler.`,
  })),
  // Blog detay sayfaları - container olmasın
  ...getAllBlogPosts().map((blog) => ({
    item: {
      label: blog.translations.tr.title,
      slug: `/blog/${blog.slug}`,
      noContainer: true,
    },
    description: `${blog.translations.tr.metaDescription}`,
  })),
];
