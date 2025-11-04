"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { footerData } from "@/data/footer";

export default function BottomBar() {
  const { t } = useLanguage();
  const { legal } = footerData;

  return (
    <div className="bg-primary text-white h-10 flex items-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center text-xs">
          <p>
            © {new Date().getFullYear()} {legal.siteName}.{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </div>
  );
}
