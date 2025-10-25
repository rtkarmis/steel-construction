import { allLinks } from "@/data/menu";
import { ContentSection } from "@/data/pages";
import Link from "next/link";

interface ContentRendererProps {
  section: ContentSection;
}

export default function ContentRenderer({ section }: ContentRendererProps) {
  const { type, title, content, data, className = "" } = section;

  const renderContent = () => {
    switch (type) {
      case "hero":
        return (
          <div className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-white">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative text-center py-24 px-4">
              {title && (
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
              )}
              {content && (
                <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                  {content}
                </p>
              )}
              <div className="mt-8">
                <Link
                  href="/iletisim"
                  className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Hemen Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        );

      case "info":
        return (
          <div className={className}>
            {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
            {content && <p className="leading-relaxed mb-6">{content}</p>}
            {data?.buttonText && data?.buttonLink && (
              <div className="text-center">
                <Link
                  href={data.buttonLink}
                  className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {data.buttonText}
                </Link>
              </div>
            )}
          </div>
        );

      case "text":
        return (
          <div className={className}>
            {title && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {title}
              </h2>
            )}
            {content && (
              <p className="text-gray-600 leading-relaxed">{content}</p>
            )}
          </div>
        );

      case "list":
        return (
          <div className={className}>
            {title && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {title}
              </h2>
            )}
            {Array.isArray(content) && (
              <ul className="text-gray-600 leading-relaxed space-y-3">
                {content.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      case "contact":
        return (
          <div className={className}>
            {title && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {title}
              </h2>
            )}
            {data && (
              <div className="space-y-4">
                {data.address && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Adres</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {data.address}
                    </p>
                  </div>
                )}
                {data.phone && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Telefon
                    </h3>
                    <p className="text-gray-600">{data.phone}</p>
                  </div>
                )}
                {data.email && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      E-posta
                    </h3>
                    <p className="text-gray-600">{data.email}</p>
                  </div>
                )}
                {data.workingHours && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {data.workingHours}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case "form":
        return (
          <div className={className}>
            {title && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {title}
              </h2>
            )}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mesaj *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-600"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        );

      case "grid":
        return (
          <div className={className}>
            {title && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                {title}
              </h2>
            )}

            {/* Services Grid */}
            {data?.services ? (
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.services.map((service: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Site Map Grid */
              <div className="grid md:grid-cols-2 gap-4">
                {allLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.item.slug}
                    className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-200"
                  >
                    <span className="text-primary font-medium">
                      {link.item.label}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {link.item.slug}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
}
