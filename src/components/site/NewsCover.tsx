import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function NewsCover({
  src,
  alt,
  className,
  children,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-navy-gradient", className)}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      {children}
    </div>
  );
}
