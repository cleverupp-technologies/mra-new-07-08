import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export default function Heading({
  children,
  level = 2,
  className,
  ...props
}: HeadingProps) {
  const levelStyles = {
    1: "text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] leading-[1.15]",
    2: "text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] leading-[1.2]",
    3: "text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] leading-[1.25]",
  };

  const combinedClassName = cn(levelStyles[level], className);

  if (level === 1) {
    return (
      <h1 className={combinedClassName} {...props}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 className={combinedClassName} {...props}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={combinedClassName} {...props}>
      {children}
    </h2>
  );
}

