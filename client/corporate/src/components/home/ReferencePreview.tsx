"use client";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { getPage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const logos = [
    { src: "/images/reference/aselsan.webp", alt: "Aselsan" },
    { src: "/images/reference/turkcell.webp", alt: "Turkcell" },
    { src: "/images/reference/ford.webp", alt: "Ford" },
    { src: "/images/reference/enerjisa.webp", alt: "Enerjisa" },
    { src: "/images/reference/thy.webp", alt: "Thy" },
  ];

  const nextMobileSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % logos.length);
  };

  const prevMobileSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
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
          {logos.map((logo, i) => (
            <div
              key={i}
              className="relative w-48 h-48 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100 overflow-hidden"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw"
                className="object-cover"
              />
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
              {logos.map((logo, i) => (
                <div key={i} className="flex-shrink-0">
                  <div className="relative w-48 h-48 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
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
