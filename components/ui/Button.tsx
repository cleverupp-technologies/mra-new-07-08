"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  showArrow = true,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#F4B942] text-[#111827] shadow-md hover:bg-[#FFD978] hover:-translate-y-0.5 hover:shadow-lg",
    secondary:
      "bg-transparent text-[#111827] border border-[#111827] hover:bg-[#FFD978]/30 hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#111827] border border-[#111827]/30 hover:border-[#F4B942] hover:text-[#F4B942]",
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 text-[#111827] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
}
