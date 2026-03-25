import { SinglePost } from "@/components/ui/SinglePost";
import { SpinLoader } from "@/components/ui/SpinLoader";
import { findPostsBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostsBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
