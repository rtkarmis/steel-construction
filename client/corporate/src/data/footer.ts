import {
  footerMenuInformationLinks,
  footerMenuQuickAccessLinks,
  policyMenuLinks,
} from "@/data/menu";
import { siteConfig } from "@/lib/seo";
import { FooterData } from "@/types/common";

export const footerData: FooterData = {
  company: {
    name: siteConfig.siteName,
    nameEn: siteConfig.siteNameEn,
    description:
      "Çelik yapı sektöründe 25 yıllık deneyimimiz ile kaliteli, güvenilir ve yenilikçi çözümler sunarak projelerinizi hayata geçiriyoruz.",
    descriptionEn:
      "With our 25 years of experience in the steel construction industry, we bring your projects to life by providing quality, reliable and innovative solutions.",
    socialLinks: siteConfig.socialLinks,
  },
  navigation: {
    quickAccess: footerMenuQuickAccessLinks,
    information: footerMenuInformationLinks,
    policies: policyMenuLinks,
  },
  contact: {
    address: siteConfig.address,
    addressEn: siteConfig.addressEn,
    phone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    mapUrl: siteConfig.locationFrameUrl,
    mapTitle: `${siteConfig.siteName} Konumu`,
  },
  legal: {
    siteName: siteConfig.siteName,
    vatOffice: siteConfig.vatOffice,
    madeBy: {
      name: "Güvenoğlu Çelik & Metal",
      url: "/",
    },
  },
};
