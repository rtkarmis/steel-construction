import { headerMenuLinks, policyMenuLinks } from "@/data/menu";
import { BreadcrumbItem } from "@/types/common";

/**
 * Generates breadcrumb items for a given path
 * Uses menu data to ensure consistency with navigation
 */
export const getBreadcrumbs = (path: string): BreadcrumbItem[] => {
  // Always start with home
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Anasayfa", slug: "/" }];

  // If it's home page, return just home
  if (path === "/" || path === "") {
    return breadcrumbs;
  }

  // Find the page in header menu
  const headerPage = headerMenuLinks.find((link) => link.slug === path);
  if (headerPage) {
    breadcrumbs.push({ label: headerPage.label, slug: path });
    return breadcrumbs;
  }

  // Find the page in policy menu
  const policyPage = policyMenuLinks.find((link) => link.slug === path);
  if (policyPage) {
    breadcrumbs.push({ label: policyPage.label, slug: path });
    return breadcrumbs;
  }

  // Fallback for unknown paths
  return breadcrumbs;
};

/**
 * Helper function to get breadcrumbs with translation support for UI
 * Returns breadcrumbs with translated labels for UI components
 */
export const getBreadcrumbsForUI = (
  path: string,
  getTranslation: (key: string) => string
): BreadcrumbItem[] => {
  const baseBreadcrumbs = getBreadcrumbs(path);

  return baseBreadcrumbs.map((item) => ({
    label:
      item.slug === "/"
        ? getTranslation("navigation.home")
        : getTranslatedLabel(item.label, getTranslation),
    slug: item.slug,
    href: item.slug,
  }));
};

/**
 * Get breadcrumbs for Schema (always Turkish links and labels)
 * Schema should use actual Turkish URLs since English pages don't exist
 */
export const getBreadcrumbsForSchema = (path: string): BreadcrumbItem[] => {
  return getBreadcrumbs(path); // Always return Turkish labels and links
};

/**
 * Helper function to translate menu labels
 */
const getTranslatedLabel = (
  turkishLabel: string,
  getTranslation: (key: string) => string
): string => {
  const labelMap: Record<string, string> = {
    Hakkımızda: getTranslation("navigation.about"),
    Hizmetlerimiz: getTranslation("navigation.services"),
    Projelerimiz: getTranslation("navigation.projects"),
    Referanslarımız: getTranslation("navigation.references"),
    Medya: getTranslation("navigation.media"),
    Blog: getTranslation("navigation.blog"),
    İletişim: getTranslation("navigation.contact"),
    SSS: getTranslation("navigation.faq"),
    "Gizlilik Politikası": getTranslation("navigation.privacyPolicy"),
    "Çerez Politikası": getTranslation("navigation.cookiePolicy"),
    "KVKK Aydınlatma Metni": getTranslation("navigation.kvkk"),
    "Site Haritası": getTranslation("navigation.sitemap"),
  };

  return labelMap[turkishLabel] || turkishLabel;
};
