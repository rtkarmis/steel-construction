import SchemaHomePage from "@/components/seo/pages/SchemaHomePage";
import { getPageMetadata } from "@/lib/metadata";
import HomeContent from "./HomeContent";

// Statik sayfa generation
export const dynamic = "error";
export const revalidate = false;

// Statik generation için
export function generateStaticParams() {
  return [{}]; // Ana sayfa için boş params
}

export const metadata = getPageMetadata("/");

const Home = () => {
  return (
    <>
      <SchemaHomePage />
      <HomeContent />
    </>
  );
};

export default Home;
