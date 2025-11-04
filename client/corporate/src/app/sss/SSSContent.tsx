"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const SSSContent = () => {
  const { t } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const breadcrumbs = [
    { label: "Anasayfa", slug: "/" },
    { label: "Sıkça Sorulan Sorular" },
  ];

  // Örnek SSS soruları
  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
  ];

  return (
    <div className="bg-background">
      {/* SSS Hero */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-white/80 mb-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
          <div className="flex items-center space-x-3">
            <HelpCircle className="w-12 h-12 text-white" />
            <div className="text-white text-4xl md:text-5xl font-bold">
              <PageTitle text="Sıkça Sorulan Sorular" />
            </div>
          </div>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            {t("faq.subtitle")}
          </p>
        </div>
      </div>

      {/* SSS İçeriği */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 md:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
              >
                <span className="font-medium text-primary">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text/60 transition-transform ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openQuestion === index && (
                <div className="px-4 md:px-6 pb-4 text-text text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* İletişim Bilgisi */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sorunuz mu var?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Aradığınız soruyu bulamadınız mı? Bizimle iletişime geçin, size
            yardımcı olmaktan mutluluk duyarız.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-primary text-white px-4 md:px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </div>
  );
};

export default SSSContent;
