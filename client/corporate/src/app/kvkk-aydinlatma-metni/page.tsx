import { getPageMetadata } from "@/lib/metadata";
import KvkkContent from "./KvkkContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/kvkk-aydinlatma-metni");

const KvkkPage = () => {
  return <KvkkContent />;
};
export default KvkkPage;
