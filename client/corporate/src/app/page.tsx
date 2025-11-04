import SchemaHomePage from "@/components/seo/pages/SchemaHomePage";
import { getPageMetadata } from "@/lib/metadata";
import HomeContent from "./HomeContent";

export const revalidate = 86400; // ISR - günde bir yenilenir
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
