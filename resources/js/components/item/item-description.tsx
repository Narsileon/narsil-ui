import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function ItemDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground",
        "group-data-[size=xs]/item:text-xs",
        "[&>a]:underline",
        "[&>a]:underline-offset-4",
        "[&>a:hover]:text-primary",
        className,
      )}
      {...props}
    />
  );
}

export default ItemDescription;
