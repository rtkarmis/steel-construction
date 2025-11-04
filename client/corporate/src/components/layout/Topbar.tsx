"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/seo";
import { Globe, Mail, Phone } from "lucide-react";

export default function Topbar() {
  const { language, setLanguage, getCommon } = useLanguage();

  const handleLanguageChange = (lang: "tr" | "en") => {
    setLanguage(lang);
  };

  return (
    <div className="bg-primary text-white h-10 flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between text-sm">
          {/* Left side - Contact Information */}
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center space-x-2 hover:text-secondary transition-colors duration-200"
            >
              <Phone size={14} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center space-x-2 hover:text-secondary transition-colors duration-200"
            >
              <Mail size={14} />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          {/* Right side - Language Selection */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe size={14} />
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleLanguageChange("tr")}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                    language === "tr"
                      ? "bg-white/20 text-white"
                      : "hover:text-secondary"
                  }`}
                  title={getCommon("topbar.language")}
                >
                  <img
                    src="https://cdn.gtranslate.net/flags/svg/tr.svg"
                    alt="TR"
                    className="w-6 h-4"
                  />
                </button>
                <span className="text-secondary">|</span>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
                    language === "en"
                      ? "bg-white/20 text-white"
                      : "hover:text-secondary"
                  }`}
                  title={getCommon("topbar.language")}
                >
                  <img
                    src="https://cdn.gtranslate.net/flags/svg/en.svg"
                    alt="EN"
                    className="w-6 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between text-xs">
          {/* Left side - Only phone for mobile */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center space-x-2 hover:text-secondary transition-colors duration-200"
          >
            <Phone size={12} />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          {/* Right side - Language Selection */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <Globe size={12} />
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => handleLanguageChange("tr")}
                  className={`px-1.5 py-0.5 rounded text-xs font-medium transition-colors duration-200 ${
                    language === "tr"
                      ? "bg-white/20 text-white"
                      : "hover:text-secondary"
                  }`}
                >
                  <img
                    src="https://cdn.gtranslate.net/flags/svg/tr.svg"
                    alt="TR"
                    className="w-6 h-4"
                  />
                </button>
                <span className="text-secondary text-xs">|</span>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-1.5 py-0.5 rounded text-xs font-medium transition-colors duration-200 ${
                    language === "en"
                      ? "bg-white/20 text-white"
                      : "hover:text-secondary"
                  }`}
                >
                  <img
                    src="https://cdn.gtranslate.net/flags/svg/en.svg"
                    alt="EN"
                    className="w-6 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
