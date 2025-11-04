import { getPageMetadata } from "@/lib/metadata";
import KvkkContent from "./KvkkContent";

export const metadata = getPageMetadata("/kvkk-aydinlatma-metni");

const KvkkPage = () => {
  return <KvkkContent />;
};
export default KvkkPage;
