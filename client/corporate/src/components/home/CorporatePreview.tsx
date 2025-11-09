"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { m } from "framer-motion";
import Image from "next/image";

interface CorporatePreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const CorporatePreview = ({ fadeUp }: CorporatePreviewProps) => {
  const { getPage } = useLanguage();

  return (
    <>
      {/* 🔹 Divider: Üst bölümden yumuşak geçiş */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <m.section
        variants={fadeUp}
        className="py-20 bg-surface relative shadow-[inset_0_6px_12px_rgba(0,0,0,0.04)]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Görsel */}
          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/home/factory.webp"
              alt="Üretim tesisi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Metin Alanı */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider">
              {getPage("home", "corporate.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              {getPage("home", "corporate.title")}
            </h2>
            <p className="text-text/80 leading-relaxed mb-6">
              {getPage("home", "corporate.description")}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {["10+", "100+", "ISO"].map((item, i) => (
                <m.div
                  key={i}
                  variants={fadeUp}
                  className="bg-background text-center rounded-xl p-4 shadow-sm"
                >
                  <h3 className="text-3xl font-extrabold text-primary">
                    {item}
                  </h3>
                  <p className="text-sm text-text/70">
                    {i === 0
                      ? getPage("home", "corporate.stats.experience")
                      : i === 1
                      ? getPage("home", "corporate.stats.projects")
                      : getPage("home", "corporate.stats.quality")}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </m.section>
    </>
  );
};

export default CorporatePreview;
