import { Combobox } from "@base-ui/react";
import { Button } from "@narsil-ui/components/button";
import { Icon } from "@narsil-ui/components/icon";
import { cn } from "@narsil-ui/lib/utils";

function ComboboxChipRemove({
  className,
  render,
  ...props
}: Combobox.ChipRemove.Props & {
  showRemove?: boolean;
}) {
  return (
    <Combobox.ChipRemove
      data-slot="combobox-chip-remove"
      className={cn("-ml-1 opacity-50 hover:opacity-100", className)}
      render={
        render ?? (
          <Button variant="ghost" size="icon-sm">
            <Icon className="pointer-events-none" name="x" />
          </Button>
        )
      }
      {...props}
    />
  );
}

export default ComboboxChipRemove;
