import { Field } from "@base-ui/react";
import { cn } from "@narsil-ui/lib/utils";
import { VariantProps } from "class-variance-authority";
import fieldVariants from "./field-variants";

type FieldRootProps = Field.Root.Props & VariantProps<typeof fieldVariants>;

function FieldRoot({ className, orientation = "vertical", ...props }: FieldRootProps) {
  return (
    <Field.Root
      data-slot="field-root"
      data-orientation={orientation}
      role="group"
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

export default FieldRoot;
