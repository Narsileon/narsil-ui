import { cn } from "@narsil-ui/lib/utils";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  cn(
    "group/badge",
    "inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-transparent transition-all",
    "[&>svg]:pointer-events-none [&>svg]:size-3!",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/40",
    "focus-visible:border-primary focus-visible:ring-primary",
    "has-data-[icon=inline-end]:pr-1.5",
    "has-data-[icon=inline-start]:pl-1.5",
  ),
  {
    variants: {
      variant: {
        primary: cn("bg-primary text-primary-foreground", "[a]:hover:bg-primary/80"),
        secondary: cn("bg-secondary text-secondary-foreground", "[a]:hover:bg-secondary/80"),
        destructive: cn(
          "bg-destructive/10 text-destructive",
          "focus-visible:ring-destructive",
          "[a]:hover:bg-destructive/20",
        ),
        ghost: cn("hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50"),
        link: cn("text-primary underline-offset-4", "hover:underline"),
        outline: cn("text-foreground", "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground"),
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export default badgeVariants;
