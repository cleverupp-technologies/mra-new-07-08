import React from "react";
import { cn } from "@/lib/utils";

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function IconWrapper({
  children,
  className,
  size = "md",
  ...props
}: IconWrapperProps) {
  const sizeStyles = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-[var(--surface)] border border-[var(--border)] text-white flex items-center justify-center transition-colors duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
