import { FieldData } from "@narsil-ui/types";
import { type ReactNode } from "react";
import InputCheckbox from "./input-checkbox";
import InputPassword from "./input-password";
import InputText from "./input-text";

export type FieldProps = FieldData & {
  value: any;
  setValue: (value: any) => void;
};

export type Registry = {
  [K in FieldProps["input"]["type"]]: (props: FieldProps) => ReactNode;
};

const registry: Registry = {
  ["fieldset"]: (props) => {
    return <div />;
  },
  ["checkbox"]: (props) => {
    return <InputCheckbox {...props} />;
  },
  ["password"]: (props) => {
    return <InputPassword {...props} />;
  },
  ["default"]: (props) => {
    return <InputText {...props} />;
  },
};

export default registry;
