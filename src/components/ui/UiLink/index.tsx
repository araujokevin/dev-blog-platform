import clsx from "clsx";
import NextLink, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type UiLinkVariant =
  | "primary"
  | "ghost"
  | "default"
  | "muted"
  | "underline"
  | "nav";

type UiLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
    variant?: UiLinkVariant;
  };

const variantClasses: Record<UiLinkVariant, string> = {
  primary:
    "bg-green-700/80 text-white hover:bg-green-800/80 focus-visible:ring-green-700/40 text-sm py-2 px-4",
  ghost: "border border-gray-200 hover:bg-gray-100 py-2 px-4 text-sm",
  default: "text-green-700/80 hover:text-green-800",
  muted: "text-gray-500 hover:text-gray-700",
  underline:
    "text-green-700/80 underline underline-offset-4 hover:text-green-800",
  nav: "text-gray-600 hover:text-green-700/80",
};

export function UiLink({
  children,
  className,
  variant = "default",
  ...props
}: UiLinkProps) {
  return (
    <NextLink
      className={clsx(
        "inline-flex items-center gap-1 transition  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700/30 rounded-sm",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
