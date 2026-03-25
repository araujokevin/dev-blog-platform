import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className }: SpinLoaderProps) {
  return (
    <div className={clsx("flex justify-center items-center", className)}>
      <div
        className={clsx(
          "w-10 h-10",
          "border-5 border-t-transparent border-slate-800",
          "rounded-full",
          "animate-spin",
        )}
      ></div>
    </div>
  );
}
