import { cn } from "@narsil-ui/lib/utils";
import { cva } from "class-variance-authority";

const itemMediaVariants = cva(
  cn(
    "flex shrink-0 items-center justify-center gap-2",
    "group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start",
    "[&_svg]:pointer-events-none",
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image: cn(
          "size-10 overflow-hidden rounded-sm",
          "group-data-[size=sm]/item:size-8",
          "roup-data-[size=xs]/item:size-6",
          "[&_img]:size-full [&_img]:object-cover",
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default itemMediaVariants;
