import { Checkbox } from "@narsil-ui/components/checkbox";
import { Icon } from "@narsil-ui/components/icon";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@narsil-ui/components/input-group";
import { FieldData } from "@narsil-ui/types";
import { isArray } from "lodash-es";
import { type ReactNode } from "react";

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
    if (props.input.options?.length > 0) {
      return (
        <Checkboxes
          {...props.input}
          values={isArray(props.value) ? props.value : []}
          onChange={props.setValue}
        />
      );
    } else {
      return (
        <Checkbox
          {...props.input}
          id={props.id}
          name={props.id}
          readOnly={props.readOnly}
          required={props.required}
          checked={[true, "1", "true", 1].includes(props.value)}
          onCheckedChange={props.setValue}
        />
      );
    }
  },
  ["default"]: (props) => {
    return (
      <InputGroup>
        <InputGroupInput
          {...props.input}
          id={props.id}
          name={props.id}
          readOnly={props.readOnly}
          required={props.required}
          value={props.value}
          onChange={(event) => props.setValue(event.target.value)}
        />
        {props.icon ? (
          <InputGroupAddon align="inline-end">
            <Icon className="opacity-50" name={props.icon} />
          </InputGroupAddon>
        ) : null}
      </InputGroup>
    );
  },
};

export default registry;
