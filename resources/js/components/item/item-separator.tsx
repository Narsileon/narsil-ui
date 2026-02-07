import { Separator } from "@narsil-ui/components/separator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemSeparator({ className, ...props }: ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      className={cn("my-2", className)}
      orientation="horizontal"
      {...props}
    />
  );
}

export default ItemSeparator;
