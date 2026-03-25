import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-lg/tight font-semibold sm:text-xl/tight md:text-2xl/tight lg:text-3xl/tight hover:text-green-700/80 transition",
    h2: "text-lg/tight font-semibold md:text-xl/tight hover:text-green-700/80 transition",
  };

  return (
    <Tag className={clsx(headingClassesMap[Tag])}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
