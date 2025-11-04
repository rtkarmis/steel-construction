"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";
import { siteConfig } from "@/lib/seo";
import { getTranslation, translations } from "@/lib/translations";
import { Cookie, Eye, Settings, Shield } from "lucide-react";

const CookiePolicyContent = () => {
  const { getNavigation, language } = useLanguage();

  // Get translations
  const t = (key: string) =>
    getTranslation(language, "pages", "cookiePolicy", key);

  // Get translation arrays - direct access to avoid type issues
  const getTranslationArray = (key: string): string[] => {
    try {
      // Direct access to translations object
      const keys = key.split(".");
      let current: any = translations[language]?.pages?.cookiePolicy;

      for (const k of keys) {
        current = current?.[k];
      }

      return Array.isArray(current) ? current : [];
    } catch {
      return [];
    }
  };
  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/cerez-politikasi");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI("/cerez-politikasi", getNavigation);

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
            <PageTitle text={t("title")} />
            <p className="text-text/70 mt-2 text-lg">{t("description")}</p>
          </div>
        </div>
        <div className="bg-background border border-border/40 rounded-2xl p-4 md:p-6 mx-4 md:mx-6">
          <p className="text-text/80">
            {t("common.lastUpdated") || "Son Güncelleme"}:{" "}
            {new Date().toLocaleDateString(
              language === "tr" ? "tr-TR" : "en-US"
            )}
          </p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16">
        {/* Overview Card */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/40 rounded-2xl p-4 md:p-8 mb-12">
          <div className="flex items-start gap-4">
            <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">
                {t("hero.overview.title")}
              </h2>
              <p className="text-text/80 leading-relaxed">
                {t("hero.overview.content").replace(
                  "%SITE_NAME%",
                  siteConfig.siteName
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* What are Cookies */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-4 md:p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Cookie className="w-7 h-7 text-secondary" />
              {t("sections.whatAreCookies.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              {getTranslationArray("sections.whatAreCookies.content").map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={`leading-relaxed ${index > 0 ? "mt-4" : ""}`}
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </article>

          {/* Cookie Types */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-4 md:p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Settings className="w-7 h-7 text-secondary" />
              {t("sections.cookieTypes.title")}
            </h2>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3 text-lg">
                  {t("sections.cookieTypes.types.necessary.title")}
                </h3>
                <p className="text-green-700 leading-relaxed">
                  {t("sections.cookieTypes.types.necessary.description")}
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-3 text-lg">
                  {t("sections.cookieTypes.types.functional.title")}
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  {t("sections.cookieTypes.types.functional.description")}
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-800 mb-3 text-lg">
                  {t("sections.cookieTypes.types.analytics.title")}
                </h3>
                <p className="text-purple-700 leading-relaxed">
                  {t("sections.cookieTypes.types.analytics.description")}
                </p>
              </div>
            </div>
          </article>

          {/* Cookie Management */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Eye className="w-7 h-7 text-secondary" />
              {t("sections.cookieManagement.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.cookieManagement.content")}
              </p>

              <div className="space-y-3 mb-6">
                {getTranslationArray("sections.cookieManagement.options").map(
                  (option: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/30"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text/80">{option}</span>
                    </div>
                  )
                )}
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  {language === "tr" ? "Önemli Bilgi" : "Important Information"}
                </h4>
                <p className="text-amber-700 leading-relaxed">
                  {language === "tr"
                    ? "Çerezleri devre dışı bırakırsanız, web sitesinin bazı özellikleri düzgün çalışmayabilir. Özellikle zorunlu çerezler, sitenin temel işlevleri için gereklidir."
                    : "If you disable cookies, some features of the website may not work properly. Necessary cookies are especially required for the basic functions of the site."}
                </p>
              </div>
            </div>
          </article>

          {/* Third Party Cookies */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-secondary" />
              {t("sections.thirdParty.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.thirdParty.content")}
              </p>

              <div className="space-y-3">
                {getTranslationArray("sections.thirdParty.services").map(
                  (service: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background/60 rounded-lg border border-border/30"
                    >
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-text/80">{service}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </article>

          {/* Contact */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">
              {t("sections.contact.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.contact.content")}
              </p>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/40 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-1">
                      {language === "tr" ? "E-posta" : "Email"}
                    </p>
                    <p className="text-text/80">{siteConfig.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">
                      {language === "tr" ? "Telefon" : "Phone"}
                    </p>
                    <p className="text-text/80">{siteConfig.phoneDisplay}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-primary mb-1">
                      {language === "tr" ? "Adres" : "Address"}
                    </p>
                    <p className="text-text/80">
                      {language === "tr"
                        ? siteConfig.address
                        : siteConfig.addressEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyContent;
