import { Radio } from "@base-ui/react/radio";
import { cn } from "@narsil-ui/lib/utils";

function RadioGroupItem({ className, ...props }: Radio.Root.Props) {
  return (
    <Radio.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item",
        "peer relative flex size-4 shrink-0 rounded-full border bg-accent/50 text-primary ring-1 ring-transparent transition-all outline-none",
        "aria-invalid:border-destructive aria-invalid:ring-destructive",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:ring-primary",
        "group-has-disabled/field:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export default RadioGroupItem;
