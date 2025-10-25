import { getPageMetadata } from "@/lib/metadata";
import PrivatePolicyContent from "./PrivatePolicyContent";

export const metadata = getPageMetadata("/gizlilik-politikasi");

const PrivatePolicyPage = () => {
  return <PrivatePolicyContent />;
};

export default PrivatePolicyPage;
