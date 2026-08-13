import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
