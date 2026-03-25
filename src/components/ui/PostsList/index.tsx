import { PostCoverImage } from "../PostCoverImage";
import clsx from "clsx";

import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostsList() {
  const posts = await findAllPublicPostsCached();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-6",
        "sm:grid-cols-2",
        "lg:grid-cols-3",
        "mb-10",
      )}
    >
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div
            className={clsx(
              "flex flex-col gap-2",
              "border border-gray-200/90",
              "rounded-lg p-4 group hover:bg-gray-100/90 transition",
            )}
            key={post.id}
          >
            <PostCoverImage
              linkProps={{
                href: `${postLink}`,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
              postLink={postLink}
              postHeading="h2"
            />
          </div>
        );
      })}
    </div>
  );
}
