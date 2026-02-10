import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-55 dark:focus-visible:ring-offset-night",
        size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-5 text-sm",
        variant === "primary" &&
          "bg-ink text-paper shadow-soft hover:bg-ink/95 dark:bg-gold dark:text-night dark:hover:bg-gold/90",
        variant === "outline" &&
          "border border-ink/25 bg-transparent text-ink hover:bg-ink/5 dark:border-white/15 dark:text-paper dark:hover:bg-white/10",
        variant === "ghost" &&
          "bg-transparent text-ink hover:bg-ink/5 dark:text-paper dark:hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}
