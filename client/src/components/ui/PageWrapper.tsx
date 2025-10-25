import Breadcrumb from "@/components/ui/Breadcrumb";
import ContentRenderer from "@/components/ui/ContentRenderer";
import PageTitle from "@/components/ui/PageTitle";
import { getPageData } from "@/data/pages";

interface PageWrapperProps {
  path: string;
}

export default function PageWrapper({ path }: PageWrapperProps) {
  const pageData = getPageData(path);

  if (!pageData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-800">Sayfa bulunamadı</h1>
        <p className="text-gray-600 mt-4">Aradığınız sayfa mevcut değil.</p>
      </div>
    );
  }

  const { title, breadcrumbs, content } = pageData;

  // Ana sayfa için özel düzen
  if (path === "/") {
    return (
      <div>
        {content.sections.map((section) => (
          <ContentRenderer key={section.id} section={section} />
        ))}
      </div>
    );
  }

  // Diğer sayfalar için standart düzen
  return (
    <div>
      <Breadcrumb items={breadcrumbs} />
      <PageTitle text={title} />

      {/* İletişim sayfası için özel grid düzeni */}
      {path === "/iletisim" && content.sections.length === 2 ? (
        <div className="grid md:grid-cols-2 gap-8">
          {content.sections.map((section) => (
            <ContentRenderer key={section.id} section={section} />
          ))}
        </div>
      ) : (
        // Diğer sayfalar için normal düzen
        content.sections.map((section) => (
          <ContentRenderer key={section.id} section={section} />
        ))
      )}
    </div>
  );
}
