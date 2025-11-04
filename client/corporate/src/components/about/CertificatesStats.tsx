"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { useRef } from "react";

export default function Certificates() {
  const { getPage } = useLanguage();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const certs = [
    {
      src: "/images/cert/iso9001.webp",
      alt: "ISO 9001 Kalite Yönetim Sistemi",
    },
    {
      src: "/images/cert/iso14001.webp",
      alt: "ISO 14001 Çevre Yönetim Sistemi",
    },
    { src: "/images/cert/ce.webp", alt: "CE Avrupa Uygunluk Belgesi" },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Touch handler is kept for future enhancements if needed
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-background via-surface/40 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          {getPage("about", "certificates.title")}
        </h3>
        <p className="text-text/70 max-w-2xl mx-auto mb-12">
          {getPage("about", "certificates.subtitle")}
        </p>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center gap-8">
          {certs.map((c) => (
            <div
              key={c.alt}
              className="group bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-64"
            >
              <div className="relative h-32 mb-4">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-medium text-text/80">{c.alt}</p>
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
              {certs.map((c, i) => (
                <div key={i} className="flex-shrink-0">
                  <div className="relative w-48 h-48 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                    <div className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="relative h-24 w-full mb-3">
                        <Image
                          src={c.src}
                          alt={c.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-xs font-medium text-text/80 text-center leading-tight">
                        {c.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Gradient Divider */}
        <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 blur-3xl rounded-full -z-10" />
    </section>
  );
}
