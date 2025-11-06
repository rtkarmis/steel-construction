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
    description: "Güvenoğlu Çelik & Metal anasayfası.",
  },
  {
    item: { label: "Hakkımızda", slug: "/hakkimizda", noContainer: true },
    description:
      "Güvenoğlu Çelik & Metal: 25+ yıllık tecrübe, mühendislik disiplini ve sertifikalı üretim ile endüstriyel yapılar için güvenilir çözüm ortağınız.",
  },
  {
    item: { label: "Hizmetlerimiz", slug: "/hizmetler", noContainer: true },
    description:
      "Çelik konstrüksiyon, fabrika imalatı, metal üretim, bakım ve mühendislik çözümlerinde Güvenoğlu kalitesi.",
  },
  {
    item: { label: "Projelerimiz", slug: "/projeler", noContainer: true },
    description: "Güvenoğlu Çelik & Metal projeleri.",
  },
  {
    item: { label: "Referanslarımız", slug: "/referanslar", noContainer: true },
    description: "Güvenoğlu Çelik & Metal referansları.",
  },
  {
    item: { label: "Blog", slug: "/blog", noContainer: true },
    description: "Güvenoğlu Çelik & Metal blog yazıları.",
  },
  {
    item: { label: "İletişim", slug: "/iletisim", noContainer: true },
    description: "Güvenoğlu Çelik & Metal iletişim bilgileri.",
  },
  {
    item: { label: "SSS", slug: "/sss" },
    description: "Güvenoğlu Çelik & Metal sıkça sorulan sorular.",
  },
  {
    item: { label: "Gizlilik Politikası", slug: "/gizlilik-politikasi" },
    description: "Güvenoğlu Çelik & Metal gizlilik politikası.",
  },
  {
    item: { label: "Çerez Politikası", slug: "/cerez-politikasi" },
    description: "Güvenoğlu Çelik & Metal çerez politikası.",
  },
  {
    item: { label: "KVKK Aydınlatma Metni", slug: "/kvkk-aydinlatma-metni" },
    description: "Güvenoğlu Çelik & Metal KVKK aydınlatma metni.",
  },
  {
    item: { label: "Site Haritası", slug: "/site-haritasi" },
    description: "Güvenoğlu Çelik & Metal site haritası.",
  },
  // Hizmet detay sayfaları - container olmasın
  ...getAllServices().map((service) => ({
    item: {
      label: service.translations.tr.name,
      slug: service.slug,
      noContainer: true,
    },
    description: `${service.translations.tr.name} - ${service.translations.tr.description}`,
  })),
  // Proje detay sayfaları - container olmasın
  ...getAllProjects().map((project) => ({
    item: {
      label: project.translations.tr.name,
      slug: project.slug,
      noContainer: true,
    },
    description: `${project.translations.tr.name} - ${project.translations.tr.description}`,
  })),
  // Blog detay sayfaları - container olmasın
  ...getAllBlogPosts().map((blog) => ({
    item: {
      label: blog.translations.tr.title,
      slug: `/blog/${blog.slug}`,
      noContainer: true,
    },
    description: `${blog.translations.tr.title} - ${blog.translations.tr.summary}`,
  })),
];
