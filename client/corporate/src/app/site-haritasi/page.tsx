import { getPageMetadata } from "@/lib/metadata";
import SiteMapContent from "./SiteMapContent";

export const metadata = getPageMetadata("/site-haritasi");

const SiteMapPage = () => {
  return <SiteMapContent />;
};

export default SiteMapPage;
