"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/lib/seo";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactContent() {
  const { getPage, getNavigation } = useLanguage();

  const schemaBreadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "İletişim", href: "/iletisim", isActive: true },
  ];

  const uiBreadcrumbs = [
    { label: getNavigation("navigation.home"), href: "/" },
    {
      label: getNavigation("navigation.contact"),
      href: "/iletisim",
      isActive: true,
    },
  ];

  return (
    <section className="bg-[#F3F4F6] text-gray-800 min-h-screen">
      {/* 🧭 Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Breadcrumb items={uiBreadcrumbs} />
        </div>
      </div>

      {/* Başlık */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">
          {getPage("contact", "hero.title")}
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          {getPage("contact", "hero.subtitle")}
        </p>
      </div>

      {/* Ana İçerik */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 📬 Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">
            {getPage("contact", "form.title")}
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {getPage("contact", "form.name")}
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {getPage("contact", "form.email")}
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {getPage("contact", "form.message")}
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A8A] hover:bg-[#233C99] text-white font-semibold py-3 rounded-lg transition"
            >
              {getPage("contact", "form.submit")}
            </button>
          </form>
        </div>

        {/* 📍 Bilgiler */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
              {getPage("contact", "info.title")}
            </h2>
            <p className="text-gray-700 mb-6">
              {getPage("contact", "info.description")}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E3A8A] mt-1" />
                <p>{getPage("contact", "info.address")}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1E3A8A] mt-1" />
                <p>{getPage("contact", "info.phone")}</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1E3A8A] mt-1" />
                <p>{getPage("contact", "info.email")}</p>
              </div>
            </div>
          </div>

          {/* 🕓 Çalışma Saatleri */}
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1E3A8A]" />
              {getPage("contact", "hours.title")}
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>{getPage("contact", "hours.weekdays")}</span>
                <span>
                  {siteConfig.openingHours?.weekdays?.open} -{" "}
                  {siteConfig.openingHours?.weekdays?.close}
                </span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>{getPage("contact", "hours.saturday")}</span>
                <span>
                  {siteConfig.openingHours?.saturday?.open} -{" "}
                  {siteConfig.openingHours?.saturday?.close}
                </span>
              </li>
              <li className="flex justify-between">
                <span>{getPage("contact", "hours.sunday")}</span>
                <span>
                  {siteConfig.openingHours?.sunday?.open === "Kapalı"
                    ? getPage("contact", "hours.sundayTime")
                    : `${siteConfig.openingHours?.sunday?.open} - ${siteConfig.openingHours?.sunday?.close}`}
                </span>
              </li>
            </ul>
          </div>

          {/* 🗺️ Harita */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[300px]">
            <iframe
              src={siteConfig.locationFrameUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
