"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllBlogPosts } from "@/data/blog";
import { allLinks } from "@/data/menu";
import { getAllProjects } from "@/data/project";
import { getAllServices } from "@/data/service";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";
import { Map, Menu, Navigation } from "lucide-react";
import Link from "next/link";

const SiteMapContent = () => {
  const { t, getNavigation, getPage, language } = useLanguage();

  // Get translations
  const getSitemapTranslation = (key: string) =>
    getPage("sitemap", key) || t(`sitemap.${key}`);

  // Function to get translated link label
  const getLinkLabel = (link: any) => {
    // Ana sayfa linkleri için çeviri anahtarları
    const linkTranslations: Record<string, string> = {
      "/": "navigation.home",
      "/hakkimizda": "navigation.about",
      "/hizmetler": "navigation.services",
      "/projeler": "navigation.projects",
      "/referanslar": "navigation.references",
      "/blog": "navigation.blog",
      "/iletisim": "navigation.contact",
      "/sss": "navigation.faq",
      "/gizlilik-politikasi": "navigation.privacyPolicy",
      "/cerez-politikasi": "navigation.cookiePolicy",
      "/kvkk-aydinlatma-metni": "navigation.kvkk",
      "/site-haritasi": "navigation.sitemap",
    };

    // Eğer çeviri anahtarı varsa onu kullan
    const translationKey = linkTranslations[link.item.slug];
    if (translationKey) {
      return t(translationKey);
    }

    // Hizmet detay sayfaları için
    if (link.item.slug.startsWith("/hizmetler/")) {
      const services = getAllServices();
      const service = services.find((s) => s.slug === link.item.slug);
      if (service) {
        return service.translations[language]?.name || link.item.label;
      }
    }

    // Proje detay sayfaları için
    if (link.item.slug.startsWith("/projeler/")) {
      const projects = getAllProjects();
      const project = projects.find((p) => p.slug === link.item.slug);
      if (project) {
        return project.translations[language]?.name || link.item.label;
      }
    }

    // Blog detay sayfaları için
    if (link.item.slug.startsWith("/blog/")) {
      const blogPosts = getAllBlogPosts();
      const blogSlug = link.item.slug.replace("/blog/", "");
      const blog = blogPosts.find((b) => b.slug === blogSlug);
      if (blog) {
        return blog.translations[language]?.title || link.item.label;
      }
    }

    // Varsayılan olarak mevcut label'ı kullan
    return link.item.label;
  };

  // Schema için Türkçe linkler
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/site-haritasi");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI("/site-haritasi", getNavigation);

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Schema Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />

      {/* UI Breadcrumb */}
      <div className="bg-background/60 border-t border-border/40">
        <Breadcrumb items={uiBreadcrumbs} />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center bg-surface py-12 border-b border-border/20 rounded-2xl">
        <div className="mb-4 mx-4 md:mx-6">
          <div>
            <PageTitle text={getSitemapTranslation("title")} />
            <p className="text-text/70 mt-1 text-lg">
              {getSitemapTranslation("subtitle")}
            </p>
          </div>
        </div>
        <div className="bg-background border border-border/40 rounded-2xl p-4 md:p-6 mx-4 md:mx-6">
          <p className="text-text/80">
            {getSitemapTranslation("hero.subtitle")}{" "}
            {getSitemapTranslation("common.lastUpdated")}:{" "}
            {new Date().toLocaleDateString(
              language === "tr" ? "tr-TR" : "en-US"
            )}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group md:hover:shadow-lg transition-all">
            <div className="p-4 bg-blue-50 rounded-2xl w-fit mx-auto mb-6 md:group-hover:bg-blue-100 transition-colors">
              <Navigation className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">
              {getSitemapTranslation("hero.features.navigation.title")}
            </h2>
            <p className="text-text/70 leading-relaxed">
              {getSitemapTranslation("hero.features.navigation.description")}
            </p>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group md:hover:shadow-lg transition-all">
            <div className="p-4 bg-green-50 rounded-2xl w-fit mx-auto mb-6 md:group-hover:bg-green-100 transition-colors">
              <Map className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">
              {getSitemapTranslation("hero.features.comprehensive.title")}
            </h2>
            <p className="text-text/70 leading-relaxed">
              {getSitemapTranslation("hero.features.comprehensive.description")}
            </p>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group md:hover:shadow-lg transition-all">
            <div className="p-4 bg-purple-50 rounded-2xl w-fit mx-auto mb-6 md:group-hover:bg-purple-100 transition-colors">
              <Menu className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">
              {getSitemapTranslation("hero.features.organized.title")}
            </h2>
            <p className="text-text/70 leading-relaxed">
              {getSitemapTranslation("hero.features.organized.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="space-y-8">
          {/* Site Map Content */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Map className="w-7 h-7 text-secondary" />
              {getSitemapTranslation("sections.allPages.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.item.slug}
                  className="group block p-4 bg-background border border-border/40 rounded-xl md:hover:shadow-lg md:hover:-translate-y-1 transition-all duration-300 md:hover:border-transparent md:hover:bg-gradient-to-br md:hover:from-primary/5 md:hover:to-secondary/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-primary font-medium md:group-hover:text-secondary transition-colors leading-snug">
                        {getLinkLabel(link)}
                      </span>
                      <span className="block text-xs text-text/60 mt-1 font-mono">
                        {link.item.slug}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>

          {/* Information Section */}
          <article className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              {getSitemapTranslation("sections.about.title")}
            </h2>
            <p className="text-blue-700 leading-relaxed">
              {getSitemapTranslation("sections.about.content")}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SiteMapContent;
