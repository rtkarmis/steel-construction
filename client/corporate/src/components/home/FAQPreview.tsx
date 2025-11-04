"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { m } from "framer-motion";
import Link from "next/link";

interface FAQPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const FAQPreview = ({ fadeUp }: FAQPreviewProps) => {
  const { getPage } = useLanguage();

  const faqs = [
    {
      q: getPage("home", "faq.items.0.question"),
      a: getPage("home", "faq.items.0.answer"),
    },
    {
      q: getPage("home", "faq.items.1.question"),
      a: getPage("home", "faq.items.1.answer"),
    },
    {
      q: getPage("home", "faq.items.2.question"),
      a: getPage("home", "faq.items.2.answer"),
    },
  ];

  return (
    <m.section variants={fadeUp} className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10">
          {getPage("home", "faq.title")}
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <m.div
              key={i}
              variants={fadeUp}
              className="border border-border/60 rounded-xl p-5 hover:shadow-md transition bg-background"
            >
              <h3 className="font-semibold text-primary">{f.q}</h3>
              <p className="text-text/70 mt-2">{f.a}</p>
            </m.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/sss"
            className="text-secondary hover:underline font-medium"
          >
            {getPage("home", "faq.viewAllButton")}
          </Link>
        </div>
      </div>
    </m.section>
  );
};
export default FAQPreview;
