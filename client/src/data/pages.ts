import { BreadcrumbItem } from "@/types/common";

export interface PageData {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  content: PageContent;
}

export interface PageContent {
  sections: ContentSection[];
}

export interface ContentSection {
  id: string;
  type: "hero" | "info" | "contact" | "form" | "list" | "text" | "grid";
  title?: string;
  content?: string | string[];
  data?: any;
  className?: string;
}

// Sayfa verilerini merkezi olarak yönetiyoruz
export const pagesData: Record<string, PageData> = {
  "/": {
    title: "Anasayfa",
    description:
      "Güvenoğlu Çelik & Metal - Çelik yapı çözümlerinde uzman firma.",
    breadcrumbs: [{ label: "Anasayfa" }],
    content: {
      sections: [
        {
          id: "hero",
          type: "hero",
          title: "Güvenoğlu Çelik & Metal",
          content:
            "Çelik yapı sektöründe kaliteli, güvenilir ve yenilikçi çözümler sunarak hayallerinizi gerçeğe dönüştürüyoruz.",
        },
        {
          id: "about-preview",
          type: "info",
          title: "Neden Bizi Tercih Etmelisiniz?",
          content:
            "25 yıllık deneyimimiz ile çelik yapı sektöründe Türkiye'nin önde gelen firmalarından biriyiz. Kaliteli malzeme, profesyonel ekip ve zamanında teslimat garantisi ile projelerinizi hayata geçiriyoruz.",
          className: "bg-white rounded-lg shadow-sm p-8 mb-8 text-center",
        },
        {
          id: "services",
          type: "grid",
          title: "Hizmetlerimiz",
          data: {
            services: [
              {
                title: "Çelik Yapı İnşaatı",
                description:
                  "Endüstriyel ve ticari çelik yapı projeleriniz için profesyonel hizmet",
                icon: "🏗️",
              },
              {
                title: "Proje Yönetimi",
                description:
                  "Tasarımdan teslime kadar tüm süreçlerin profesyonel yönetimi",
                icon: "📋",
              },
              {
                title: "Malzeme Tedariki",
                description:
                  "Yüksek kaliteli çelik malzeme tedarik ve lojistik hizmetleri",
                icon: "🚚",
              },
              {
                title: "Bakım & Onarım",
                description:
                  "Mevcut çelik yapılarınız için bakım ve onarım hizmetleri",
                icon: "🔧",
              },
            ],
          },
          className: "bg-gray-50 py-16",
        },
        {
          id: "contact-cta",
          type: "info",
          title: "Projeniz İçin Hemen İletişime Geçin",
          content:
            "Uzman ekibimiz ile tanışın ve projeniz için en uygun çözümleri birlikte belirleyelim. Ücretsiz keşif ve teklif hizmeti sunuyoruz.",
          className:
            "bg-primary text-white rounded-lg shadow-sm p-8 text-center",
          data: {
            buttonText: "İletişime Geç",
            buttonLink: "/iletisim",
          },
        },
      ],
    },
  },

  "/hakkimizda": {
    title: "Hakkımızda",
    description: "Güvenoğlu Çelik & Metal hakkında bilgi.",
    breadcrumbs: [{ label: "Anasayfa", slug: "/" }, { label: "Hakkımızda" }],
    content: {
      sections: [
        {
          id: "mission",
          type: "info",
          title: "Misyonumuz",
          content:
            "Güvenoğlu Çelik & Metal olarak, çelik yapı sektöründe kaliteli, güvenilir ve yenilikçi çözümler sunarak müşterilerimizin hayallerini gerçeğe dönüştürmeyi amaçlıyoruz.",
          className: "bg-white rounded-lg shadow-sm p-8 mb-8",
        },
        {
          id: "vision",
          type: "info",
          title: "Vizyonumuz",
          content:
            "Türkiye'nin önde gelen çelik yapı firması olarak, uluslararası standartlarda hizmet veren, teknolojik gelişmeleri yakından takip eden ve sürdürülebilir yapı çözümleri sunan bir şirket olmak.",
          className: "bg-white rounded-lg shadow-sm p-8 mb-8",
        },
        {
          id: "values",
          type: "list",
          title: "Değerlerimiz",
          content: [
            "Kalite ve güvenlik önceliği",
            "Müşteri memnuniyeti odaklı hizmet",
            "Çevreye duyarlı üretim",
            "Sürekli gelişim ve yenilik",
          ],
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },

  "/iletisim": {
    title: "İletişim",
    description: "Güvenoğlu Çelik & Metal iletişim bilgileri.",
    breadcrumbs: [{ label: "Anasayfa", slug: "/" }, { label: "İletişim" }],
    content: {
      sections: [
        {
          id: "contact-info",
          type: "contact",
          title: "İletişim Bilgileri",
          data: {
            address:
              "Örnek Mahallesi, Çelik Sokak No:123\n34000 İstanbul, Türkiye",
            phone: "+90 212 xxx xx xx",
            email: "info@guvenoglucelik.com",
            workingHours:
              "Pazartesi - Cuma: 09:00 - 18:00\nCumartesi: 09:00 - 14:00",
          },
          className: "bg-white rounded-lg shadow-sm p-8",
        },
        {
          id: "contact-form",
          type: "form",
          title: "İletişim Formu",
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },

  "/sss": {
    title: "SSS",
    description: "Güvenoğlu Çelik & Metal sıkça sorulan sorular.",
    breadcrumbs: [{ label: "Anasayfa", slug: "/" }, { label: "SSS" }],
    content: {
      sections: [
        {
          id: "faq-intro",
          type: "text",
          title: "SSS",
          content:
            "Çelik yapı projeleri hakkında merak ettiğiniz sorular ve cevapları.",
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },

  "/gizlilik-politikasi": {
    title: "Gizlilik Politikası",
    description: "Güvenoğlu Çelik & Metal gizlilik politikası.",
    breadcrumbs: [
      { label: "Anasayfa", slug: "/" },
      { label: "Politikalar", slug: "/politikalar" },
      { label: "Gizlilik Politikası" },
    ],
    content: {
      sections: [
        {
          id: "privacy-policy",
          type: "text",
          content:
            "Bu gizlilik politikası, kişisel verilerinizin Güvenoğlu Çelik & Metal tarafından nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.",
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },

  "/cerez-politikasi": {
    title: "Çerez Politikası",
    description: "Güvenoğlu Çelik & Metal çerez politikası.",
    breadcrumbs: [
      { label: "Anasayfa", slug: "/" },
      { label: "Politikalar", slug: "/politikalar" },
      { label: "Çerez Politikası" },
    ],
    content: {
      sections: [
        {
          id: "cookie-policy",
          type: "text",
          content:
            "Bu sayfa Güvenoğlu Çelik & Metal web sitesinde kullanılan çerezler hakkında bilgi vermektedir.",
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },

  "/kvkk-aydinlatma-metni": {
    title: "KVKK Aydınlatma Metni",
    description: "Güvenoğlu Çelik & Metal KVKK aydınlatma metni.",
    breadcrumbs: [
      { label: "Anasayfa", slug: "/" },
      { label: "Politikalar", slug: "/politikalar" },
      { label: "KVKK Aydınlatma Metni" },
    ],
    content: {
      sections: [
        {
          id: "kvkk-text",
          type: "text",
          content:
            "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesi hakkında aydınlatma metni.",
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },

  "/site-haritasi": {
    title: "Site Haritası",
    description: "Güvenoğlu Çelik & Metal site haritası.",
    breadcrumbs: [{ label: "Anasayfa", slug: "/" }, { label: "Site Haritası" }],
    content: {
      sections: [
        {
          id: "sitemap",
          type: "grid",
          title: "Tüm Sayfalar",
          className: "bg-white rounded-lg shadow-sm p-8",
        },
      ],
    },
  },
};

// Sayfa verilerini almak için yardımcı fonksiyon
export const getPageData = (path: string): PageData | null => {
  return pagesData[path] || null;
};

// Breadcrumb verilerini almak için yardımcı fonksiyon
export const getPageBreadcrumbs = (path: string): BreadcrumbItem[] => {
  const pageData = getPageData(path);
  return pageData?.breadcrumbs || [];
};
