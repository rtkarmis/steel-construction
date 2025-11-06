"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { m } from "framer-motion";
import { CheckCircle2, Cog, HardHat, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface TechQualityPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const TechQualityPreview = ({ fadeUp }: TechQualityPreviewProps) => {
  const { getPage } = useLanguage();

  const techHighlights = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      text: getPage("home", "techQuality.highlights.0"),
    },
    {
      icon: <Cog className="w-6 h-6 text-secondary" />,
      text: getPage("home", "techQuality.highlights.1"),
    },
    {
      icon: <HardHat className="w-6 h-6 text-secondary" />,
      text: getPage("home", "techQuality.highlights.2"),
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-secondary" />,
      text: getPage("home", "techQuality.highlights.3"),
    },
  ];

  return (
    <>
      {/* 🔹 Divider: Üst bölümle net geçiş sağlar */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <m.section
        variants={fadeUp}
        className="py-20 bg-background relative shadow-[inset_0_6px_12px_rgba(0,0,0,0.04)]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Görsel */}
          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/home/cad.webp"
              alt="Mühendislik ve üretim teknolojisi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Metin Alanı */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider">
              {getPage("home", "techQuality.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {getPage("home", "techQuality.title")}
            </h2>
            <ul className="space-y-4 mt-6">
              {techHighlights.map((t, i) => (
                <m.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-text/80"
                >
                  {t.icon}
                  <span>{t.text}</span>
                </m.li>
              ))}
            </ul>
          </div>
        </div>
      </m.section>
    </>
  );
};

export default TechQualityPreview;
