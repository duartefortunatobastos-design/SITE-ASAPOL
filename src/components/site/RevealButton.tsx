import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RevealButton({
  delay = 0,
  wrapperClassName,
  ...props
}: ButtonProps & { delay?: number; wrapperClassName?: string }) {
  return (
    <RevealOnScroll delay={delay} className={cn("inline-flex", wrapperClassName)}>
      <Button {...props} />
    </RevealOnScroll>
  );
}
