import { Combobox } from "@base-ui/react";
import { cn } from "@narsil-ui/lib/utils";

function ComboboxChips({ className, ...props }: Combobox.Chips.Props) {
  return (
    <Combobox.Chips
      data-slot="combobox-chips"
      className={cn(
        "flex min-h-9 flex-wrap items-center gap-1 rounded-md border bg-accent/50 bg-clip-padding p-1 pl-2.5 text-sm ring-1 ring-transparent transition-colors",
        "focus-within:border-primary focus-within:ring-primary",
        "has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
        "has-data-[slot=combobox-chip]:pl-1",
        className,
      )}
      {...props}
    />
  );
}

export default ComboboxChips;
