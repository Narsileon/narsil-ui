import { ComboboxClear, ComboboxInput } from "@narsil-ui/components/combobox";
import {
  InputGroupAddon,
  InputGroupInput,
  InputGroupRoot,
} from "@narsil-ui/components/input-group";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type ComboboxPopupInputProps = ComponentProps<typeof InputGroupRoot> & {
  clearable?: boolean;
  disabled?: boolean;
};

function ComboboxPopupInput({ className, clearable, disabled, ...props }: ComboboxPopupInputProps) {
  const { trans } = useTranslator();

  return (
    <InputGroupRoot className={cn("m-0", className)} {...props}>
      <ComboboxInput
        placeholder={trans("placeholders.search")}
        render={<InputGroupInput disabled={disabled} />}
      />
      {clearable ? (
        <InputGroupAddon align="inline-end">
          <ComboboxClear disabled={disabled} />
        </InputGroupAddon>
      ) : null}
    </InputGroupRoot>
  );
}

export default ComboboxPopupInput;
