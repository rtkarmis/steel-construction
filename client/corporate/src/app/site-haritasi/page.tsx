import { getPageMetadata } from "@/lib/metadata";
import SiteMapContent from "./SiteMapContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/site-haritasi");

const SiteMapPage = () => {
  return <SiteMapContent />;
};

export default SiteMapPage;
