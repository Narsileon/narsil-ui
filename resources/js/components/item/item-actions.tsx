import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div data-slot="item-actions" className={cn("flex items-center gap-2", className)} {...props} />
  );
}

export default ItemActions;
