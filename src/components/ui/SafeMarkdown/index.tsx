import clsx from "clsx";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

const articleBaseClassName = "w-full max-w-none";

const markdownProseClassName = clsx(
  "prose prose-xm sm:prose-sm lg:prose-base",

  // Headings
  "prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-gray-800",
  "prose-h1:mt-0 prose-h1:mb-5 prose-h1:text-2xl/tight sm:prose-h1:text-3xl/tight lg:prose-h1:text-4xl/tight",
  "prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl/tight sm:prose-h2:text-2xl/tight",
  "prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-lg/tight sm:prose-h3:text-xl/tight",
  "prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-base/tight sm:prose-h4:text-lg/tight",
  "prose-h5:mt-5 prose-h5:mb-2 prose-h5:text-sm/tight sm:prose-h5:text-base/tight",
  "prose-h6:mt-5 prose-h6:mb-2 prose-h6:text-sm/tight prose-h6:text-gray-500",

  // Text
  "prose-p:leading-7 prose-p:text-gray-600 sm:prose-p:leading-8",
  "prose-strong:font-semibold prose-strong:text-gray-700",

  // Lists
  "prose-ul:my-4 prose-ul:text-gray-600",
  "prose-ol:my-4 prose-ol:text-gray-600",
  "prose-li:my-1 prose-li:marker:text-gray-400",

  // Blockquote
  "prose-blockquote:my-8 prose-blockquote:rounded-r-lg prose-blockquote:border-l-4",
  "prose-blockquote:border-l-green-700 prose-blockquote:bg-green-50/60",
  "prose-blockquote:px-5 prose-blockquote:py-3 prose-blockquote:not-italic prose-blockquote:text-gray-700",

  // Misc
  "prose-hr:my-10 prose-hr:border-gray-200",
  "prose-img:my-8 prose-img:rounded-xl",

  // Tables
  "prose-table:my-0 prose-table:w-full prose-table:border-collapse prose-table:overflow-hidden",
  "prose-table:rounded-xl prose-table:border prose-table:border-gray-200 prose-table:bg-white",
  "prose-thead:bg-gray-100/80",
  "prose-th:border prose-th:border-gray-200 prose-th:px-4 prose-th:py-3",
  "prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase",
  "prose-th:tracking-wide prose-th:text-gray-600",
  "prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-3",
  "prose-td:align-top prose-td:text-gray-600",
);

const linkClassName = clsx(
  "font-medium underline underline-offset-4 decoration-green-700/40",
  "transition-colors hover:text-green-800 hover:decoration-green-700",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700/40",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50",
);

const tableWrapperClassName = "my-8 w-full overflow-x-auto";

const tableClassName = "w-full min-w-xl";

const preClassName = clsx(
  "my-8 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50",
  "px-4 py-3 shadow-sm sm:px-5 sm:py-4",
);

const inlineCodeClassName =
  "rounded-md border border-green-200/60 bg-green-50 px-1.5 py-0.5 font-medium text-green-900";

const blockCodeClassName =
  "block w-full bg-transparent p-0 font-mono text-xs/6 text-gray-100 sm:text-sm/7";

const markdownComponents: Components = {
  a: ({ className, ...props }) => (
    <a
      className={clsx(linkClassName, className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  ),

  table: ({ className, ...props }) => (
    <div className={tableWrapperClassName}>
      <table className={clsx(tableClassName, className)} {...props} />
    </div>
  ),

  pre: ({ className, ...props }) => (
    <pre className={clsx(preClassName, className)} {...props} />
  ),

  code: ({ className, ...props }) => {
    const isInline = !className?.includes("language-");

    return (
      <code
        className={clsx(
          isInline ? inlineCodeClassName : blockCodeClassName,
          className,
        )}
        {...props}
      />
    );
  },
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <article className={clsx(articleBaseClassName, markdownProseClassName)}>
      <ReactMarkdown
        components={markdownComponents}
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
