import { getPageMetadata } from "@/lib/metadata";
import CookiePolicyContent from "./CookiePolicyContent";

export const metadata = getPageMetadata("/cerez-politikasi");

const CookiePolicyPage = () => {
  return <CookiePolicyContent />;
};
export default CookiePolicyPage;
