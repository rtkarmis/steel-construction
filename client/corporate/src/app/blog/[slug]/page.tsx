import SchemaBlogDetailPage from "@/components/seo/pages/SchemaBlogDetailPage";
import { getAllBlogPosts } from "@/data/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "./BlogPostContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Yazı Bulunamadı | Güvenoğlu Çelik & Metal",
      description: "Aradığınız blog yazısı bulunamadı.",
      robots: { index: false, follow: false },
    };
  }

  const t = post.translations.tr;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    openGraph: {
      type: "article",
      title: t.metaTitle,
      description: t.metaDescription,
      url: `https://guvenoglucelik.com/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
    },
    alternates: { canonical: `https://guvenoglucelik.com/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const posts = getAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <SchemaBlogDetailPage post={post} />
      <BlogPostContent post={post} allPosts={posts} />
    </>
  );
}
