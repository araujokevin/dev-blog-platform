import { findPostsBySlugCached } from "@/lib/post/queries";
import { formatDatetime } from "@/utils/format-datetime";
import clsx from "clsx";
import Image from "next/image";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostsBySlugCached(slug);

  return (
    <article className={clsx("mb-16 mt-8 overflow-hidden")}>
      <header className="flex flex-col gap-4 mb-4">
        <h1
          className={clsx(
            "font-semibold text-gray-700",
            "text-2xl/tight",
            "sm:text-3xl",
            "md:text-4xl/tight",
          )}
        >
          {post.title}
        </h1>

        <p className={clsx("text-sm text-gray-500", "md:text-base")}>
          <span className="font-semibold text-gray-600">{post.author}</span>
          <span className="px-2 text-gray-400" aria-hidden="true">
            &middot;
          </span>
          <time className={clsx("text-xs/tight", "md:text-sm/tight")}>
            {formatDatetime(post.createdAt)}
          </time>
        </p>

        <p
          className={clsx(
            "text-sm/relaxed text-gray-500",
            "md:text-base/relaxed",
          )}
        >
          {post.excerpt}
        </p>
      </header>

      <figure className="border-y border-gray-200/80 bg-gray-100/50 mb-4">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={675}
          className="h-auto w-full rounded-lg"
        />
      </figure>

      <section>
        {/* <p
          className={clsx(
            "whitespace-pre-line text-sm/7 text-gray-600",
            "md:text-base/8",
          )}
        >
          {post.content}
        </p> */}
        <SafeMarkdown markdown={post.content} />
      </section>
    </article>
  );
}
