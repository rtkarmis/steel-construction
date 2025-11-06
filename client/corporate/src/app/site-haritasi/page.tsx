import { getPageMetadata } from "@/lib/metadata";
import SiteMapContent from "./SiteMapContent";

// Statik sayfa generation
export const dynamic = "force-static";
export const revalidate = false;
export const metadata = getPageMetadata("/site-haritasi");

const SiteMapPage = () => {
  return <SiteMapContent />;
};

export default SiteMapPage;
