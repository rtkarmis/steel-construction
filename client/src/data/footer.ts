import {
  footerMenuInformationLinks,
  footerMenuQuickAccessLinks,
  policyMenuLinks,
} from "@/data/menu";
import { siteConfig } from "@/lib/seo";

export interface FooterData {
  company: {
    name: string;
    description: string;
    socialLinks: {
      instagram?: string;
      facebook?: string;
      whatsapp?: string;
    };
  };
  navigation: {
    quickAccess: typeof footerMenuQuickAccessLinks;
    information: typeof footerMenuInformationLinks;
    policies: typeof policyMenuLinks;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    mapUrl: string;
    mapTitle: string;
  };
  legal: {
    siteName: string;
    vkn: string;
    vatOffice: string;
    madeBy: {
      name: string;
      url: string;
    };
  };
}

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
