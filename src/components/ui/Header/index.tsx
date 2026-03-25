import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header
      className={clsx(
        "flex justify-between items-center",
        "border-b border-gray-200",
        "mb-12",
      )}
    >
      <h1
        className={clsx(
          "text-green-700/80",
          "text-xl/tight font-semibold py-8",
          "sm:text-2xl/tight py-9",
          "md:text-3xl/tight md:py-10",
        )}
      >
        <Link href="/">The Dev Blog </Link>
      </h1>

      <div className="flex items-center gap-5">
        <button
          className={clsx(
            "flex items-center gap-2",
            "py-2 px-4",
            "rounded",
            "cursor-pointer",
            "text-sm",
            "text-gray-600",
            "hover:bg-gray-100 transition",
          )}
        >
          Sign in <ArrowRightIcon width={16} height={16} />
        </button>
        <button
          className={clsx(
            "border border-gray-200 rounded",
            "py-2 px-4",
            "cursor-pointer",
            "text-sm",
            "text-gray-500",
            "hover:bg-gray-100 transition",
          )}
        >
          Sign up
        </button>
      </div>
    </header>
  );
}
