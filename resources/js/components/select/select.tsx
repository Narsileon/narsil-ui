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
import { useMemo, type ComponentProps } from "react";

type SelectProps = ComponentProps<typeof SelectTrigger> & {
  labelPath?: string;
  options: (string | OptionData)[];
  trigger?: "label" | "value";
  valuePath?: string;
  value?: ComponentProps<typeof SelectRoot>["value"];
  onValueChange?: ComponentProps<typeof SelectRoot>["onValueChange"];
};

function Select({
  labelPath = "label",
  options,
  trigger = "label",
  value,
  valuePath = "value",
  onValueChange,
  ...props
}: SelectProps) {
  const { locale } = useTranslator();

  const selectedOption = useMemo(() => {
    return options.find((option) => value == getUntranslatableData(option, valuePath));
  }, [options, value, valuePath]);

  return (
    <SelectRoot onValueChange={onValueChange}>
      <SelectTrigger {...props}>
        <SelectValue>
          {selectedOption && trigger === "label"
            ? getTranslatableData(selectedOption, labelPath, locale)
            : value}
        </SelectValue>
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectScrollUpArrow />
            <SelectList>
              {options?.map((option, index) => {
                return (
                  <SelectItem value={getUntranslatableData(option, valuePath)} key={index}>
                    <SelectItemText>
                      {getTranslatableData(option, labelPath, locale)}
                    </SelectItemText>
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
