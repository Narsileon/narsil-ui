import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props}
    />
  );
}

export default ItemFooter;
