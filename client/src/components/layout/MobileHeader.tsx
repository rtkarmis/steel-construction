"use client";

import Logo from "@/components/ui/Logo";
import { headerMenuLinks } from "@/data/menu";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());

  const toggleSubMenu = (href: string) => {
    const newOpenSubMenus = new Set(openSubMenus);
    if (newOpenSubMenus.has(href)) {
      newOpenSubMenus.delete(href);
    } else {
      newOpenSubMenus.add(href);
    }
    setOpenSubMenus(newOpenSubMenus);
  };

  // 🧭 Scroll kilitleme
  useEffect(() => {
    const doc = document.documentElement;
    const body = document.body;

    if (isMenuOpen) {
      // Preserve current scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
      // store the scroll position on the html element for restoration
      doc.style.setProperty("--mobile-menu-scroll-y", String(scrollY));
    } else {
      // Restore
      const stored =
        parseInt(
          doc.style.getPropertyValue("--mobile-menu-scroll-y") || "0",
          10
        ) || 0;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, stored);
      doc.style.removeProperty("--mobile-menu-scroll-y");
    }

    return () => {
      // cleanup in case component unmounts while locked
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      doc.style.removeProperty("--mobile-menu-scroll-y");
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
      <div className="h-16 w-full bg-background border-b border-gray-200 flex items-center justify-center relative">
        {/* Logo - Ortada */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>

        {/* Menu Button - Sağda */}
        <button
          onClick={toggleMenu}
          className="absolute right-4 p-2 rounded-md hover:bg-gray-100"
          aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>{" "}
      {/* Menu Panel - Açılır menü */}
      {isMenuOpen && (
        <div
          className="w-full bg-white border-t border-gray-200 shadow-lg"
          style={{
            height: "calc(100vh - 4rem)", // h-screen - h-16
            top: "4rem", // h-16
            position: "fixed",
            left: 0,
            zIndex: 40,
          }}
        >
          <div className="p-6 space-y-4">
            {headerMenuLinks.map((link) => (
              <div key={link.slug}>
                {link.subLinks ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSubMenu(link.slug)}
                      className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 py-2"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={20}
                        className={`${
                          openSubMenus.has(link.slug) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubMenus.has(link.slug) && (
                      <div className="pl-4 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.slug}
                            href={subLink.slug}
                            onClick={closeMenu}
                            className="block py-2 text-gray-600"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.slug}
                    onClick={closeMenu}
                    className="block py-3 text-lg font-medium text-gray-900"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
