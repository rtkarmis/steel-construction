"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeroPreviewProps {
  fadeUp: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
}

const HeroPreview = ({ fadeUp }: HeroPreviewProps) => {
  const { getPage } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Intersection Observer ile video yüklemeyi optimize et
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Video'yu hemen yükle
            if (videoRef.current) {
              videoRef.current.load();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback timer
    const timer = setTimeout(() => {
      setShowFallback(false);
    }, 200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setShowFallback(false);
  };

  const handleVideoError = () => {
    console.warn("Video yüklenemedi, fallback görsel kullanılıyor");
    setShowFallback(true);
  };

  return (
    <section
      ref={sectionRef}
      className="hero-section relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Fallback Background Image */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
          showFallback ? "opacity-25" : "opacity-0"
        }`}
        style={{ backgroundImage: "url(/images/home/hero.webp)" }}
      />

      {/* Video Background - Sadece görünür olduğunda yükle */}
      {isVisible && (
        <video
          ref={videoRef}
          className={`hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded && !showFallback ? "opacity-25" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/home/hero.webp"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
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
            className="bg-secondary md:hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg touch-manipulation"
          >
            {getPage("home", "hero.getQuoteButton")}
          </Link>
          <Link
            href="/projeler"
            className="border border-white/50 text-white md:hover:bg-white md:hover:text-primary px-8 py-4 rounded-xl font-semibold transition-colors touch-manipulation"
          >
            {getPage("home", "hero.viewProjectsButton")}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroPreview;
