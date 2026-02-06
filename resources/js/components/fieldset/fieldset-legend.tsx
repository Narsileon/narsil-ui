import { Fieldset } from "@base-ui/react/fieldset";
import { cn } from "@narsil-ui/lib/utils";

function FieldsetLegend({ className, ...props }: Fieldset.Legend.Props) {
  return (
    <Fieldset.Legend
      data-slot="fieldset-legend"
      className={cn(
        "mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
        className,
      )}
      {...props}
    />
  );
}

export default FieldsetLegend;
