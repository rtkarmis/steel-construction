"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";
import { getTranslation, translations } from "@/lib/translations";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function SSSContent() {
  const { language, getNavigation } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Get translations
  const t = (key: string) => getTranslation(language, "pages", "faq", key);

  // Get FAQ items - direct access to avoid type issues
  const getFAQItems = (): Array<{
    key: string;
    question: string;
    answer: string;
  }> => {
    try {
      // Direct access to translations object
      const faqItems = translations[language]?.pages?.faq?.faqs?.items;

      if (faqItems && typeof faqItems === "object") {
        return Object.entries(faqItems).map(([key, faq]: [string, any]) => ({
          key,
          question: faq.question || "",
          answer: faq.answer || "",
        }));
      }

      return [];
    } catch {
      return [];
    }
  };

  // Get localized FAQ items
  const faqsArray = getFAQItems();

  // Schema için breadcrumbs
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/sss");

  // UI için breadcrumbs
  const breadcrumbs = getBreadcrumbsForUI("/sss", getNavigation);

  // FAQ'leri filtrele
  const filteredFaqs = faqsArray.filter((faq) => {
    if (!searchTerm) return true;
    const question = faq.question.toLowerCase();
    const answer = faq.answer.toLowerCase();
    return (
      question.includes(searchTerm.toLowerCase()) ||
      answer.includes(searchTerm.toLowerCase())
    );
  });

  const toggleFAQ = (key: string) => {
    setOpenId(openId === key ? null : key);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* 🧭 Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="bg-background/60 border-t border-border/40">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero Section - Blog Style */}
      <section className="relative py-6 md:py-12 text-center border-b border-border/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-text/70 mb-8">{t("hero.subtitle")}</p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text/40" />
            <input
              type="text"
              placeholder={t("search.placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border/60 bg-surface focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-6 md:py-12">
        {/* Search Results Info */}
        {searchTerm && (
          <div className="text-center mb-8">
            <p className="text-text/60">
              {filteredFaqs.length} {t("search.resultsFound")}
            </p>
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div
                key={faq.key}
                className="bg-surface border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.key)}
                  className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-secondary transition-transform duration-300 flex-shrink-0 ${
                      openId === faq.key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openId === faq.key && (
                  <div className="px-6 md:px-8 pb-6 border-t border-border/30">
                    <div className="pt-6">
                      <p className="text-text/80 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : !searchTerm ? (
            // No FAQs available at all
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-text/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {language === "tr"
                  ? "Henüz soru eklenmemiş"
                  : "No questions added yet"}
              </h3>
              <p className="text-text/60">
                {language === "tr"
                  ? "Yakında sıkça sorulan sorular burada yer alacak."
                  : "Frequently asked questions will be available here soon."}
              </p>
            </div>
          ) : null}
        </div>

        {/* No Results */}
        {searchTerm && filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-text/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              {t("search.noResults")}
            </h3>
            <p className="text-text/60">
              {language === "tr"
                ? "Aradığınız terime uygun soru bulunamadı. Başka bir terim deneyin."
                : "No questions found matching your search term. Try a different keyword."}
            </p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t("sections.contact.title")}
            </h2>
            <p className="text-text/70 text-lg mb-8">
              {t("sections.contact.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                {t("sections.contact.button")}
              </Link>
              <Link
                href="tel:+905523154619"
                className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {language === "tr" ? "Hemen Ara" : "Call Now"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
