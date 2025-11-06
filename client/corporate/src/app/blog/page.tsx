import SchemaBlogList from "@/components/seo/pages/SchemaBlogPage";
import { getAllBlogPosts } from "@/data/blog";
import { getPageMetadata } from "@/lib/metadata";
import BlogContent from "./BlogContent";

// Statik sayfa generation
export const dynamic = "force-static";
export const revalidate = false;
export const metadata = getPageMetadata("/blog");

const BlogPage = () => {
  const posts = getAllBlogPosts();
  return (
    <>
      <SchemaBlogList posts={posts} />
      <BlogContent posts={posts} />
    </>
  );
};

export default BlogPage;
