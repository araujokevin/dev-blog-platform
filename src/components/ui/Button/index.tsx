import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonColor = "primary" | "neutral";
type IconPosition = "left" | "right";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  icon?: LucideIcon;
  iconPosition?: IconPosition;
  iconSize?: number;
  children?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  default: "border border-transparent",
  outline: "border bg-transparent",
  ghost: "border border-transparent bg-transparent",
};

const colorClasses: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    default:
      "bg-green-700/80 text-white hover:bg-green-800 focus-visible:ring-green-700/40",
    outline:
      "border-green-700/40 text-green-700 hover:bg-green-50 focus-visible:ring-green-700/30",
    ghost: "text-green-700 hover:bg-green-50 focus-visible:ring-green-700/30",
  },
  neutral: {
    default:
      "bg-gray-700 text-white hover:bg-gray-800 focus-visible:ring-gray-700/40",
    outline:
      "border-gray-300 text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-400/30",
    ghost: "text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-400/30",
  },
};

export function Button({
  variant = "default",
  color = "primary",
  icon: Icon,
  iconPosition = "left",
  iconSize = 16,
  children,
  className,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const iconOnly = !children && Icon;

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded px-4 py-2 text-sm font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer",
        iconOnly && "p-2",
        variantClasses[variant],
        colorClasses[color][variant],
        className,
      )}
      {...props}
    >
      {Icon && iconPosition === "left" ? (
        <Icon size={iconSize} aria-hidden="true" />
      ) : null}

      {children}

      {Icon && iconPosition === "right" ? (
        <Icon size={iconSize} aria-hidden="true" />
      ) : null}
    </button>
  );
}
