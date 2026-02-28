import { cn } from "@narsil-ui/lib/utils";
import { cva } from "class-variance-authority";

const selectTriggerVariants = cva(
  cn(
    "flex w-fit cursor-pointer items-center justify-between gap-1.5 rounded-md border border-transparent bg-transparent text-sm whitespace-nowrap ring-1 ring-transparent transition-all outline-none select-none",
    "[&_svg:not([class*='size-'])]:size-4",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5",
    "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
    "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
    "data-[size=default]:h-9 data-[size=sm]:h-7",
    "data-[size=sm]:rounded-[min(var(--radius-md),10px)]",
    "data-placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: cn(
          "border-border p-2 shadow-sm",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:bg-accent",
        ),
        secondary: cn(
          "border-secondary bg-secondary/80 p-2 text-secondary-foreground",
          "focus-visible:bg-secondary",
          "hover:bg-secondary",
        ),
        inline: cn(
          "border-transparent px-1",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:border-primary focus-visible:bg-accent/50 focus-visible:text-accent-foreground focus-visible:ring-primary",
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default selectTriggerVariants;
