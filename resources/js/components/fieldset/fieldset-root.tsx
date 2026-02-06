import { Fieldset } from "@base-ui/react";
import { cn } from "@narsil-ui/lib/utils";

function FieldSetRoot({ className, ...props }: Fieldset.Root.Props) {
  return (
    <Fieldset.Root
      data-slot="fieldset-root"
      className={cn(
        "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className,
      )}
      {...props}
    />
  );
}

export default FieldSetRoot;
