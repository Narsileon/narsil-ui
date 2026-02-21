import { Icon } from "@narsil-ui/components/icon";
import {
  InputGroupAddon,
  InputGroupInput,
  InputGroupRoot,
} from "@narsil-ui/components/input-group";
import { useEffect, useState, type ChangeEvent } from "react";
import { FieldProps } from ".";

function FileInput({ icon, id, input, readOnly, required, value, setValue }: FieldProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setPreview(null);

      return;
    }

    if (typeof value === "string") {
      setPreview(value);

      return;
    }

    if (value.type.startsWith("image/")) {
      const objectUrl = URL.createObjectURL(value);

      setPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
        setPreview(null);
      };
    }

    setPreview(null);
  }, [value]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setValue(event.target.files[0]);
    }
  }

  return (
    <InputGroupRoot>
      <InputGroupInput
        {...input}
        id={id}
        name={id}
        readOnly={readOnly}
        required={required}
        onChange={onChange}
      />
      {value && preview ? (
        <InputGroupAddon align="inline-end">
          <img src={preview} className="size-5 rounded" />
        </InputGroupAddon>
      ) : icon ? (
        <InputGroupAddon align="inline-end">
          <Icon className="opacity-50" name={icon} />
        </InputGroupAddon>
      ) : null}
    </InputGroupRoot>
  );
}

export default FileInput;
