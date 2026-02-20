import { Checkbox, Checkboxes } from "@narsil-ui/components/checkbox";
import { isArray } from "lodash-es";
import { FieldProps } from ".";

function CheckboxInput({ id, input, readOnly, required, value, setValue }: FieldProps) {
  if (input.options?.length > 0) {
    return (
      <Checkboxes
        {...input}
        options={input.options}
        values={isArray(value) ? value : []}
        onChange={setValue}
      />
    );
  }

  return (
    <Checkbox
      {...input}
      id={id}
      name={id}
      readOnly={readOnly}
      required={required}
      checked={[true, "1", "true", 1].includes(value)}
      onCheckedChange={setValue}
    />
  );
}

export default CheckboxInput;
