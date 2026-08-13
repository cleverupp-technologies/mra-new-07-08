import React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: "body" | "muted" | "small";
  className?: string;
}

export default function Text({
  children,
  variant = "body",
  className,
  ...props
}: TextProps) {
  const variantStyles = {
    body: "text-sm text-[var(--muted)] leading-relaxed font-normal",
    muted: "text-xs text-[var(--muted)]/80 leading-normal",
    small: "text-xs text-[var(--text)] font-medium",
  };

  return (
    <p className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </p>
  );
}
