import { cn } from "@/lib/utils";

const alt = "ASAPOL — Associação Sindical Autónoma de Polícia";

const logoSources = {
  full: "/imagens/site/asapol-logo.png",
  emblem: "/imagens/site/asapol-emblem.png",
  hero: "/imagens/site/asapol-logo-hero.jpg",
} as const;

export function AsapolLogo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "emblem" | "hero";
}) {
  const src = logoSources[variant];

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "shrink-0",
        variant === "full" && "object-contain",
        (variant === "emblem" || variant === "hero") && "rounded-full object-cover",
        className,
      )}
    />
  );
}
