import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost"
};

export function Button({ href, children, variant = "primary", className, type = "button", disabled, target, rel }: ButtonProps) {
  const classes = cn(
    "btn inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || /^mailto:|^tel:/.test(href);
    return (
      <Link className={classes} href={href} target={isExternal ? target ?? "_blank" : target} rel={isExternal ? rel ?? "noopener noreferrer" : rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
