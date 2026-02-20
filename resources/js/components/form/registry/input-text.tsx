import { Icon } from "@narsil-ui/components/icon";
import {
  InputGroupAddon,
  InputGroupInput,
  InputGroupRoot,
} from "@narsil-ui/components/input-group";
import { FieldProps } from ".";

function InputText({ icon, id, input, readOnly, required, value, setValue }: FieldProps) {
  return (
    <InputGroupRoot>
      <InputGroupInput
        {...input}
        id={id}
        name={id}
        readOnly={readOnly}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {icon ? (
        <InputGroupAddon align="inline-end">
          <Icon className="opacity-50" name={icon} />
        </InputGroupAddon>
      ) : null}
    </InputGroupRoot>
  );
}

export default InputText;
