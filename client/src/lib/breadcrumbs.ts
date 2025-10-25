import { getPageBreadcrumbs } from "@/data/pages";
import { BreadcrumbItem } from "@/types/common";

// Merkezi breadcrumb fonksiyonu
export const getBreadcrumbs = (path: string): BreadcrumbItem[] => {
  return getPageBreadcrumbs(path);
};

// Geriye dönük uyumluluk için mevcut fonksiyonlar
export const buildAboutBreadcrumb = (): BreadcrumbItem[] => {
  return getBreadcrumbs("/hakkimizda");
};

export const buildContactBreadcrumb = (): BreadcrumbItem[] => {
  return getBreadcrumbs("/iletisim");
};

export const buildSSSBreadcrumb = (): BreadcrumbItem[] => {
  return getBreadcrumbs("/sss");
};

export const buildSitemapBreadcrumb = (): BreadcrumbItem[] => {
  return getBreadcrumbs("/site-haritasi");
};

export const buildPolicyBreadcrumb = (
  policyTitle: string
): BreadcrumbItem[] => {
  switch (policyTitle) {
    case "Gizlilik Politikası":
      return getBreadcrumbs("/gizlilik-politikasi");
    case "Çerez Politikası":
      return getBreadcrumbs("/cerez-politikasi");
    case "KVKK Aydınlatma Metni":
      return getBreadcrumbs("/kvkk-aydinlatma-metni");
    default:
      return [
        { label: "Anasayfa", slug: "/" },
        { label: "Politikalar", slug: "/politikalar" },
        { label: policyTitle },
      ];
  }
};
