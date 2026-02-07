import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props}
    />
  );
}

export default ItemHeader;
