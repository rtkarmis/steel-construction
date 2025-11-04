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
import { Database, Eye, Lock, Settings, Shield, UserCheck } from "lucide-react";

const PrivatePolicyContent = () => {
  const { getNavigation, language } = useLanguage();

  // Get translations
  const t = (key: string) =>
    getTranslation(language, "pages", "privacyPolicy", key);

  // Get translation arrays - direct access to avoid type issues
  const getTranslationArray = (key: string): string[] => {
    try {
      // Direct access to translations object
      const keys = key.split(".");
      let current: any = translations[language]?.pages?.privacyPolicy;

      for (const k of keys) {
        current = current?.[k];
      }

      return Array.isArray(current) ? current : [];
    } catch {
      return [];
    }
  };

  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/gizlilik-politikasi");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI(
    "/gizlilik-politikasi",
    getNavigation
  );

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
            <p className="text-text/70 mt-1 text-lg">{t("description")}</p>
          </div>
        </div>
        <div className="bg-background border border-border/40 rounded-2xl p-4 md:p-6 mx-4 md:mx-6">
          <p className="text-text/80">
            {t("hero.subtitle")} {t("common.lastUpdated")}:{" "}
            {new Date().toLocaleDateString(
              language === "tr" ? "tr-TR" : "en-US"
            )}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg transition-all">
            <div className="p-4 bg-blue-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">
              {t("hero.features.transparency.title")}
            </h2>
            <p className="text-text/70 leading-relaxed">
              {t("hero.features.transparency.description")}
            </p>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg transition-all">
            <div className="p-4 bg-green-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-green-100 transition-colors">
              <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">
              {t("hero.features.security.title")}
            </h2>
            <p className="text-text/70 leading-relaxed">
              {t("hero.features.security.description")}
            </p>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg transition-all">
            <div className="p-4 bg-purple-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-purple-100 transition-colors">
              <UserCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">
              {t("hero.features.control.title")}
            </h2>
            <p className="text-text/70 leading-relaxed">
              {t("hero.features.control.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-secondary" />
              {t("sections.overview.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="leading-relaxed">
                {t("sections.overview.content").replace(
                  "%SITE_NAME%",
                  siteConfig.siteName
                )}
              </p>
            </div>
          </article>

          {/* Data Collection */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Database className="w-7 h-7 text-secondary" />
              {t("sections.dataCollection.title")}
            </h2>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-4 text-lg">
                  {t("sections.dataCollection.types.personal.title")}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {getTranslationArray(
                    "sections.dataCollection.types.personal.items"
                  ).map((item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-blue-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4 text-lg">
                  {t("sections.dataCollection.types.technical.title")}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {getTranslationArray(
                    "sections.dataCollection.types.technical.items"
                  ).map((item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-green-700"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Data Usage */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Settings className="w-7 h-7 text-secondary" />
              {t("sections.dataUsage.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.dataUsage.content") ||
                  "Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:"}
              </p>
              <div className="grid gap-4">
                {getTranslationArray("sections.dataUsage.purposes").map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background/60 rounded-lg border border-border/30"
                    >
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-text/80">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </article>

          {/* Data Sharing */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <UserCheck className="w-7 h-7 text-secondary" />
              {t("sections.dataSharing.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.dataSharing.content")}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {getTranslationArray("sections.dataSharing.cases").map(
                  (item: string, index: number) => {
                    const colors = ["red", "blue", "green", "purple"];
                    const color = colors[index % colors.length];
                    return (
                      <div
                        key={index}
                        className={`p-4 bg-${color}-50 border border-${color}-200 rounded-lg`}
                      >
                        <div
                          className={`w-3 h-3 bg-${color}-500 rounded-full mb-2`}
                        ></div>
                        <span className={`text-${color}-700 font-medium`}>
                          {item}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </article>

          {/* Data Security */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Lock className="w-7 h-7 text-secondary" />
              {t("sections.dataSecurity.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.dataSecurity.content")}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {getTranslationArray("sections.dataSecurity.measures").map(
                  (text: string, index: number) => {
                    const icons = [
                      Shield,
                      Lock,
                      Settings,
                      UserCheck,
                      Database,
                      Eye,
                    ];
                    const IconComponent = icons[index % icons.length];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-background/60 rounded-lg border border-border/30"
                      >
                        <IconComponent className="w-5 h-5 text-secondary" />
                        <span className="text-text/80">{text}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </article>

          {/* User Rights */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Eye className="w-7 h-7 text-secondary" />
              {t("sections.userRights.title")}
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                {t("sections.userRights.content")}
              </p>
              <div className="space-y-3">
                {getTranslationArray("sections.userRights.rights").map(
                  (right: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/30"
                    >
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Eye className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-text/80">{right}</span>
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

          {/* Policy Changes */}
          <article className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {t("sections.changes.title")}
            </h2>
            <p className="text-amber-700 leading-relaxed">
              {t("sections.changes.content")}
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PrivatePolicyContent;
