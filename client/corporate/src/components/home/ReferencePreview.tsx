"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Reference } from "@/types/reference";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  const getReferenceName = (reference: any) => {
    try {
      const refName = getPage(
        "references",
        `references.items.${reference.key}.name`
      );
      return refName || reference.translations[language].name;
    } catch (error) {
      return reference.translations[language].name;
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
                className="block w-full max-w-[90%] mx-auto overflow-auto break-words whitespace-normal text-ellipsis text-[12px] leading-tight py-1 px-1 text-center font-medium max-h-[32px] line-clamp-2"
                style={{
                  wordBreak: "break-word",
                  lineHeight: "1.2",
                  fontWeight: 500,
                  maxHeight: "32px",
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
                <div
                  key={ref.id}
                  className="group bg-white p-6 rounded-xl shadow-sm border border-border/40 hover:shadow-md transition-all flex flex-col items-center justify-center"
                >
                  <div className="relative w-32 h-16">
                    <Image
                      src={ref.logo}
                      alt={getReferenceName(ref)}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p
                    className="mt-3 text-[13px] font-medium text-text/80 w-full max-w-full overflow-auto break-words whitespace-normal text-ellipsis text-center leading-tight max-h-[32px] line-clamp-2"
                    style={{
                      wordBreak: "break-word",
                      lineHeight: "1.2",
                      fontWeight: 500,
                      maxHeight: "32px",
                    }}
                  >
                    {getReferenceName(ref)}
                  </p>
                  {ref.website && (
                    <Link
                      href={ref.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-xs text-secondary hover:underline"
                    >
                      Website
                    </Link>
                  )}
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
