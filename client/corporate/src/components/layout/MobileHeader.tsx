"use client";

import Logo from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { headerMenuLinks } from "@/data/menu";
import { siteConfig } from "@/lib/seo";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MobileHeaderProps {
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function MobileHeader({ onMenuToggle }: MobileHeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    onMenuToggle?.(sidebarOpen);
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen, onMenuToggle]);

  const toggleMenu = (slug: string) =>
    setOpenMenu((prev) => (prev === slug ? null : slug));

  const closeMenu = () => {
    setSidebarOpen(false);
    setOpenMenu(null);
  };

  return (
    <div className="flex items-center justify-between w-full h-16 relative bg-surface border-b border-gray-200">
      {/* Logo - Ortada */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Logo />
      </div>

      {/* Menü Butonu */}
      <button
        aria-label={sidebarOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="ml-auto z-50 p-2 rounded-md active:bg-gray-100 transition-colors duration-200 mr-4"
      >
        {sidebarOpen ? (
          <X size={24} className="text-primary" />
        ) : (
          <Menu size={24} className="text-primary" />
        )}
      </button>

      {/* Sidebar Menü */}
      {sidebarOpen && (
        <aside className="fixed inset-0 bg-surface z-40 flex flex-col h-screen">
          {/* Menü İçeriği */}
          <div className="flex-1 overflow-hidden py-6 px-6">
            {headerMenuLinks.map((link) => {
              const hasSubLinks = link.subLinks && link.subLinks.length > 0;
              const isActive =
                pathname === link.slug ||
                (hasSubLinks &&
                  link.subLinks?.some((sub) => pathname === sub.slug));

              return (
                <div key={link.slug} className="mb-2">
                  {hasSubLinks ? (
                    <>
                      <button
                        onClick={() => toggleMenu(link.slug)}
                        className={`w-full text-left py-3 text-lg font-medium active:text-secondary flex items-center justify-between transition-colors duration-200 ${
                          isActive ? "text-secondary" : "text-primary"
                        }`}
                      >
                        <span>
                          {link.translationKey
                            ? t(link.translationKey)
                            : link.label}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            openMenu === link.slug ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMenu === link.slug && link.subLinks && (
                        <ul className="ml-3 mt-1 border-l border-gray-200 pl-3 space-y-1">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.slug}>
                              <Link
                                href={subLink.slug}
                                onClick={closeMenu}
                                className={`block py-2 text-base transition-colors duration-200 ${
                                  pathname === subLink.slug
                                    ? "text-secondary font-medium"
                                    : "text-gray-600 active:text-secondary"
                                }`}
                              >
                                {subLink.translationKey
                                  ? t(subLink.translationKey)
                                  : subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.slug}
                      onClick={closeMenu}
                      className={`block py-3 text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-secondary font-semibold"
                          : "text-primary active:text-secondary"
                      }`}
                    >
                      {link.translationKey
                        ? t(link.translationKey)
                        : link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA (Teklif Al) */}
          <div className="p-4 border-t border-gray-200 bg-surface">
            <Link
              href={`tel:${siteConfig.phone}`}
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-lg active:bg-primary/90 transition-all duration-300 shadow-lg active:shadow-xl"
            >
              <Phone size={20} />
              {t("navigation.quote")}
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
}
