import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";

interface SubheadingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Subheading({
  children,
  className = "",
}: SubheadingProps) {
  return (
    <SectionBadge align="left" className={className}>
      {children}
    </SectionBadge>
  );
}
