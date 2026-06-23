import { cn } from "@/lib/utils";

export function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-11 w-14 shrink-0", className)}
    >
      <path
        d="M18 38C10.5 38 6 31.5 6 24.5 6 17 10.5 10.5 18 8v7.5c-3.5 0-6 2.8-6 6.5 0 2.2 1 4 2.5 5H18v11Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 38C30.5 38 26 31.5 26 24.5 26 17 30.5 10.5 38 8v7.5c-3.5 0-6 2.8-6 6.5 0 2.2 1 4 2.5 5H38v11Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
