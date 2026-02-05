import { Combobox } from "@base-ui/react";
import { Icon } from "@narsil-ui/components/icon";
import { cn } from "@narsil-ui/lib/utils";

function ComboboxTrigger({ children, className, ...props }: Combobox.Trigger.Props) {
  return (
    <Combobox.Trigger
      data-slot="combobox-trigger"
      className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <Icon className="pointer-events-none size-4 text-muted-foreground" name="chevron-down" />
    </Combobox.Trigger>
  );
}

export default ComboboxTrigger;
