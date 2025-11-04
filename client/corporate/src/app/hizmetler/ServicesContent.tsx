"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import HeroServices from "@/components/service/HeroServices";
import ServicesGrid from "@/components/service/ServicesGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { services } from "@/data/service";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";

const ServicesContent = () => {
  const { getNavigation } = useLanguage();

  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/hizmetler");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI("/hizmetler", getNavigation);

  return (
    <div className="min-h-screen bg-background text-text">
      <HeroServices />
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="bg-white border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      <ServicesGrid services={services} />
    </div>
  );
};

export default ServicesContent;
