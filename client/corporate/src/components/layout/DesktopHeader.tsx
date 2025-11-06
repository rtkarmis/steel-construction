"use client";
import Logo from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { headerMenuLinks } from "@/data/menu";
import { siteConfig } from "@/lib/seo";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const DesktopHeader = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMenu(null), 200);
  };

  return (
    <div className="w-full grid grid-cols-[auto_1fr_auto] items-center">
      {/* 🔹 Logo */}
      <div className="flex items-center">
        <Logo priority responsive={false} width={220} height={123} />
      </div>

      {/* 🔹 Menü */}
      <div className="hidden lg:flex items-center justify-center space-x-8 px-4 relative">
        {headerMenuLinks.map((link) => {
          const hasSubLinks = link.subLinks && link.subLinks.length > 0;
          const isActive =
            pathname === link.slug ||
            (hasSubLinks &&
              link.subLinks?.some((sub) => pathname === sub.slug));

          return (
            <div
              key={link.slug}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.slug}
                className={`flex items-center gap-1 text-base transition-all duration-200 hover:border-b-2 hover:border-secondary ${
                  isActive
                    ? "text-secondary font-medium"
                    : activeMenu === link.label
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {link.translationKey ? t(link.translationKey) : link.label}
                {hasSubLinks && (
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform duration-200 ${
                      activeMenu === link.label || isActive
                        ? "rotate-180 text-secondary"
                        : ""
                    }`}
                  />
                )}
              </Link>

              {/* Alt Menü */}
              {hasSubLinks && activeMenu === link.label && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-xl z-50 transition-all">
                  <ul className="py-2">
                    {link.subLinks?.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={sub.slug}
                          className={`block px-4 py-2 text-base transition-all duration-200 hover:border-b-2 hover:border-secondary ${
                            pathname === sub.slug
                              ? "text-secondary font-medium bg-blue-50"
                              : "text-primary hover:bg-gray-50 hover:text-secondary"
                          }`}
                        >
                          {sub.translationKey
                            ? t(sub.translationKey)
                            : sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 🔹 CTA */}
      <div className="flex items-center justify-end">
        <Link
          href={`tel:${siteConfig.phone}`}
          className="text-base font-medium px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 hover:border-secondary hover:text-secondary text-primary transition-all duration-200"
        >
          {t("navigation.quote")}
        </Link>
      </div>
    </div>
  );
};

export default DesktopHeader;
