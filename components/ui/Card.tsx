import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className,
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] bg-[var(--surface)] border border-[var(--border)] p-6 transition-all duration-300 ease-executive",
        hoverEffect && "hover:border-[var(--gold)]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
