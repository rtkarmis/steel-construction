"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { allLinks } from "@/data/menu";
import Link from "next/link";

const SiteMapContent = () => {
  const { t } = useLanguage();

  const breadcrumbs = [
    { label: "Anasayfa", slug: "/" },
    { label: "Site Haritası" },
  ];

  return (
    <div className="bg-background">
      {/* Site Haritası Hero */}
      <div className="bg-gradient-to-r from-silver to-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-white/80 mb-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
          <div className="text-white text-4xl md:text-5xl font-bold">
            <PageTitle text="Site Haritası" />
          </div>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            {t("sitemap.subtitle")}
          </p>
        </div>
      </div>

      {/* Site Haritası İçerik */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Tüm Sayfalar
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {allLinks.map((link, index) => (
              <Link
                key={index}
                href={link.item.slug}
                className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-200"
              >
                <span className="text-primary font-medium">
                  {link.item.label}
                </span>
                <span className="block text-sm text-gray-500">
                  {link.item.slug}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteMapContent;
