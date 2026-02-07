import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "@narsil-ui/lib/utils";
import { type VariantProps } from "class-variance-authority";
import itemVariants from "./item-variants";

type ItemRootProps = useRender.ComponentProps<"div"> & VariantProps<typeof itemVariants>;

function ItemRoot({
  className,
  size = "default",
  variant = "default",
  render,
  ...props
}: ItemRootProps) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ size: size, variant: variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "item-root",
      size: size,
      variant: variant,
    },
  });
}

export default ItemRoot;
