import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function FieldGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group",
        "flex w-full flex-col gap-5",
        "*:data-[slot=field-group]:gap-4",
        "data-[slot=checkbox-group]:gap-3",
        className,
      )}
      {...props}
    />
  );
}

export default FieldGroup;
