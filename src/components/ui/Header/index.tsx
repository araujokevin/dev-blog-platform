import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";
import { UiLink } from "../UiLink";

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
        <UiLink href="/" variant="default">
          The Dev Blog{" "}
        </UiLink>
      </h1>

      <div className="flex items-center gap-5">
        <UiLink href="#" variant="primary">
          Sign in <ArrowRightIcon width={16} height={16} />
        </UiLink>
        <UiLink href="/register" variant="ghost">
          Sign up
        </UiLink>
      </div>
    </header>
  );
}
