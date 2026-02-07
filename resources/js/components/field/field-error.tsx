import { Field } from "@base-ui/react";
import { cn } from "@narsil-ui/lib/utils";

function FieldError({ className, ...props }: Field.Error.Props) {
  return (
    <Field.Error data-slot="field-error" className={cn("text-destructive", className)} {...props} />
  );
}

export default FieldError;
