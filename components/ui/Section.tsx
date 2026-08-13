import React from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  id,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-14 sm:py-20 relative overflow-hidden bg-[var(--bg)]", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
