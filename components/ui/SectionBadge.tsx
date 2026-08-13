import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionBadge({
  children,
  className = "",
  align = "center",
}: SectionBadgeProps) {
  const alignmentClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`inline-block mb-3 sm:mb-4 ${alignmentClass}`}>
      <span
        className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#1F3A8A] text-[#FFD978] font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] shadow-sm border border-[#FFD978]/25 ${className}`}
      >
        {children}
      </span>
    </div>
  );
}

export default SectionBadge;
