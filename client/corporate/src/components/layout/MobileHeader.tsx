"use client";

import Logo from "@/components/ui/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { headerMenuLinks } from "@/data/menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MobileHeader = ({ isScrolled = false }: { isScrolled?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const { t } = useLanguage();

  const toggleSubMenu = (href: string) => {
    const newOpenSubMenus = new Set(openSubMenus);
    if (newOpenSubMenus.has(href)) {
      newOpenSubMenus.delete(href);
    } else {
      newOpenSubMenus.add(href);
    }
    setOpenSubMenus(newOpenSubMenus);
  };

  // 🧭 Basit scroll kilitleme - pozisyon koruma olmadan
  useEffect(() => {
    if (isMenuOpen) {
      // Sadece scroll'u kilitle, pozisyon değiştirme
      document.body.style.overflow = "hidden";
    } else {
      // Scroll'u geri aç
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubMenus(new Set()); // Sub-menüleri de kapat
  };

  return (
    <>
      {/* Header Bar - h-16 */}
      <div className="h-16 w-full bg-surface border-b border-gray-200 flex items-center justify-center relative transition-colors duration-300">
        {/* Logo - Ortada */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Menu Button - Sağda */}
        <button
          onClick={toggleMenu}
          className="absolute right-4 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-primary" />
          ) : (
            <Menu size={24} className="text-primary" />
          )}
        </button>
      </div>{" "}
      {/* Menu Panel - Açılır menü */}
      {isMenuOpen && (
        <div className="w-full bg-surface border-t border-gray-200 shadow-lg fixed left-0 right-0 z-40 transition-colors duration-300 top-[6.5rem] h-[calc(100vh-6.5rem)]">
          {/* Topbar h-10 + header h-16 = 6.5rem */}
          <div className="p-6 space-y-4">
            {headerMenuLinks.map((link) => {
              const hasSubLinks = link.subLinks && link.subLinks.length > 0;
              const isActive =
                pathname === link.slug ||
                (hasSubLinks &&
                  link.subLinks?.some((sub) => pathname === sub.slug));

              return (
                <div key={link.slug}>
                  {link.subLinks ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleSubMenu(link.slug)}
                        className={`flex items-center justify-between w-full text-lg font-semibold py-2 transition-colors duration-200 ${
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
                            openSubMenus.has(link.slug) ? "rotate-180" : ""
                          } ${isActive ? "text-secondary" : "text-gray-600"}`}
                        />
                      </button>
                      {openSubMenus.has(link.slug) && (
                        <div className="pl-4 space-y-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.slug}
                              href={subLink.slug}
                              onClick={closeMenu}
                              className={`block py-2 transition-colors duration-200 ${
                                pathname === subLink.slug
                                  ? "text-secondary font-medium"
                                  : "text-primary hover:text-secondary"
                              }`}
                            >
                              {subLink.translationKey
                                ? t(subLink.translationKey)
                                : subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.slug}
                      onClick={closeMenu}
                      className={`block py-3 text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-secondary font-semibold"
                          : "text-primary hover:text-secondary"
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
        </div>
      )}
    </>
  );
};

export default MobileHeader;
