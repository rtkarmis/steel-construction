import { MenuItem, PageMetadataItem } from "@/types/common";

export const headerMenuLinks: MenuItem[] = [
  { label: "Anasayfa", slug: "/" },
  { label: "Hakkımızda", slug: "/hakkimizda" },
  { label: "İletişim", slug: "/iletisim" },
];

export const footerMenuQuickAccessLinks: MenuItem[] = [
  { label: "Hakkımızda", slug: "/hakkimizda" },
];

export const footerMenuInformationLinks: MenuItem[] = [
  { label: "SSS", slug: "/sss" },
];

export const policyMenuLinks: MenuItem[] = [
  { label: "Gizlilik Politikası", slug: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", slug: "/cerez-politikasi" },
  { label: "KVKK Aydınlatma Metni", slug: "/kvkk-aydinlatma-metni" },
  { label: "Site Haritası", slug: "/site-haritasi" },
];

export const allLinks: PageMetadataItem[] = [
  {
    item: { label: "Anasayfa", slug: "/" },
    description: "Güvenoğlu Çelik & Metal anasayfası.",
  },
  {
    item: { label: "Hakkımızda", slug: "/hakkimizda" },
    description: "Güvenoğlu Çelik & Metal hakkında bilgi.",
  },
  {
    item: { label: "İletişim", slug: "/iletisim" },
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
];
