import { getPageMetadata } from "@/lib/metadata";
import KvkkContent from "./KvkkContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;
export const metadata = getPageMetadata("/kvkk-aydinlatma-metni");

const KvkkPage = () => {
  return <KvkkContent />;
};
export default KvkkPage;
