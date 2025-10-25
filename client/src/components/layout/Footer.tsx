"use client";

import { footerData } from "@/data/footer";
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

// 🔹 Lazy-load Schema Footer
const SchemaFooter = dynamic(() => import("@/components/seo/SchemaFooter"), {
  ssr: true,
});

export default function Footer() {
  const { company, navigation, contact, legal } = footerData;

  return (
    <footer
      id="footer"
      className="bg-[#f9fafb] border-t border-gray-200 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* 🟣 Hakkında */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {company.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {company.description}
          </p>
          <div className="flex items-center gap-4 mt-4">
            {company.socialLinks.instagram && (
              <Link
                href={company.socialLinks.instagram}
                target="_blank"
                aria-label="Instagram"
                className="text-gray-600 hover:text-pink-600 transition-colors touch-target pointer-target"
              >
                <Instagram size={20} />
              </Link>
            )}
            {company.socialLinks.facebook && (
              <Link
                href={company.socialLinks.facebook}
                target="_blank"
                aria-label="Facebook"
                className="text-gray-600 hover:text-primary transition-colors touch-target pointer-target"
              >
                <Facebook size={20} />
              </Link>
            )}
            {company.socialLinks.whatsapp && (
              <Link
                href={company.socialLinks.whatsapp}
                target="_blank"
                aria-label="WhatsApp"
                className="text-gray-600 hover:text-green-600 transition-colors touch-target pointer-target"
              >
                <MessageCircle size={20} />
              </Link>
            )}
          </div>
        </section>

        {/* 🔹 Hızlı Erişim */}
        <nav>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Hızlı Erişim
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {navigation.quickAccess.map((link) => (
              <li key={link.slug}>
                <Link
                  href={link.slug}
                  className="hover:text-primary transition touch-target pointer-target"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 🔹 Bilgi Merkezi */}
        <nav>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Bilgi Merkezi
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {navigation.information.map((link) => (
              <li key={link.slug}>
                <Link
                  href={link.slug}
                  className="hover:text-primary touch-target pointer-target"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 🔹 Politikalar */}
        <nav>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Politikalar
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {navigation.policies.map((link) => (
              <li key={link.slug}>
                <Link
                  href={link.slug}
                  className="hover:text-primary touch-target pointer-target"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 🔹 İletişim */}
        <section>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">İletişim</h4>
          <ul className="space-y-3 text-sm text-gray-700 mb-4">
            <li className="flex items-start gap-2">
              <MapPin className="text-gray-500 mt-[3px]" size={14} />
              <span>{contact.address}</span>
            </li>
            <li>
              <Phone className="inline-block text-gray-500 mr-2" size={14} />
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-primary touch-target pointer-target"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <Mail className="inline-block text-gray-500 mr-2" size={14} />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-primary touch-target"
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

      {/* ⚫ Alt Bilgi */}
      <div className="border-t border-gray-200 mt-10 pt-5 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} {legal.siteName}. Tüm hakları saklıdır.
        </p>
      </div>

      <SchemaFooter />
    </footer>
  );
}
