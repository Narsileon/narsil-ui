import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { cn } from "@narsil-ui/lib/utils";
import { type ComponentProps } from "react";

type LabelRequiredProps = ComponentProps<"span"> & {
  label?: string;
};

function LabelRequired({ className, ...props }: LabelRequiredProps) {
  const { trans } = useTranslator();

  const label = trans("tooltips.required", { fallback: "This field is required." });

  return (
    <Tooltip tooltip={label}>
      <span
        data-slot="label-required"
        className={cn("text-destructive", className)}
        aria-label={label}
        {...props}
      >
        *
      </span>
    </Tooltip>
  );
}

export default LabelRequired;
