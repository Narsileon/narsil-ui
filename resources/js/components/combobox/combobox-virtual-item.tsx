import { useRender } from "@base-ui/react";
import { ComboboxItem } from "@narsil-ui/components/combobox";
import type { OptionData } from "@narsil-ui/types";
import { ComponentProps } from "react";

type ComboboxVirtualizerProps = ComponentProps<typeof ComboboxItem> & {
  item: OptionData | string;
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
