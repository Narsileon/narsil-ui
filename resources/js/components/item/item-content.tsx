import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1",
        "group-data-[size=xs]/item:gap-0",
        "[&+[data-slot=item-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}

export default ItemContent;
