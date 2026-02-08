import { ItemContent, ItemDescription, ItemRoot, ItemTitle } from "@narsil-ui/components/item";
import { cn } from "@narsil-ui/lib/utils";
import parse from "html-react-parser";
import { ComponentProps } from "react";

type ComboboxListItemProps = ComponentProps<typeof ItemRoot> & {
  displayValue?: boolean;
  label: string;
  value: string;
};

function ComboboxListItem({
  className,
  displayValue = true,
  label,
  size = "xs",
  value,
  ...props
}: ComboboxListItemProps) {
  return (
    <ItemRoot className={cn("p-0", className)} size={size} {...props}>
      <ItemContent className="flex flex-row items-center justify-between">
        <ItemTitle className="font-normal whitespace-nowrap">{parse(label)}</ItemTitle>
        {displayValue && <ItemDescription>{value}</ItemDescription>}
      </ItemContent>
    </ItemRoot>
  );
}

export default ComboboxListItem;
