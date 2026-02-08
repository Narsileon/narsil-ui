import { useRender } from "@base-ui/react";
import { SelectOption } from "@narsil-cms/types";
import { ComboboxItem } from "@narsil-ui/components/combobox";
import { ComponentProps } from "react";

type ComboboxVirtualizerProps = ComponentProps<typeof ComboboxItem> & {
  item: SelectOption | string;
  render: useRender.ComponentProps<typeof ComboboxItem>["render"];
};

function ComboboxVirtualItem({ render, ...props }: ComboboxVirtualizerProps) {
  return useRender({
    defaultTagName: "div",
    props: props,
    render: render,
  });
}

export default ComboboxVirtualItem;
