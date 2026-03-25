import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { AlertCircle } from "lucide-react";

type ErrorMessageProps = {
  icon?: LucideIcon;
  title: string;
  description: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export default function ErrorMessage({
  icon: Icon = AlertCircle,
  title,
  description,
  action,
  className,
}: ErrorMessageProps) {
  return (
    <section
      role="alert"
      aria-live="polite"
      className={clsx(
        "w-full rounded-2xl border border-gray-200  p-8 ",
        "flex min-h-80 flex-col items-center justify-center gap-5 text-center",
        "sm:p-10",
        className,
      )}
    >
      <div
        className={clsx(
          "flex size-14 items-center justify-center rounded-full",
          "border border-red-100 bg-red-50 text-red-500",
          "sm:size-16",
        )}
      >
        <Icon className="size-7 sm:size-8" />
      </div>

      <div className="max-w-2xl space-y-3">
        <h1
          className={clsx(
            "text-2xl font-semibold tracking-tight text-gray-700",
            "sm:text-3xl md:text-4xl",
          )}
        >
          {title}
        </h1>

        <p
          className={clsx(
            "text-sm leading-6 text-gray-600",
            "sm:text-base sm:leading-7 md:text-lg",
          )}
        >
          {description}
        </p>
      </div>

      {action ? <div className="mt-2">{action}</div> : null}
    </section>
  );
}
