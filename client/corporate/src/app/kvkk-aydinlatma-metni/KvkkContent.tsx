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
import {
  AlertCircle,
  Database,
  Eye,
  FileText,
  Info,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";

const KvkkContent = () => {
  const { getNavigation, language } = useLanguage();

  // Get translations
  const t = (key: string) => getTranslation(language, "pages", "kvkk", key);

  // Get translation arrays - direct access to avoid type issues
  const getTranslationArray = (key: string): string[] => {
    try {
      // Direct access to translations object
      const keys = key.split(".");
      let current: any = translations[language]?.pages?.kvkk;

      for (const k of keys) {
        current = current?.[k];
      }

      return Array.isArray(current) ? current : [];
    } catch {
      return [];
    }
  };
  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/kvkk-aydinlatma-metni");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI(
    "/kvkk-aydinlatma-metni",
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
            {t("hero.subtitle")} {t("common.lastUpdated") || "Son Güncelleme"}:{" "}
            {new Date().toLocaleDateString(
              language === "tr" ? "tr-TR" : "en-US"
            )}
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 group hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3 text-lg">
                  {t("hero.cards.dataController.title")}
                </h3>
                <p className="text-text/70 leading-relaxed">
                  {t("hero.cards.dataController.content").replace(
                    "%SITE_NAME%",
                    siteConfig.siteName
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 group hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
                <Info className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3 text-lg">
                  {t("hero.cards.personalData.title")}
                </h3>
                <p className="text-text/70 leading-relaxed">
                  {t("hero.cards.personalData.content")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-secondary mb-3 text-lg">
                {language === "tr"
                  ? "Önemli Bilgilendirme"
                  : "Important Information"}
              </h3>
              <p className="text-text/80 leading-relaxed">
                {language === "tr"
                  ? `Bu aydınlatma metni, kişisel verilerinizin ${siteConfig.siteName} tarafından nasıl işlendiği konusunda KVKK'nın 10. maddesi gereğince yapılan bilgilendirmedir.`
                  : `This notice is an information provided in accordance with Article 10 of the PDPL regarding how your personal data is processed by ${siteConfig.siteName}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 space-y-12">
        {/* Introduction */}
        <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
            <Scale className="w-7 h-7 text-secondary" />
            {t("sections.dataController.title")}
          </h2>
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="leading-relaxed">
              {t("sections.dataController.content").replace(
                "%SITE_NAME%",
                siteConfig.siteName
              )}
            </p>
          </div>
        </article>

        {/* Personal Data Definition */}
        <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
            <Database className="w-7 h-7 text-secondary" />
            {t("sections.personalDataTypes.title")}
          </h2>
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="mb-6 leading-relaxed">
              {t("sections.personalDataTypes.content")}
            </p>

            {/* Loop through data categories */}
            <div className="space-y-6">
              {Object.entries(
                t("sections.personalDataTypes.categories") || {}
              ).map(([key, category]: [string, any]) => (
                <div
                  key={key}
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6"
                >
                  <h4 className="font-bold text-blue-800 mb-4">
                    {category.title}:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.items?.map((item: string, index: number) => (
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
              ))}
            </div>
          </div>
        </article>

        {/* Data Processing Purposes */}
        <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-secondary" />
            {t("sections.processingPurposes.title")}
          </h2>
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="mb-6 leading-relaxed">
              {t("sections.processingPurposes.content")}
            </p>
            <div className="space-y-4">
              {getTranslationArray("sections.processingPurposes.purposes").map(
                (purpose: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-5"
                  >
                    <h4 className="font-bold text-indigo-800 mb-2">
                      {purpose.title}
                    </h4>
                    <p className="text-indigo-700 leading-relaxed">
                      {purpose.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </article>

        {/* Legal Basis */}
        <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
            <Shield className="w-7 h-7 text-secondary" />
            {t("sections.legalBasis.title")}
          </h2>
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="mb-6 leading-relaxed">
              {t("sections.legalBasis.content")}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {getTranslationArray("sections.legalBasis.items").map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-background/60 border border-border/30 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 text-secondary mt-1">
                        {index === 0 && <UserCheck className="w-6 h-6" />}
                        {index === 1 && <FileText className="w-6 h-6" />}
                        {index === 2 && <Scale className="w-6 h-6" />}
                        {index === 3 && <Shield className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-text/60 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
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
                    className="flex items-start gap-3 p-4 bg-background/60 rounded-lg border border-border/30"
                  >
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-text/80">{right}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </article>

        {/* Contact Information */}
        <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t("sections.contact.title")}
          </h2>
          <div className="prose prose-lg max-w-none text-text/80">
            <p className="mb-6 leading-relaxed">
              {t("sections.contact.content")}
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/40 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-primary mb-4">
                {t("sections.contact.contactInfo.title")}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-primary mb-1">
                    {t("sections.contact.contactInfo.email")}
                  </p>
                  <p className="text-text/80">{siteConfig.email}</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">
                    {t("sections.contact.contactInfo.phone")}
                  </p>
                  <p className="text-text/80">{siteConfig.phoneDisplay}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold text-primary mb-1">
                    {t("sections.contact.contactInfo.address")}
                  </p>
                  <p className="text-text/80">
                    {language === "tr"
                      ? siteConfig.address
                      : siteConfig.addressEn}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-bold text-amber-800 mb-3">
                {t("sections.contact.applicationProcess.title")}
              </h4>
              <p className="text-amber-700 leading-relaxed">
                {t("sections.contact.applicationProcess.content")}
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default KvkkContent;
