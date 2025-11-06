import { getPageMetadata } from "@/lib/metadata";
import CookiePolicyContent from "./CookiePolicyContent";

export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/cerez-politikasi");

const CookiePolicyPage = () => {
  return <CookiePolicyContent />;
};
export default CookiePolicyPage;
