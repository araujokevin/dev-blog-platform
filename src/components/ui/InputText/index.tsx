import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

type InputTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label: string;
  error?: string;
};

export function InputText({
  id,
  name,
  label,
  error,
  className,
  disabled,
  required,
  ...props
}: InputTextProps) {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className={clsx(
          "text-sm font-medium",
          disabled ? "text-gray-400" : "text-gray-700",
        )}
      >
        {label}
        {required ? <span className="ml-1 text-red-500">*</span> : null}
      </label>

      <input
        id={inputId}
        name={name}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={clsx(
          "rounded border bg-white px-3 py-2 text-sm text-gray-700 transition",
          "placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-green-700/30",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
            : "border-gray-300 focus:border-green-700/40",
          className,
        )}
        {...props}
      />

      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
