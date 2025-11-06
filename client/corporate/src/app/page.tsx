import SchemaHomePage from "@/components/seo/pages/SchemaHomePage";
import { getPageMetadata } from "@/lib/metadata";
import HomeContent from "./HomeContent";

// Statik sayfa generation
export const dynamic = "force-static";
export const revalidate = false;
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
