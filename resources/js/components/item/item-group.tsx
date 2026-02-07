import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="item-group"
      role="list"
      className={cn(
        "group/item-group",
        "flex w-full flex-col gap-4",
        "has-data-[size=sm]:gap-2.5",
        "has-data-[size=xs]:gap-2",
        className,
      )}
      {...props}
    />
  );
}

export default ItemGroup;
