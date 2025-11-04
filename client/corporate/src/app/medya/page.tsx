import { getPageMetadata } from "@/lib/metadata";
import MediaContent from "./MediaContent";

export const metadata = getPageMetadata("/medya");

const MediaPage = () => {
  return <MediaContent />;
};

export default MediaPage;
