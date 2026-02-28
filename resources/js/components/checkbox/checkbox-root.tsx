import { Checkbox } from "@base-ui/react/checkbox";
import { cn } from "@narsil-ui/lib/utils";

function CheckboxRoot({ className, ...props }: Checkbox.Root.Props) {
  return (
    <Checkbox.Root
      data-slot="checkbox-root"
      className={cn(
        "peer relative flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-[4px] border bg-accent/50 ring-1 ring-transparent transition-all outline-none",
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        "aria-invalid:border-destructive aria-invalid:ring-destructive",
        "data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:ring-primary",
        "group-has-disabled/field:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export default CheckboxRoot;
