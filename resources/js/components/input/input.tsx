import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "@narsil-ui/lib/utils";

function Input({ className, type, ...props }: InputPrimitive.Props) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-lg border bg-accent/50 px-2.5 py-1 text-sm/7 transition-colors outline-none",
        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "focus-visible:shine-border",
        "placeholder:text-muted-foreground",
        className,
      )}
      type={type}
      {...props}
    />
  );
}

export default Input;
