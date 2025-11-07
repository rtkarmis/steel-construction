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
      {/* Critical resource preloads for home page */}

      {/* Video preload - Ana hero video için */}
      <link
        rel="preload"
        as="video"
        href="/videos/hero.webm"
        type="video/webm"
        fetchPriority="high"
      />

      {/* Fallback image preload - Video yüklenemezse veya desteklenmezse */}
      <link
        rel="preload"
        as="image"
        href="/images/home/hero.webp"
        type="image/webp"
        fetchPriority="high"
      />

      <SchemaHomePage />
      <HomeContent />
    </>
  );
};

export default Home;
