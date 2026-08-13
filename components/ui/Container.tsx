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
        "w-full max-w-[430px] sm:max-w-[580px] md:max-w-[720px] lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1480px] mx-auto px-6 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
