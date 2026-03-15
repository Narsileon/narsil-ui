import { CheckboxIndicator, CheckboxRoot } from "@narsil-ui/components/checkbox";
import { type ComponentProps } from "react";

type CheckboxProps = ComponentProps<typeof CheckboxRoot>;

function Checkbox({ ...props }: CheckboxProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxIndicator />
    </CheckboxRoot>
  );
}

export default Checkbox;
