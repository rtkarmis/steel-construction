"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface HeroPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const HeroPreview = ({ fadeUp }: HeroPreviewProps) => {
  const { getPage } = useLanguage();

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home/hero.webp"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-85" />

      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          {getPage("home", "hero.title")}
        </h1>
        <p className="mt-5 text-white/90 text-lg md:text-xl">
          {getPage("home", "hero.subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/iletisim"
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            {getPage("home", "hero.getQuoteButton")}
          </Link>
          <Link
            href="/projeler"
            className="border border-white/50 text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            {getPage("home", "hero.viewProjectsButton")}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroPreview;
