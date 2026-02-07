import { LabelRequired, LabelRoot } from "@narsil-ui/components/label";
import { type ComponentProps } from "react";

type LabelProps = ComponentProps<typeof LabelRoot> & {
  required?: boolean;
};

function Label({ children, required = false, ...props }: LabelProps) {
  return (
    <LabelRoot {...props}>
      {children}
      {required ? <LabelRequired /> : null}
    </LabelRoot>
  );
}

export default Label;
