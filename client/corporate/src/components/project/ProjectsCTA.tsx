"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const ProjectsCTA = () => {
  const { getPage } = useLanguage();

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          {getPage("project", "cta.title")}
        </h3>
        <p className="text-white/85 max-w-3xl mx-auto">
          {getPage("project", "cta.desc")}
        </p>
        <Link
          href="/iletisim"
          className="inline-block mt-8 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold shadow-md transition-all"
        >
          {getPage("project", "cta.button")}
        </Link>
      </div>
    </section>
  );
};

export default ProjectsCTA;
