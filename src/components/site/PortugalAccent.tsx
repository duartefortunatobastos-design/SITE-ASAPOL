import { cn } from "@/lib/utils";

/** Barra verde–vermelho inspirada no emblema nacional do símbolo ASAPOL. */
export function PortugalAccent({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex h-[3px] w-10 shrink-0 overflow-hidden rounded-full", className)}
      aria-hidden
    >
      <span className="flex-1 bg-pt-green" />
      <span className="flex-1 bg-[var(--asapol-red-light)]" />
      <span className="flex-1 bg-pt-red" />
    </span>
  );
}
