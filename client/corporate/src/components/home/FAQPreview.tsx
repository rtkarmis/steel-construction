"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqs as faqData } from "@/data/faq";
import type { FAQItem } from "@/types/faq";
import { m } from "framer-motion";
import Link from "next/link";

interface FAQPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const FAQPreview = ({ fadeUp }: FAQPreviewProps) => {
  const { language, getPage } = useLanguage();

  // Show first 3 FAQ items from data
  const faqs: FAQItem[] = faqData.slice(0, 3);

  return (
    <m.section variants={fadeUp} className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">
          {getPage("home", "faq.title")}
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <m.div
              key={f.id}
              variants={fadeUp}
              className="border border-border/60 rounded-xl p-5 transition bg-background hover:shadow-md"
            >
              <h3 className="font-semibold text-primary">
                {f.translations[language]?.question ||
                  f.translations.tr.question}
              </h3>
              <p className="text-text/70 mt-2">
                {f.translations[language]?.answer || f.translations.tr.answer}
              </p>
            </m.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/sss"
            className="text-secondary font-medium hover:underline"
          >
            {getPage("home", "faq.viewAllButton")}
          </Link>
        </div>
      </div>
    </m.section>
  );
};
export default FAQPreview;
