import {
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectRoot,
  SelectScrollDownArrow,
  SelectScrollUpArrow,
  SelectTrigger,
  SelectValue,
} from "@narsil-ui/components/select";
import SelectList from "@narsil-ui/components/select/select-list";
import { useTranslator } from "@narsil-ui/components/translator";
import { getTranslatableData, getUntranslatableData } from "@narsil-ui/lib/data";
import type { OptionData } from "@narsil-ui/types";
import { type ComponentProps } from "react";

type SelectProps = ComponentProps<typeof SelectTrigger> & {
  value?: ComponentProps<typeof SelectRoot>["value"];
  onValueChange?: ComponentProps<typeof SelectRoot>["onValueChange"];
  options?: (string | OptionData)[];
};

function Select({ options, value, onValueChange, ...props }: SelectProps) {
  const { locale } = useTranslator();

  return (
    <SelectRoot onValueChange={onValueChange}>
      <SelectTrigger {...props}>
        <SelectValue>{value}</SelectValue>
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectScrollUpArrow />
            <SelectList>
              {options?.map((option, index) => {
                return (
                  <SelectItem value={getUntranslatableData(option, "value")} key={index}>
                    <SelectItemText>{getTranslatableData(option, "label", locale)}</SelectItemText>
                    <SelectItemIndicator />
                  </SelectItem>
                );
              })}
            </SelectList>
            <SelectScrollDownArrow />
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </SelectRoot>
  );
}

export default Select;
