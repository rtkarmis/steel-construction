"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { m } from "framer-motion";
import Link from "next/link";

interface CTAPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const CTAPreview = ({ fadeUp }: CTAPreviewProps) => {
  const { getPage } = useLanguage();

  return (
    <m.section
      variants={fadeUp}
      className="relative py-20 bg-primary text-white overflow-hidden text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="relative z-10 px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          {getPage("home", "cta.title")}
        </h2>
        <p className="text-white/85 mt-3 max-w-3xl mx-auto">
          {getPage("home", "cta.description")}
        </p>
        <Link
          href="/iletisim"
          className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-4 mt-8 rounded-xl font-semibold transition-colors shadow-[0_8px_24px_rgba(242,140,40,0.25)]"
        >
          {getPage("home", "cta.button")}
        </Link>
      </div>
    </m.section>
  );
};

export default CTAPreview;
