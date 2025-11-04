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
import { Database, Eye, Lock, Settings, Shield, UserCheck } from "lucide-react";

const PrivatePolicyContent = () => {
  const { getNavigation } = useLanguage();
  // Schema için Türkçe linkler (İngilizce sayfalar yok)
  const schemaBreadcrumbs = getBreadcrumbsForSchema("/gizlilik-politikasi");

  // UI için çeviri desteği
  const uiBreadcrumbs = getBreadcrumbsForUI(
    "/gizlilik-politikasi",
    getNavigation
  );

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
            <PageTitle text="Gizlilik Politikası" />
            <p className="text-text/70 mt-1 text-lg">
              Kişisel verilerinizin korunması konusundaki yaklaşımımız
            </p>
          </div>
        </div>
        <div className="bg-background border border-border/40 rounded-2xl p-4 md:p-6">
          <p className="text-text/80">
            {siteConfig.siteName} olarak verilerinizin gizliliğini korumaya
            kararlıyız. Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg transition-all">
            <div className="p-4 bg-blue-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">Şeffaflık</h2>
            <p className="text-text/70 leading-relaxed">
              Verilerinizi nasıl topladığımız ve kullandığımız konusunda açık ve
              net bilgi veriyoruz.
            </p>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg transition-all">
            <div className="p-4 bg-green-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-green-100 transition-colors">
              <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">Güvenlik</h2>
            <p className="text-text/70 leading-relaxed">
              Verilerinizi en yüksek güvenlik standartlarıyla koruyoruz.
            </p>
          </div>

          <div className="bg-surface border border-border/40 rounded-2xl p-6 md:p-8 text-center group hover:shadow-lg transition-all">
            <div className="p-4 bg-purple-50 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-purple-100 transition-colors">
              <UserCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="font-bold text-primary mb-3 text-lg">Kontrol</h2>
            <p className="text-text/70 leading-relaxed">
              Verileriniz üzerinde tam kontrol sahibi olmanızı sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Shield className="w-7 h-7 text-secondary" />
              Gizlilik Politikamız
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="leading-relaxed">
                {siteConfig.siteName} olarak, kişisel bilgilerinizin gizliliğini
                korumayı taahhüt ediyoruz. Bu gizlilik politikası, web sitemizi
                ziyaret ettiğinizde kişisel bilgilerinizi nasıl topladığımızı,
                kullandığımızı ve koruduğumuzu açıklar.
              </p>
            </div>
          </article>

          {/* Data Collection */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Database className="w-7 h-7 text-secondary" />
              Topladığımız Bilgiler
            </h2>

            <div className="grid gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-4 text-lg">
                  Kişisel Bilgiler
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Ad ve soyad",
                    "E-posta adresi",
                    "Telefon numarası",
                    "Şirket bilgileri",
                    "Proje gereksinimleri",
                    "İletişim tercihleri",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-blue-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4 text-lg">
                  Otomatik Toplanan Bilgiler
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "IP adresi",
                    "Tarayıcı türü ve sürümü",
                    "Ziyaret edilen sayfalar",
                    "Ziyaret süresi",
                    "Cihaz bilgileri",
                    "Coğrafi konum (yaklaşık)",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-green-700"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Data Usage */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Settings className="w-7 h-7 text-secondary" />
              Bilgileri Nasıl Kullanıyoruz
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:
              </p>
              <div className="grid gap-4">
                {[
                  "Hizmet taleplerini değerlendirmek ve yanıtlamak",
                  "Teklifler hazırlamak ve göndermek",
                  "Müşteri hizmetleri sağlamak",
                  "Web sitemizi iyileştirmek",
                  "Yasal yükümlülükleri yerine getirmek",
                  "Pazarlama iletişimi (onay verdiğiniz takdirde)",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background/60 rounded-lg border border-border/30"
                  >
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-text/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Data Sharing */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <UserCheck className="w-7 h-7 text-secondary" />
              Bilgi Paylaşımı
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Kişisel bilgilerinizi aşağıdaki durumlar dışında üçüncü
                taraflarla paylaşmayız:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Yasal zorunluluklar", color: "red" },
                  { title: "Hizmet sağlayıcıları", color: "blue" },
                  { title: "İş transferi durumları", color: "green" },
                  { title: "Açık rızanızla", color: "purple" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 bg-${item.color}-50 border border-${item.color}-200 rounded-lg`}
                  >
                    <div
                      className={`w-3 h-3 bg-${item.color}-500 rounded-full mb-2`}
                    ></div>
                    <span className={`text-${item.color}-700 font-medium`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Data Security */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Lock className="w-7 h-7 text-secondary" />
              Veri Güvenliği
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Kişisel bilgilerinizi korumak için teknik ve organizasyonel
                güvenlik önlemleri alıyoruz:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "SSL şifreleme kullanımı" },
                  { icon: Lock, text: "Güvenli sunucu altyapısı" },
                  {
                    icon: Settings,
                    text: "Düzenli güvenlik güncellemeleri",
                  },
                  { icon: UserCheck, text: "Erişim kontrolü" },
                  { icon: Database, text: "Düzenli veri yedekleme" },
                  { icon: Eye, text: "Sürekli izleme sistemleri" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background/60 rounded-lg border border-border/30"
                  >
                    <item.icon className="w-5 h-5 text-secondary" />
                    <span className="text-text/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* User Rights */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Eye className="w-7 h-7 text-secondary" />
              Haklarınız
            </h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
              </p>
              <div className="space-y-3">
                {[
                  "Hangi kişisel verilerinizin işlendiğini öğrenme",
                  "Verilerinizin düzeltilmesini talep etme",
                  "Verilerinizin silinmesini talep etme",
                  "Veri işlemeye itiraz etme",
                  "Veri taşınabilirliği hakkı",
                  "Otomatik karar verme süreçlerine itiraz etme",
                ].map((right, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-background/60 rounded-lg border border-border/30"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Eye className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-text/80">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Contact */}
          <article className="bg-surface/50 border border-border/40 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">İletişim</h2>
            <div className="prose prose-lg max-w-none text-text/80">
              <p className="mb-6 leading-relaxed">
                Gizlilik politikamız hakkında sorularınız veya veri haklarınızı
                kullanmak istiyorsanız bizimle iletişime geçebilirsiniz:
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

          {/* Policy Changes */}
          <article className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Politika Değişiklikleri
            </h2>
            <p className="text-amber-700 leading-relaxed">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli
              değişiklikler olduğunda sizi web sitemiz üzerinden ve e-posta
              yoluyla bilgilendireceğiz.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PrivatePolicyContent;
