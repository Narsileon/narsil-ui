import { cn } from "@narsil-ui/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import itemMediaVariants from "./item-media-variants";

type ItemMediaProps = ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>;

function ItemMedia({ className, variant = "default", ...props }: ItemMediaProps) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant: variant }), className)}
      {...props}
    />
  );
}

export default ItemMedia;
