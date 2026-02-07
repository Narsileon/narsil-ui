import { Field } from "@base-ui/react";
import { cn } from "@narsil-ui/lib/utils";
import { VariantProps } from "class-variance-authority";
import fieldVariants from "./field-variants";

type FieldRootProps = Field.Root.Props &
  VariantProps<typeof fieldVariants> & {
    width?: number;
  };

function computeWidthClass(width?: number) {
  switch (width) {
    case 25:
      return "col-span-3";
    case 33:
      return "col-span-4";
    case 50:
      return "col-span-6";
    case 67:
      return "col-span-8";
    case 75:
      return "col-span-9";
    default:
      return "col-span-full";
  }
}

function FieldRoot({ className, orientation = "vertical", width, ...props }: FieldRootProps) {
  const widthClassName = computeWidthClass(width);

  return (
    <Field.Root
      data-slot="field-root"
      data-orientation={orientation}
      role="group"
      className={cn(fieldVariants({ orientation }), widthClassName, className)}
      {...props}
    />
  );
}

export default FieldRoot;
