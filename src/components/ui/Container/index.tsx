import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        "text-gray-600",
        "min-h-screen",
        "bg-gray-50",
        "font-medium",
      )}
    >
      <div className="px-8 m-auto max-w-5xl ">{children}</div>
    </div>
  );
}
