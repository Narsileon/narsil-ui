import { cn } from "@narsil-ui/lib/utils";
import { cva } from "class-variance-authority";

const buttonGroupVariants = cva(
  cn(
    "flex w-fit items-stretch",
    "[&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit",
    "[&>input]:flex-1",
    "*:focus-visible:relative *:focus-visible:z-10",
    "has-[>[data-slot=button-group]]:gap-2",
    "has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md",
  ),
  {
    variants: {
      orientation: {
        horizontal: cn(
          "*:data-slot:rounded-r-none",
          "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md!",
          "[&>[data-slot]~[data-slot]]:border-l-0",
          "[&>[data-slot]~[data-slot]]:rounded-l-none",
        ),
        vertical: cn(
          "flex-col",
          "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md!",
          "[&>[data-slot]~[data-slot]]:border-t-0",
          "[&>[data-slot]~[data-slot]]:rounded-t-none",
          "*:data-slot:rounded-b-none",
        ),
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

export default buttonGroupVariants;
