import { Combobox } from "@narsil-ui/components/combobox";
import { Slider } from "@narsil-ui/components/slider";
import type { FieldData } from "@narsil-ui/types";
import { type ReactNode } from "react";
import ArrayInput from "./array-input";
import CheckboxInput from "./checkbox-input";
import FileInput from "./file-input";
import PasswordInput from "./password-input";
import TableInput from "./table-input";
import TextInput from "./text-input";

export type FieldProps = FieldData & {
  value: any;
  setValue: (value: any) => void;
};

export type Registry = {
  [K in FieldProps["input"]["type"]]: (props: FieldProps) => ReactNode;
};

const registry: Registry = {
  ["array"]: (props) => {
    return <ArrayInput registry={registry} {...props} />;
  },
  ["checkbox"]: (props) => {
    return <CheckboxInput {...props} />;
  },
  ["file"]: (props) => {
    return <FileInput {...props} />;
  },
  ["password"]: (props) => {
    return <PasswordInput {...props} />;
  },
  ["range"]: (props) => {
    return (
      <Slider
        {...props.input}
        id={props.id}
        name={props.id}
        value={props.value}
        onValueChange={props.setValue}
      />
    );
  },
  ["select"]: (props) => {
    return (
      <Combobox
        {...props.input}
        id={props.id}
        options={props.input.options}
        required={props.required}
        value={props.value}
        setValue={props.setValue}
      />
    );
  },
  ["table"]: (props) => {
    return <TableInput registry={registry} {...props} />;
  },
  ["default"]: (props) => {
    return <TextInput {...props} />;
  },
};

export function getField<K extends keyof Registry>(registry: Registry, name: K, props: any) {
  const FieldComponent = registry[name] ?? registry.default;

  return <FieldComponent {...props} />;
}

export default registry;
