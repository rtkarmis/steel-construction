"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { footerData } from "@/data/footer";
import { MenuItem } from "@/types/common";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

// 🔹 Import BottomBar
import BottomBar from "@/components/layout/BottomBar";

// 🔹 Lazy-load Schema Footer
const SchemaFooter = dynamic(() => import("@/components/seo/SchemaFooter"), {
  ssr: true,
});

export default function Footer() {
  const { company, navigation, contact, legal } = footerData;
  const { t, language } = useLanguage();

  return (
    <>
      <footer id="footer" className="bg-surface border-t border-border pt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
          {/* 🟣 Hakkında */}
          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">
              {language === "tr"
                ? company.name
                : company.nameEn || company.name}
            </h3>
            <p className="text-sm text-text leading-relaxed mb-4">
              {language === "tr"
                ? company.description
                : company.descriptionEn || company.description}
            </p>
            <div className="flex items-center gap-6 mt-4">
              {company.socialLinks.instagram && (
                <Link
                  href={company.socialLinks.instagram}
                  target="_blank"
                  aria-label="Instagram"
                  className="text-text md:hover:text-secondary transition-colors p-2 -m-2 rounded-lg touch-manipulation"
                >
                  <Instagram size={20} />
                </Link>
              )}
              {company.socialLinks.facebook && (
                <Link
                  href={company.socialLinks.facebook}
                  target="_blank"
                  aria-label="Facebook"
                  className="text-text md:hover:text-secondary transition-colors p-2 -m-2 rounded-lg touch-manipulation"
                >
                  <Facebook size={20} />
                </Link>
              )}
              {company.socialLinks.whatsapp && (
                <Link
                  href={company.socialLinks.whatsapp}
                  target="_blank"
                  aria-label="WhatsApp"
                  className="text-text md:hover:text-secondary transition-colors p-2 -m-2 rounded-lg touch-manipulation"
                >
                  <MessageCircle size={20} />
                </Link>
              )}
            </div>
          </section>

          {/* 🔹 Hızlı Erişim */}
          <nav>
            <h4 className="text-lg font-semibold text-primary mb-3">
              {t("footer.quickAccess")}
            </h4>
            <ul className="space-y-3 text-sm text-text">
              {navigation.quickAccess.map((link: MenuItem) => (
                <li key={link.slug}>
                  <Link
                    href={link.slug}
                    className="md:hover:text-secondary transition py-1 px-2 -mx-2 rounded block touch-manipulation"
                  >
                    {link.translationKey ? t(link.translationKey) : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 🔹 Bilgi Merkezi */}
          <nav>
            <h4 className="text-lg font-semibold text-primary mb-3">
              {t("footer.informationCenter")}
            </h4>
            <ul className="space-y-3 text-sm text-text">
              {navigation.information.map((link: MenuItem) => (
                <li key={link.slug}>
                  <Link
                    href={link.slug}
                    className="md:hover:text-secondary py-1 px-2 -mx-2 rounded block touch-manipulation"
                  >
                    {link.translationKey ? t(link.translationKey) : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 🔹 Politikalar */}
          <nav>
            <h4 className="text-lg font-semibold text-primary mb-3">
              {t("footer.policies")}
            </h4>
            <ul className="space-y-3 text-sm text-text">
              {navigation.policies.map((link: MenuItem) => (
                <li key={link.slug}>
                  <Link
                    href={link.slug}
                    className="md:hover:text-secondary py-1 px-2 -mx-2 rounded block touch-manipulation"
                  >
                    {link.translationKey ? t(link.translationKey) : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 🔹 İletişim */}
          <section>
            <h4 className="text-lg font-semibold text-primary mb-3">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4 text-sm text-text mb-4">
              <li className="flex items-start gap-2">
                <MapPin className="text-text/60 mt-[3px]" size={14} />
                <span>
                  {language === "tr"
                    ? contact.address
                    : contact.addressEn || contact.address}
                </span>
              </li>
              <li>
                <Phone className="inline-block text-text/60 mr-2" size={14} />
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="md:hover:text-secondary py-1 px-2 -mx-2 rounded touch-manipulation"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <Mail className="inline-block text-text/60 mr-2" size={14} />
                <a
                  href={`mailto:${contact.email}`}
                  className="md:hover:text-secondary py-1 px-2 -mx-2 rounded touch-manipulation"
                >
                  {contact.email}
                </a>
              </li>
            </ul>

            {/* 📍 Harita Lazy-load */}
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 aspect-[4/3]">
              <iframe
                src={contact.mapUrl}
                loading="lazy"
                width="100%"
                height="100%"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                title={contact.mapTitle}
              />
            </div>
          </section>
        </div>
      </footer>

      <BottomBar />
      <SchemaFooter />
    </>
  );
}
