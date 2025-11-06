"use client";

import { getTranslation, Language } from "@/lib/translations";
import { createContext, useContext, useEffect, useState } from "react";

// Context tipi
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Eski sistem için geçici fonksiyon (navigation ve header/footer için)
  t: (key: string) => string;
  // Modüler çeviri fonksiyonları
  getCommon: (key: string) => string;
  getNavigation: (key: string) => string;
  getPage: (page: string, key: string) => string;
}

// Context oluştur
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Çeviri hook'u
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Provider bileşeni
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>("tr");
  const [isHydrated, setIsHydrated] = useState(false);

  const setLanguage = (lang: Language) => {
    console.log("Language changed to:", lang);
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // Eski sistem için geçici t() fonksiyonu (navigation ve header/footer için)
  const t = (key: string): string => {
    // Hydration tamamlanmadan önce güvenli varsayılan
    if (!isHydrated) {
      return key;
    }

    // navigation.* key'leri için
    if (key.startsWith("navigation.")) {
      return getNavigation(key);
    }
    // header.* ve footer.* key'leri için
    if (key.startsWith("header.") || key.startsWith("footer.")) {
      return getNavigation(key);
    }
    // topbar.* key'leri için
    if (key.startsWith("topbar.")) {
      return getCommon(key);
    }
    // common.* key'leri için
    if (key.startsWith("common.")) {
      return getCommon(key.replace("common.", ""));
    }

    // Bilinmeyen key'ler için warning ve key'i döndür
    console.warn(`Translation key not supported in new system: ${key}`);
    return key;
  };

  // Modüler çeviri fonksiyonları
  const getCommon = (key: string): string => {
    if (!isHydrated) return key;
    return getTranslation(language, "common", key);
  };

  const getNavigation = (key: string): string => {
    if (!isHydrated) return key;
    return getTranslation(language, "navigation", key);
  };

  const getPage = (page: string, key: string): string => {
    if (!isHydrated) return key;
    return getTranslation(language, "pages", page, key);
  };

  // Başlangıçta dili yükle ve hydration'ı işaretle
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      const initialLanguage = savedLanguage || "tr";
      console.log("Initial language loaded:", initialLanguage);
      setLanguageState(initialLanguage);
      setIsHydrated(true);
    }
  }, []);

  // Language değişimini debug et
  useEffect(() => {
    if (isHydrated) {
      console.log("Language context updated:", language);
    }
  }, [language, isHydrated]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getCommon,
        getNavigation,
        getPage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
