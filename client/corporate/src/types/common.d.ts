export interface BreadcrumbItem {
  label: string;
  slug?: string;
  href?: string;
  isActive?: boolean;
}

export interface MenuItem {
  label: string;
  slug: string;
  translationKey?: string;
  subLinks?: MenuItem[];
  noContainer?: boolean; // If true, page won't be wrapped with Container
}

export interface PageMetadataItem {
  item: MenuItem;
  description?: string;
  image?: string;
}

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
