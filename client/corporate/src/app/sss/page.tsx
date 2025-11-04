import { getPageMetadata } from "@/lib/metadata";
import SSSContent from "./SSSContent";

export const metadata = getPageMetadata("/sss");

const SSSPage = () => {
  return <SSSContent />;
};
export default SSSPage;
