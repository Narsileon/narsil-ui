import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function FieldTitle({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="field-title"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        "group-data-[disabled=true]/field:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export default FieldTitle;
