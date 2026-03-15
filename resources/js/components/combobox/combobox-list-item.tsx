import { ComboboxItem, ComboboxItemIndicator } from "@narsil-ui/components/combobox";
import { ItemContent, ItemDescription, ItemRoot, ItemTitle } from "@narsil-ui/components/item";
import parse from "html-react-parser";
import { type ComponentProps } from "react";
import { Icon } from "../icon";

type ComboboxListItemProps = ComponentProps<typeof ComboboxItem> & {
  displayValue?: boolean;
  icon?: string;
  label: string;
  value: string;
};

function ComboboxListItem({
  displayValue = true,
  icon,
  label,
  value,
  ...props
}: ComboboxListItemProps) {
  return (
    <ComboboxItem
      value={value}
      render={
        <ItemRoot className="p-0" size="xs">
          <ItemContent className="flex flex-row items-center justify-between">
            {icon && <Icon className="size-4" name={icon} />}
            <ItemTitle className="grow font-normal whitespace-nowrap">{parse(label)}</ItemTitle>
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
