import { Combobox } from "@narsil-ui/components/combobox";
import { getOptions } from "@narsil-ui/registries/icons";
import { FieldProps } from ".";

function IconInput({ id, input, required, value, setValue }: FieldProps) {
  const options = getOptions();

  return (
    <Combobox
      {...input}
      id={id}
      options={options}
      required={required}
      value={value}
      setValue={setValue}
    />
  );
}

export default IconInput;
