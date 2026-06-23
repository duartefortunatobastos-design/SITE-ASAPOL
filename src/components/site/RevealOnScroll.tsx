import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealAnimation = "animate-fade-up" | "animate-scale-x-in" | "animate-fade-in";

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  animation = "animate-fade-up",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: RevealAnimation;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hiddenClass =
    animation === "animate-scale-x-in"
      ? "scale-x-0 opacity-0"
      : "opacity-0 translate-y-6";

  return (
    <Tag
      ref={ref}
      className={cn(className, visible ? animation : hiddenClass)}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  index = 0,
  baseDelay = 0,
  step = 100,
  ...props
}: {
  children: ReactNode;
  className?: string;
  animation?: RevealAnimation;
  as?: ElementType;
  index?: number;
  baseDelay?: number;
  step?: number;
}) {
  return <RevealOnScroll delay={baseDelay + index * step} {...props} />;
}
