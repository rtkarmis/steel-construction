"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function CorporateCTA() {
  const { getPage } = useLanguage();
  return (
    <section className="relative py-16 bg-secondary text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,.15),transparent_45%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold">
          {getPage("about", "cta.title")}
        </h3>
        <p className="text-white/90 mt-2">{getPage("about", "cta.desc")}</p>
        <Link
          href="/iletisim"
          className="inline-block mt-6 bg-white text-secondary px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          {getPage("about", "cta.button")}
        </Link>
      </div>
    </section>
  );
}
