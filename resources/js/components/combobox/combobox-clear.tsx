import { Combobox } from "@base-ui/react";
import { Icon } from "@narsil-ui/components/icon";
import { InputGroupButton } from "@narsil-ui/components/input-group";
import { cn } from "@narsil-ui/lib/utils";

function ComboboxClear({ className, render, ...props }: Combobox.Clear.Props) {
  return (
    <Combobox.Clear
      data-slot="combobox-clear"
      className={cn(className)}
      {...props}
      render={
        render ?? (
          <InputGroupButton variant="ghost" size="icon-sm">
            <Icon className="pointer-events-none" name="x" />
          </InputGroupButton>
        )
      }
    />
  );
}

export default ComboboxClear;
