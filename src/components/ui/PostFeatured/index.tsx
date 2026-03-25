import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;
  return (
    <>
      <section
        className={clsx(
          "grid grid-cols-1 gap-8 mb-16",
          "sm:grid-cols-2 group",
          " border border-gray-200/80 rounded-lg p-5 hover:bg-gray-100/90 transition",
        )}
      >
        <PostCoverImage
          linkProps={{
            href: `${postLink}`,
          }}
          imageProps={{
            width: 1200,
            height: 720,
            priority: true,
            src: post.coverImageUrl,
            alt: post.title,
          }}
        />
        <PostSummary
          title={post.title}
          excerpt={post.excerpt}
          createdAt={post.createdAt}
          postLink={postLink}
          postHeading="h1"
        />
      </section>
    </>
  );
}
