"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Reference } from "@/types/reference";
import { m } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface TechQualityPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const ReferencePreview = ({ fadeUp }: TechQualityPreviewProps) => {
  const { getPage, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Get reference data from data file
  const { getHomePageReferences } = require("@/data/reference");
  const references: Reference[] = getHomePageReferences(5);

  const nextMobileSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % references.length);
  };

  const prevMobileSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? references.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextMobileSlide();
    }
    if (isRightSwipe) {
      prevMobileSlide();
    }
  };

  return (
    <m.section
      variants={fadeUp}
      className="py-20 bg-surface border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-10">
          {getPage("home", "references.title")}
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {references.map((ref: Reference) => (
            <div
              key={ref.id}
              className="relative w-48 h-48 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100 overflow-hidden flex flex-col justify-center items-center"
            >
              <Image
                src={ref.logo}
                alt={
                  ref.translations[language]?.name || ref.translations.tr.name
                }
                fill
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                className="object-contain"
              />
              <span
                className="block w-full max-w-[90%] mx-auto overflow-hidden break-words whitespace-normal text-ellipsis text-[12px] leading-tight py-1 px-1 text-center"
                style={{
                  wordBreak: "break-word",
                  lineHeight: "1.2",
                  fontWeight: 500,
                }}
              >
                {ref.translations[language]?.name || ref.translations.tr.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            className="overflow-x-auto scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex space-x-4 pb-4 justify-center items-center min-w-max">
              {references.map((ref: Reference) => (
                <div key={ref.id} className="flex-shrink-0">
                  <div className="relative w-48 h-48 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col justify-center items-center">
                    <Image
                      src={ref.logo}
                      alt={
                        ref.translations[language]?.name ||
                        ref.translations.tr.name
                      }
                      fill
                      sizes="25vw"
                      className="object-contain"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-xs font-medium text-center text-primary bg-white/80 rounded px-1 py-0.5 break-words whitespace-normal">
                      <span
                        className="block w-full max-w-full overflow-hidden text-ellipsis break-words whitespace-normal leading-tight"
                        style={{ fontSize: "13px", padding: "2px 0" }}
                      >
                        {ref.translations[language]?.name ||
                          ref.translations.tr.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default ReferencePreview;
