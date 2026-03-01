import { cn } from "@narsil-ui/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  cn(
    "group/button",
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-clip-padding font-medium whitespace-nowrap ring-1 ring-transparent transition-all duration-300 outline-none select-none",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        destructive: cn(
          "bg-destructive/80 text-destructive-foreground",
          "focus-visible:bg-destructive",
          "hover:bg-destructive",
        ),
        input: cn(
          "border-border bg-accent/50",
          "focus-visible:border-primary focus-visible:ring-primary",
          "hover:bg-accent",
        ),
        link: cn("text-primary underline-offset-4", "focus-visible:underline", "hover:underline"),
        ghost: cn(
          "focus-visible:bg-accent focus-visible:text-accent-foreground",
          "hover:bg-accent hover:text-accent-foreground",
        ),
        outline: cn(
          "border-border bg-background",
          "focus-visible:border-primary focus-visible:bg-accent focus-visible:ring-primary",
          "hover:bg-accent hover:text-accent-foreground",
        ),
        primary: cn(
          "bg-radial from-primary/80 to-primary text-primary-foreground transition-all",
          "focus-visible:bg-primary",
          "hover:from-primary/90",
          "[&_svg]:text-primary-foreground",
        ),
        secondary: cn(
          "bg-secondary/80 text-secondary-foreground transition-all",
          "focus-visible:bg-secondary",
          "hover:bg-secondary",
          "[&_svg]:text-secondary-foreground",
        ),
        sidebar: cn(
          "peer/menu-button w-full justify-start truncate rounded-md p-2 text-left outline-hidden transition-[width,height,padding]",
          "active:bg-accent active:text-accent-foreground",
          "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
          "data-[state=open]:hover:bg-accent data-[state=open]:hover:text-accent-foreground",
          "focus-visible:bg-accent focus-visible:text-accent-foreground",
          "group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:p-2!",
          "group-has-data-[sidebar=menu-action]/menu-item:pr-8",
          "hover:bg-accent hover:text-accent-foreground",
          "[&>span:last-child]:truncate [&>svg]:size-5",
        ),
        "ghost-secondary": cn(
          "focus-visible:bg-secondary focus-visible:text-secondary-foreground",
          "hover:bg-secondary hover:text-secondary-foreground",
        ),
      },
      size: {
        default: "h-9 px-3 py-2 has-[>svg]:px-2",
        lg: "h-11 px-6 has-[>svg]:px-2",
        sm: "h-7 gap-1.5 px-3 has-[>svg]:px-2",
        icon: "size-9",
        "icon-sm": "size-7 rounded-full p-1 [&>svg]:size-5",
        "icon-xs": "size-5 rounded-full p-1 [&>svg]:size-3",
        link: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export default buttonVariants;
