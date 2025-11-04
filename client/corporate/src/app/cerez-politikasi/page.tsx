import { getPageMetadata } from "@/lib/metadata";
import CookiePolicyContent from "./CookiePolicyContent";
export const dynamic = "force-static"; // SSG
export const metadata = getPageMetadata("/cerez-politikasi");

const CookiePolicyPage = () => {
  return <CookiePolicyContent />;
};
export default CookiePolicyPage;
