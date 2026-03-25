import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";
import clsx from "clsx";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className={clsx("flex flex-col gap-3 justify-center")}>
      <time
        className={clsx("text-gray-400", "text-xs/tight")}
        dateTime={formatDatetime(createdAt)}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>

      <p className={clsx("text-gray-500 text-sm/normal")}>{excerpt}</p>
    </div>
  );
}
