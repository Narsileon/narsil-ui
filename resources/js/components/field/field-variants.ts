import { cn } from "@narsil-ui/lib/utils";
import { cva } from "class-variance-authority";

const fieldVariants = cva(
  cn("group/field flex w-full gap-2 data-[invalid=true]:text-destructive"),
  {
    variants: {
      orientation: {
        vertical: cn("flex-col *:w-full", "[&>.sr-only]:w-auto"),
        horizontal: cn(
          "flex-row items-center",
          "*:data-[slot=field-label]:flex-auto",
          "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
          "has-[>[data-slot=field-content]]:items-start",
        ),
        responsive: cn(
          "flex-col *:w-full",
          "[&>.sr-only]:w-auto",
          "@md/field-group:*:data-[slot=field-label]:flex-auto",
          "@md/field-group:*:w-auto",
          "@md/field-group:flex-row @md/field-group:items-center",
          "@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start",
        ),
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

export default fieldVariants;
