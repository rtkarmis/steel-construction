export interface BreadcrumbItem {
  label: string;
  slug?: string;
}

export interface MenuItem {
  label: string;
  slug: string;
  subLinks?: MenuItem[];
}

export interface PageMetadataItem {
  item: MenuItem;
  description?: string;
  image?: string;
}
