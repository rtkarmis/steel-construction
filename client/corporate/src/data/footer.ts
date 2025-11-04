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
    description:
      "Çelik yapı sektöründe 25 yıllık deneyimimiz ile kaliteli, güvenilir ve yenilikçi çözümler sunarak projelerinizi hayata geçiriyoruz.",
    socialLinks: siteConfig.socialLinks,
  },
  navigation: {
    quickAccess: footerMenuQuickAccessLinks,
    information: footerMenuInformationLinks,
    policies: policyMenuLinks,
  },
  contact: {
    address: siteConfig.address,
    phone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    mapUrl: siteConfig.locationFrameUrl,
    mapTitle: `${siteConfig.siteName} Konumu`,
  },
  legal: {
    siteName: siteConfig.siteName,
    vkn: siteConfig.vkn,
    vatOffice: siteConfig.vatOffice,
    madeBy: {
      name: "Güvenoğlu Çelik & Metal",
      url: "/",
    },
  },
};
