import { Field } from "@base-ui/react";
import { Label } from "@narsil-ui/components/label";
import { cn } from "@narsil-ui/lib/utils";

type FieldLabelProps = Field.Label.Props & {
  required?: boolean;
};

function FieldLabel({ children, className, required, ...props }: FieldLabelProps) {
  return (
    <Field.Label
      data-slot="field-label"
      className={cn("min-h-7 items-center data-invalid:text-destructive", className)}
      render={
        <Label required={required}>
          <span className="first-letter:uppercase">{children}</span>
        </Label>
      }
      {...props}
    />
  );
}

export default FieldLabel;
