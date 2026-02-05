import { LabelRequired, LabelRoot } from "@narsil-ui/components/label";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { type ComponentProps } from "react";

type LabelProps = ComponentProps<typeof LabelRoot> & {
  required?: boolean;
  requiredLabel?: string;
};

function Label({
  children,
  required = false,
  requiredLabel = "This field is required",
  ...props
}: LabelProps) {
  return (
    <LabelRoot {...props}>
      {children}
      {required ? (
        <Tooltip tooltip={requiredLabel}>
          <LabelRequired />
        </Tooltip>
      ) : null}
    </LabelRoot>
  );
}

export default Label;
