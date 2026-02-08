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
      className={cn("-ml-0.5", className)}
      render={
        render ?? (
          <Button variant="ghost-secondary" size="icon-xs">
            <Icon className="pointer-events-none" name="x" />
          </Button>
        )
      }
      {...props}
    />
  );
}

export default ComboboxChipRemove;
