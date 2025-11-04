"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera, Film, Image, Play } from "lucide-react";

const MediaContent = () => {
  const { t } = useLanguage();

  const breadcrumbs = [{ label: "Anasayfa", slug: "/" }, { label: "Medya" }];

  // Örnek medya içerikleri
  const mediaItems = [
    {
      id: 1,
      title: "Fabrika İnşaatı Timelapse",
      type: "video",
      thumbnail: "/images/media/video1.jpg",
      date: "2024-10-15",
    },
    {
      id: 2,
      title: "Çelik Yapı Montaj Süreci",
      type: "image",
      thumbnail: "/images/media/image1.jpg",
      date: "2024-10-10",
    },
    {
      id: 3,
      title: "Proje Teslim Töreni",
      type: "video",
      thumbnail: "/images/media/video2.jpg",
      date: "2024-10-05",
    },
    {
      id: 4,
      title: "Çelik İşçiliği Detayları",
      type: "image",
      thumbnail: "/images/media/image2.jpg",
      date: "2024-09-28",
    },
  ];

  return (
    <div className="bg-background">
      {/* Medya Hero */}
      <div className="bg-gradient-to-r from-secondary to-accent text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-white/80 mb-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
          <div className="text-white text-4xl md:text-5xl font-bold">
            <PageTitle text="Medya" />
          </div>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            {t("media.subtitle")}
          </p>
        </div>
      </div>

      {/* Medya İçeriği */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Filtre Butonları */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
            Tümü
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
            Videolar
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
            Fotoğraflar
          </button>
        </div>

        {/* Medya Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Film className="w-16 h-16 text-primary/30" />
                  ) : (
                    <Image className="w-16 h-16 text-primary/30" />
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="w-12 h-12 text-white" />
                  ) : (
                    <Camera className="w-12 h-12 text-white" />
                  )}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-white text-xs px-2 py-1 rounded ${
                      item.type === "video" ? "bg-red-500" : "bg-blue-500"
                    }`}
                  >
                    {item.type === "video" ? "Video" : "Fotoğraf"}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text/60 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Galeri Bilgisi */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Medya Galerimiz
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Projelerimizin her aşamasını fotoğraf ve video ile belgeliyoruz.
            Çalışmalarımızı yakından takip edebilir, süreçlerimizi
            inceleyebilirsiniz.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">200+</div>
              <div className="text-gray-600 text-sm">Fotoğraf</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-gray-600 text-sm">Video</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-gray-600 text-sm">Proje Timelapse</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-gray-600 text-sm">Belgesel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaContent;
