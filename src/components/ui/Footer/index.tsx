import clsx from "clsx";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-300/80">
      <p
        className={clsx(
          "flex",
          "items-center",
          "justify-center",
          "gap-2",
          "text-sm/tight",
          "text-center",
          "py-4",
          "text-gray-500/90",
        )}
      >
        <span> Copyright &copy; {new Date().getFullYear()}</span> |
        <Link href="/" className="hover:underline">
          The Dev Blog
        </Link>
      </p>
    </footer>
  );
}
