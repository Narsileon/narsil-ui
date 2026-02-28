import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border bg-accent/50 px-3 py-2 shadow-sm transition-[color,box-shadow] outline-none placeholder:text-muted-foreground",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        "dark:aria-invalid:ring-destructive/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-within:bg-accent focus-visible:bg-accent",
        className,
      )}
      {...props}
    />
  );
}

export default Textarea;
