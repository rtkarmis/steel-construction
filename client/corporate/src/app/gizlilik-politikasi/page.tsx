import { getPageMetadata } from "@/lib/metadata";
import PrivatePolicyContent from "./PrivatePolicyContent";
export const dynamic = "force-static"; // SSG
export const metadata = getPageMetadata("/gizlilik-politikasi");

const PrivatePolicyPage = () => {
  return <PrivatePolicyContent />;
};

export default PrivatePolicyPage;
