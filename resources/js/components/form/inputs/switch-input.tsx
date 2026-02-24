import { SwitchRoot, SwitchThumb } from "@narsil-ui/components/switch";
import { FieldProps } from ".";

function SwitchInput({ id, input, value, setValue }: FieldProps) {
  return (
    <SwitchRoot {...input} id={id} checked={value} onCheckedChange={setValue}>
      <SwitchThumb />
    </SwitchRoot>
  );
}

export default SwitchInput;
