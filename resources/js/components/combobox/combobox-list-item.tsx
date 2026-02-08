import { ComboboxItem, ComboboxItemIndicator } from "@narsil-ui/components/combobox";
import { ItemContent, ItemDescription, ItemRoot, ItemTitle } from "@narsil-ui/components/item";
import parse from "html-react-parser";
import { type ComponentProps } from "react";

type ComboboxListItemProps = ComponentProps<typeof ComboboxItem> & {
  displayValue?: boolean;
  label: string;
  value: string;
};

function ComboboxListItem({ displayValue = true, label, value, ...props }: ComboboxListItemProps) {
  return (
    <ComboboxItem
      value={value}
      render={
        <ItemRoot className="p-0" size="xs">
          <ItemContent className="flex flex-row items-center justify-between">
            <ItemTitle className="font-normal whitespace-nowrap">{parse(label)}</ItemTitle>
            {displayValue && <ItemDescription>{value}</ItemDescription>}
          </ItemContent>
          <ComboboxItemIndicator />
        </ItemRoot>
      }
      {...props}
    />
  );
}

export default ComboboxListItem;
