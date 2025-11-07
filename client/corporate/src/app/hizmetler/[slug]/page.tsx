import SchemaServiceDetailPage from "@/components/seo/pages/SchemaServiceDetailPage";
import { services } from "@/data/service";
import { getPageMetadata } from "@/lib/metadata";
import ServiceDetailContent from "./ServiceDetailContent";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.replace("/hizmetler/", "") }));
}

// Tamamen statik sayfa
export const dynamic = "error";
export const revalidate = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug.endsWith(slug));
  return getPageMetadata(service ? service.slug : "/hizmetler");
}

const ServiceDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const service = services.find((s) => {
    const serviceSlug = s.slug.replace("/hizmetler/", "");
    return serviceSlug === slug;
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Hizmet bulunamadı</h1>
          <p className="text-text/70 mt-2">
            İstediğiniz hizmet sayfası bulunamadı.
          </p>
          <div className="mt-6">
            <a
              href="/hizmetler"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Hizmetlere Dön
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Critical resource preloads for service detail page */}
      <link
        rel="preload"
        as="image"
        href={`/images/service/${service.key}/hero.webp`}
        type="image/webp"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={`/images/service/${service.key}/detail.webp`}
        type="image/webp"
        fetchPriority="high"
      />
      <SchemaServiceDetailPage service={service} />
      <ServiceDetailContent service={service} />
    </>
  );
};
export default ServiceDetailPage;
