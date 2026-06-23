import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const bannerAnimations = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "scale-x-in": "animate-scale-x-in",
  "fade-left": "animate-fade-left",
} as const;

export function BannerStagger({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof bannerAnimations;
}) {
  return (
    <div
      className={cn(bannerAnimations[variant], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function BannerSurface({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: ReactNode;
  as?: "div" | "section" | "footer";
}) {
  return (
    <Tag className={cn("banner-surface animate-fade-in", className)}>{children}</Tag>
  );
}
