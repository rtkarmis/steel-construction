// Modüler çeviri sistemi
import { en as commonEn } from "@/locales/common/en";
import { tr as commonTr } from "@/locales/common/tr";
import { en as navigationEn } from "@/locales/navigation/en";
import { tr as navigationTr } from "@/locales/navigation/tr";
import { en as aboutEn } from "@/locales/pages/about/en";
import { tr as aboutTr } from "@/locales/pages/about/tr";
import { en as blogsEn } from "@/locales/pages/blog/en";
import { tr as blogsTr } from "@/locales/pages/blog/tr";
import { en as contactEn } from "@/locales/pages/contact/en";
import { tr as contactTr } from "@/locales/pages/contact/tr";
import { en as homeEn } from "@/locales/pages/home/en";
import { tr as homeTr } from "@/locales/pages/home/tr";
import { en as projectsEn } from "@/locales/pages/project/en";
import { tr as projectsTr } from "@/locales/pages/project/tr";
import { en as referencesEn } from "@/locales/pages/reference/en";
import { tr as referencesTr } from "@/locales/pages/reference/tr";
import { en as servicesEn } from "@/locales/pages/service/en";
import { tr as servicesTr } from "@/locales/pages/service/tr";
import { en as serviceDetailEn } from "@/locales/pages/serviceDetail/en";
import { tr as serviceDetailTr } from "@/locales/pages/serviceDetail/tr";

// Policy pages
import { en as cookiePolicyEn } from "@/locales/pages/cookiePolicy/en";
import { tr as cookiePolicyTr } from "@/locales/pages/cookiePolicy/tr";
import { en as faqEn } from "@/locales/pages/faq/en";
import { tr as faqTr } from "@/locales/pages/faq/tr";
import { en as kvkkEn } from "@/locales/pages/kvkk/en";
import { tr as kvkkTr } from "@/locales/pages/kvkk/tr";
import { en as privacyPolicyEn } from "@/locales/pages/privacyPolicy/en";
import { tr as privacyPolicyTr } from "@/locales/pages/privacyPolicy/tr";
import { en as sitemapEn } from "@/locales/pages/sitemap/en";
import { tr as sitemapTr } from "@/locales/pages/sitemap/tr";

// Modüler çeviri sistemi
export const translations = {
  tr: {
    common: commonTr,
    navigation: navigationTr,
    pages: {
      home: homeTr,
      about: aboutTr,
      blog: blogsTr,
      contact: contactTr,
      faq: faqTr,
      service: servicesTr,
      serviceDetail: serviceDetailTr,
      project: projectsTr,
      references: referencesTr,
      privacyPolicy: privacyPolicyTr,
      cookiePolicy: cookiePolicyTr,
      kvkk: kvkkTr,
      sitemap: sitemapTr,
    },
  },
  en: {
    common: commonEn,
    navigation: navigationEn,
    pages: {
      home: homeEn,
      about: aboutEn,
      blog: blogsEn,
      contact: contactEn,
      faq: faqEn,
      service: servicesEn,
      serviceDetail: serviceDetailEn,
      project: projectsEn,
      references: referencesEn,
      privacyPolicy: privacyPolicyEn,
      cookiePolicy: cookiePolicyEn,
      kvkk: kvkkEn,
      sitemap: sitemapEn,
    },
  },
};

export type Language = "tr" | "en";

// Yeni çeviri fonksiyonu
export function getTranslation(
  language: Language,
  section: "common" | "navigation",
  key: string
): string;
export function getTranslation(
  language: Language,
  section: "pages",
  page: string,
  key: string
): string;
export function getTranslation(
  language: Language,
  section: "common" | "navigation" | "pages",
  keyOrPage: string,
  key?: string
): string {
  try {
    // Language check
    if (!translations[language]) {
      console.warn(`Language not found: ${language}`);
      return key || keyOrPage;
    }

    if (section === "pages" && key) {
      const pageData =
        translations[language][section][
          keyOrPage as keyof (typeof translations)[typeof language]["pages"]
        ];

      if (!pageData) {
        console.warn(`Page not found: ${keyOrPage}`);
        return key;
      }

      const result = getNestedValue(pageData, key);
      return result || key;
    } else {
      const sectionData =
        translations[language][section as "common" | "navigation"];

      if (!sectionData) {
        console.warn(`Section not found: ${section}`);
        return keyOrPage;
      }

      const result = getNestedValue(sectionData, keyOrPage);
      return result || keyOrPage;
    }
  } catch (error) {
    console.warn(
      `Translation error: ${section}.${keyOrPage}${key ? `.${key}` : ""}`,
      error
    );
    return key || keyOrPage;
  }
}

// Nested object'lerden değer alma
function getNestedValue(obj: any, path: string): string | undefined {
  try {
    return path.split(".").reduce((current, key) => {
      if (current === null || current === undefined) {
        return undefined;
      }
      return current[key];
    }, obj);
  } catch (error) {
    console.warn(`Error accessing nested value for path: ${path}`, error);
    return undefined;
  }
}
