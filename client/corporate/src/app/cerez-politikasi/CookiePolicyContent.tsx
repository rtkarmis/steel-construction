"use client";

import SchemaBreadcrumb from "@/components/seo/SchemaBreadcrumb";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getBreadcrumbsForSchema,
  getBreadcrumbsForUI,
} from "@/lib/breadcrumbs";
import { siteConfig } from "@/lib/seo";
import { Cookie, Eye, Settings, Shield } from "lucide-react";

const CookiePolicyContent = () => {
  const { getNavigation } = useLanguage();
  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/cerez-politikasi");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI("/cerez-politikasi", getNavigation);

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Schema Breadcrumb */}
      <SchemaBreadcrumb items={schemaBreadcrumbs} />

      {/* UI Breadcrumb */}
      <div className="bg-background/60 border-t border-border/40">
        <Breadcrumb items={uiBreadcrumbs} />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center bg-surface py-12 border-b border-border/20 rounded-2xl">
        <div className="mb-4">
          <div>
            <PageTitle text="Çerez Politikası" />
            <p className="text-text/70 mt-2 text-lg">
              Web sitemizde kullandığımız çerezler hakkında detaylı bilgi
            </p>
          </div>
        </div>
        <div className="bg-background border border-border/40 rounded-2xl p-4 md:p-6">
          <p className="text-text/80">
            Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16">
        {/* Overview Card */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/40 rounded-2xl p-4 md:p-8 mb-12">
          <div className="flex items-start gap-4">
            <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">
                Çerez Politikası Özeti
              </h2>
              <p className="text-text/80 leading-relaxed">
                Bu çerez politikası, {siteConfig.siteName} web sitesinde
                kullanılan çerezler, bunların amaçları ve yönetim seçenekleri
                hakkında bilgi vermektedir.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* What are Cookies */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-4 md:p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Cookie className="w-7 h-7 text-secondary" />
              Çerez Nedir?
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-4 leading-relaxed">
                Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
                tarafından bilgisayarınıza veya mobil cihazınıza kaydedilen
                küçük metin dosyalarıdır. Çerezler, web sitelerinin düzgün
                çalışmasını sağlamak ve kullanıcı deneyimini iyileştirmek için
                yaygın olarak kullanılır.
              </p>
              <p className="leading-relaxed">
                Web sitemizde kullanıcı deneyimini optimize etmek, performansı
                ölçmek ve güvenliği sağlamak amacıyla çerezler kullanmaktayız.
              </p>
            </div>
          </article>

          {/* Cookie Types */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-4 md:p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Settings className="w-7 h-7 text-secondary" />
              Kullandığımız Çerez Türleri
            </h2>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3 text-lg">
                  Zorunlu Çerezler
                </h3>
                <p className="text-green-700 leading-relaxed">
                  Web sitesinin temel işlevlerinin çalışması için gerekli olan
                  çerezlerdir. Bu çerezler olmadan web sitesi düzgün çalışamaz
                  ve devre dışı bırakılamazlar.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-3 text-lg">
                  Performans Çerezleri
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  Web sitesinin performansını ölçmek ve iyileştirmek için
                  kullanılan çerezlerdir. Ziyaretçi sayısı, sayfa
                  görüntülemeleri gibi anonim istatistiksel bilgileri toplar.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-800 mb-3 text-lg">
                  İşlevsel Çerezler
                </h3>
                <p className="text-purple-700 leading-relaxed">
                  Kullanıcı tercihlerini hatırlamak ve kişiselleştirilmiş
                  deneyim sunmak için kullanılan çerezlerdir. Dil seçimi, bölge
                  tercihi gibi ayarları saklar.
                </p>
              </div>
            </div>
          </article>

          {/* Cookie Management */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Eye className="w-7 h-7 text-secondary" />
              Çerez Yönetimi ve Kontrolü
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Çerezleri yönetmek için tarayıcınızın ayarlarını
                kullanabilirsiniz. Çoğu tarayıcı çerezleri otomatik olarak kabul
                edecek şekilde ayarlanmıştır, ancak bunu değiştirebilirsiniz.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
                <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Önemli Bilgi
                </h4>
                <p className="text-amber-700 leading-relaxed">
                  Çerezleri devre dışı bırakırsanız, web sitesinin bazı
                  özellikleri düzgün çalışmayabilir. Özellikle zorunlu çerezler,
                  sitenin temel işlevleri için gereklidir.
                </p>
              </div>
            </div>
          </article>

          {/* Third Party Cookies */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-secondary" />
              Üçüncü Taraf Çerezleri
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Web sitemizde aşağıdaki üçüncü taraf hizmetlerinden çerezler
                kullanılabilir:
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-4 bg-background/60 rounded-lg border border-border/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Google Analytics</span>
                  <span className="text-text/60">-</span>
                  <span className="text-text/70">
                    Web sitesi trafiğini analiz etmek için
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/60 rounded-lg border border-border/30">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Google Maps</span>
                  <span className="text-text/60">-</span>
                  <span className="text-text/70">
                    Konum bilgilerini göstermek için
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/60 rounded-lg border border-border/30">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">Google Fonts</span>
                  <span className="text-text/60">-</span>
                  <span className="text-text/70">
                    Web sitesi tipografisi için
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Contact */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">İletişim</h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Çerez politikamız hakkında sorularınız varsa bizimle iletişime
                geçebilirsiniz:
              </p>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-border/40 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-1">E-posta</p>
                    <p className="text-text/80">{siteConfig.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Telefon</p>
                    <p className="text-text/80">{siteConfig.phoneDisplay}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-primary mb-1">Adres</p>
                    <p className="text-text/80">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyContent;
